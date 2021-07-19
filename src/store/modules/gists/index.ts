import { Module } from 'vuex';
import { GistsStateTypes, IRootState } from '@/store/interfaces';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { state } from './state';

// Module
const gists: Module<GistsStateTypes, IRootState> = {
    state,
    getters,
    mutations,
    actions
};

export default gists;
