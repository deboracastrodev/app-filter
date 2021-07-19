import { ActionTree } from 'vuex';
import { ActionTypes } from './action-types';
import { MutationTypes } from './mutation-types';
import { RootActionsTypes, IRootState, IUserData, IGistsData } from '@/store/interfaces';

export const actions: ActionTree<IRootState, IRootState> & RootActionsTypes = {
    [ActionTypes.GET_ALL_USER](context, payload: IUserData[]) {
        context.commit(MutationTypes.SET_USER_LISTS, payload);
    },
    [ActionTypes.GET_GISTS_LISTS](context, payload: IGistsData[]) {
        context.commit(MutationTypes.SET_GISTS_LISTS, payload);
    }
};
