import { GetterTree } from 'vuex';
import { IRootGettersTypes, IRootState, IUserData, IGistsData } from './../../interfaces';

export const getters: GetterTree<IRootState, IRootState> & IRootGettersTypes = {
    getUserList: (state: IRootState): IUserData[] => {
        return state.userLists;
    },
    getGistsList: (state: IRootState): IGistsData[] => {
        return state.gistsLists;
    }
};
