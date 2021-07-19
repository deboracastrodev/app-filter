import { Module, ModuleTree } from 'vuex';
import { IRootState } from '@/store/interfaces';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { state } from './state';
import userModule from '../users';
import gistsModule from '../gists';

const modules: ModuleTree<IRootState> = {
    userModule,
    gistsModule
};

const root: Module<IRootState, IRootState> = {
    state,
    getters,
    mutations,
    actions,
    modules
};

export default root;
