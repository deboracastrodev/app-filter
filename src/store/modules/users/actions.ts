import { ActionTree } from 'vuex';
import { ActionTypes } from './action-types';
import { MutationTypes } from './mutation-types';
import { UserActionsTypes, UserStateTypes, IRootState } from '@/store/interfaces';

export const actions: ActionTree<UserStateTypes, IRootState> & UserActionsTypes = {
    [ActionTypes.FETCH_USER]({ commit }, payload: boolean) {
        commit(MutationTypes.SET_IS_FETCHING, payload);
    }
};
