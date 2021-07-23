<template>
    <el-row>
        <el-col :span="24">
            <h4>Filter fetch</h4>
            <h5>Gists update after</h5>
            <el-radio-group
                v-model="filters.minutes"
                datacy="rg-filter-minutes"
                size="small"
                @change="onHandleFilterMinutes(filters.minutes)"
            >
                <el-radio datacy="g-filter10" :label="10" border>10 minutes ago</el-radio>
                <el-radio datacy="g-filter15" :label="15" border>15 minutes ago</el-radio>
                <el-radio datacy="g-filter20" :label="20" border>20 minutes ago</el-radio>
            </el-radio-group>
        </el-col>
    </el-row>
    <el-divider></el-divider>

    <el-row :gutter="10">
        <el-col :span="6">
            <h4>Filter table</h4>
            <label for="input_filter_files">Quantity files (>1)</label>
            <el-input-number
                v-model="filters.files"
                datacy="in-filter-files"
                @change="handleChangeQtFiles"
                id="input_filter_files"
                :min="0"
                :max="99"
            ></el-input-number>
        </el-col>
        <el-col :span="18">
            <el-table
                id="table::gists"
                name="table::gists"
                v-bind:data="gists_model"
                datacy="t-gists"
                style="width: 100%"
                height="400"
                v-loading="isFetching"
            >
                <el-table-column
                    datacy="t-col-update_at"
                    fixed
                    prop="updated_at_formated"
                    label="Update at"
                    width="150"
                >
                </el-table-column>
                <el-table-column datacy="t-col-login" prop="owner.login" label="Login" width="120">
                </el-table-column>
                <el-table-column
                    datacy="t-col-sum_files"
                    label="Quantity Files"
                    width="120"
                    prop="sum_files"
                >
                </el-table-column>
                <el-table-column
                    datacy="t-col-created_at"
                    prop="created_at_formated"
                    label="Created at"
                    width="150"
                >
                </el-table-column>
                <el-table-column
                    datacy="t-col-files"
                    name="file_types_column"
                    label="Files"
                    width="300"
                >
                    <template #default="scope">
                        <div class="name-wrapper" v-html="scope.row.file_types_formated"></div>
                    </template>
                </el-table-column>
                <el-table-column
                    datacy="t-col-description"
                    prop="description"
                    label="Description"
                    width="600"
                >
                </el-table-column>
            </el-table>
        </el-col>
    </el-row>
</template>

<script lang="ts">
import { defineComponent, computed, reactive } from 'vue';
import { useStore } from '@/use/useStore';
import { AllActionTypes } from '@/store/action-types';
import Gists from '@/database/models/gists';
import sub from 'date-fns/sub';
import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
    name: 'GitList',
    setup() {
        const store = useStore();
        const gistRepo = store.$repo(Gists);
        const router = useRouter();
        const route = useRoute();

        const gists = computed(() => store.getters.getGists);
        const isFetching = computed(() => store.getters.getIsFetching);

        const filters = reactive({
            minutes: route.query.minutes ? parseQueryParam(route.query.minutes) : 10,
            files: route.query.num_files ? parseQueryParam(route.query.num_files) : 0
        });

        const gists_model = computed(() => filterDataTable(filters.files));

        function pushWithQuery(query) {
            router.push({
                path: '/',
                query: query
            });
        }

        function parseQueryParam(param: any): number {
            return !Array.isArray(param) ? parseInt(param) : 10;
        }

        async function getGists(minutes = 10): Promise<void> {
            const dataFilter = sub(new Date(), { minutes: minutes }).toISOString();

            await store.dispatch(AllActionTypes.GET_GISTS, {
                since: dataFilter,
                per_page: 100
            });

            pushWithQuery({ ...route.query, minutes: minutes });
        }

        function filterDataTable(num_files = 0) {
            pushWithQuery({ ...route.query, num_files: num_files });

            if (num_files > 0) {
                const filter_where = gistRepo.where('sum_files', num_files).get();
                return filter_where;
            } else {
                return gistRepo.all();
            }
        }

        return {
            gists,
            gists_model,
            filters,
            isFetching,
            getGists,
            filterDataTable
        };
    },
    methods: {
        handleChangeQtFiles(numFiles) {
            if (this.gists_model.length) {
                this.gists_model = this.filterDataTable(numFiles);
            }
        },
        onHandleFilterMinutes(minutes) {
            this.getGists(minutes);
        }
    },
    mounted() {
        this.getGists();
    }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
