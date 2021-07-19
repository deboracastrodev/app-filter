import { MutationTree } from 'vuex';
import { MutationTypes } from './mutation-types';
import { UserMutationsTypes, UserStateTypes } from './../../interfaces';

export const mutations: MutationTree<UserStateTypes> & UserMutationsTypes = {
    [MutationTypes.SET_IS_FETCHING](state: UserStateTypes, payload: boolean) {
        state.isFetching = payload;
    }
};
