import { Module } from 'vuex';
import { UserStateTypes, IRootState } from '@/store/interfaces';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { state } from './state';

// Module
const users: Module<UserStateTypes, IRootState> = {
    state,
    getters,
    mutations,
    actions
};

export default users;
