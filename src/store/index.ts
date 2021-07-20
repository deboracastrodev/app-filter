import { createStore } from 'vuex';
import { UserStoreModuleTypes } from './modules/users/types';
import { GistsStoreModuleTypes } from './modules/gists/types';
import { RootStoreModuleTypes } from './modules/root/types';
import root from './modules/root';

import VuexORM from '@vuex-orm/core';

const store = createStore({ ...root, plugins: [VuexORM.install()] });
export default store;

type StoreModules = {
    userModule: UserStoreModuleTypes;
    gistsModule: GistsStoreModuleTypes;
    root: RootStoreModuleTypes;
};

export type Store = UserStoreModuleTypes<Pick<StoreModules, 'userModule'>> &
    GistsStoreModuleTypes<Pick<StoreModules, 'gistsModule'>> &
    RootStoreModuleTypes<Pick<StoreModules, 'root'>>;
