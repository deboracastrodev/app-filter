import {
    GistsStateTypes,
    GistsMutationsTypes,
    GistsGettersTypes,
    GistsActionsTypes
} from '@/store/interfaces';
import { Store as VuexStore, CommitOptions, DispatchOptions } from 'vuex';

export type GistsStoreModuleTypes<S = GistsStateTypes> = Omit<
    VuexStore<S>,
    'commit' | 'getters' | 'dispatch'
> & {
    commit<K extends keyof GistsMutationsTypes, P extends Parameters<GistsMutationsTypes[K]>[1]>(
        key: K,
        payload?: P,
        options?: CommitOptions
    ): ReturnType<GistsMutationsTypes[K]>;
} & {
    getters: {
        [K in keyof GistsGettersTypes]: ReturnType<GistsGettersTypes[K]>;
    };
} & {
    dispatch<K extends keyof GistsActionsTypes>(
        key: K,
        params?: Parameters<GistsActionsTypes[K]>[1],
        options?: DispatchOptions
    ): ReturnType<GistsActionsTypes[K]>;
};
