import { MutationTree } from 'vuex';
import { MutationTypes } from './mutation-types';
import { RootMutationsTypes, IRootState, IUserData, IGistsData } from './../../interfaces';

export const mutations: MutationTree<IRootState> & RootMutationsTypes = {
    [MutationTypes.SET_USER_LISTS](state, payload: Array<IUserData>) {
        state.userLists = payload;
    },

    [MutationTypes.SET_GISTS_LISTS](state, payload: Array<IGistsData>) {
        state.gistsLists = payload;
    }
};
