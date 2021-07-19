import { MutationTree } from 'vuex';
import { MutationTypes } from './mutation-types';
import { GistsMutationsTypes, GistsStateTypes } from './../../interfaces';
import { Collection } from '@vuex-orm/core';
import Gists from '@/database/models/gists';

export const mutations: MutationTree<any> & GistsMutationsTypes = {
    [MutationTypes.SET_IS_FETCHING_GISTS](state: GistsStateTypes, payload: boolean) {
        state.isFetching = payload;
    },
    [MutationTypes.SET_GISTS_COLLECTION](state: any, payload: Collection<Gists>) {
        state.gists_colletions = payload;
        this.$repo(Gists).save(payload);
    },
    [MutationTypes.SET_GISTS](state: GistsStateTypes, payload: Gists) {
        state.gists = payload;
    },

    [MutationTypes.SET_FILTER_TIME_MINUTES](state: GistsStateTypes, payload: string) {
        state.minutesFilter = payload;
    }
};
