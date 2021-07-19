import { ActionTree } from 'vuex';
import { ActionTypes } from './action-types';
import { MutationTypes } from './mutation-types';
import {
    GistsActionsTypes,
    GistsStateTypes,
    IRootState,
    IGistsParamData
} from '@/store/interfaces';
import apiClient from '@/common/http-config';
import Gists from '@/database/models/gists';

export const actions: ActionTree<GistsStateTypes, IRootState> & GistsActionsTypes = {
    [ActionTypes.GET_GISTS](context, params: IGistsParamData): any {
        return new Promise((resolve, reject) => {
            context.commit(MutationTypes.SET_IS_FETCHING_GISTS, true);
            apiClient
                .get('/gists/public', { params })
                .then(
                    (response) => {
                        resolve(response.data);
                        context.commit(MutationTypes.SET_GISTS_COLLECTION, response.data);
                    },
                    (error) => {
                        reject(error);
                    }
                )
                .finally(() => {
                    context.commit(MutationTypes.SET_IS_FETCHING_GISTS, false);
                });
        });
    }
};
