<template>
    <div class="home">
        <GitList />
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import GitList from '@/components/GitList.vue'; // @ is an alias to /src

@Options({
    components: {
        GitList
    }
})
export default class Home extends Vue {}
</script>
