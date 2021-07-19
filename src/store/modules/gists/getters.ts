import { GetterTree } from 'vuex';
import { GistsGettersTypes, GistsStateTypes, IRootState } from './../../interfaces';

export const getters: GetterTree<GistsStateTypes, IRootState> & GistsGettersTypes = {
    getGists: (state: GistsStateTypes) => {
        return state.gists_colletions || [];
    },
    getIsFetching: (state: GistsStateTypes) => {
        return state.isFetching || false;
    },
    getFilterMinutes: (state: GistsStateTypes) => {
        return state.minutesFilter || '10';
    }
};
