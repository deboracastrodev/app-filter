import { ActionContext, DispatchOptions } from 'vuex';
import { MutationTypes as UserMTypes } from './modules/users/mutation-types';
import { ActionTypes as UserATypes } from './modules/users/action-types';
import { MutationTypes as GistsMTypes } from './modules/gists/mutation-types';
import { ActionTypes as GistsATypes } from './modules/gists/action-types';
import { MutationTypes as RootMTypes } from './modules/root/mutation-types';
import { ActionTypes as RootATypes } from './modules/root/action-types';

import User from '@/database/models/user';
import Gists from '@/database/models/gists';
import { Collection } from '@vuex-orm/core';

export interface IGistsData extends Gists {
    isReadonly?: boolean;
}

export interface IGistsParamData {
    since?: string;
    per_page?: number;
}

export interface IUserData extends User {
    isReadonly?: boolean;
}

export interface IRootState {
    userLists: Array<User>;
    gistsLists: Array<Gists>;
}

export interface IMergedState extends IRootState {
    userModule: UserStateTypes;
    gistsModule: GistsStateTypes;
}

export interface IRootGettersTypes {
    getUserList(state: IRootState): IUserData[];
    getGistsList(state: IRootState): IGistsData[];
}

export type RootMutationsTypes<S = IRootState> = {
    [RootMTypes.SET_USER_LISTS](state: S, payload: Array<IUserData>): void;
    [RootMTypes.SET_GISTS_LISTS](state: S, payload: IGistsData[]): void;
};

type AugmentedActionContextRoot = {
    commit<K extends keyof RootMutationsTypes>(
        key: K,
        payload: Parameters<RootMutationsTypes[K]>[1]
    ): ReturnType<RootMutationsTypes[K]>;
} & Omit<ActionContext<IRootState, IRootState>, 'commit'> & {
        dispatch<K extends keyof StoreActions>(
            key: K,
            params?: Parameters<StoreActions[K]>[1],
            options?: DispatchOptions
        ): ReturnType<StoreActions[K]>;
    };

export interface RootActionsTypes {
    [RootATypes.GET_ALL_USER]({ dispatch }: AugmentedActionContextRoot, params: any): void;
    [RootATypes.GET_GISTS_LISTS]({ dispatch }: AugmentedActionContextRoot, params: any): void;
}

/******************************* Gists ***************************/

export interface GistsStateTypes {
    gists?: Gists;
    gists_colletions?: Gists[];
    isFetching?: boolean;
    rootDispatch?: boolean;
    minutesFilter?: string;
}

export interface GistsGettersTypes {
    getGists(state: GistsStateTypes): Collection<Gists> | [];
    getIsFetching(state: GistsStateTypes): boolean;
    getFilterMinutes(state: GistsStateTypes): string;
}

export type GistsMutationsTypes<S = GistsStateTypes> = {
    [GistsMTypes.SET_IS_FETCHING_GISTS](state: S, payload: boolean): void;
    [GistsMTypes.SET_GISTS](state: S, payload: Gists): void;
    [GistsMTypes.SET_GISTS_COLLECTION](state: S, payload: Array<Gists>): void;
};

type AugmentedActionContextGists = {
    commit<K extends keyof GistsMutationsTypes>(
        key: K,
        payload: Parameters<GistsMutationsTypes[K]>[1]
    ): ReturnType<GistsMutationsTypes[K]>;
} & Omit<ActionContext<GistsStateTypes, IRootState>, 'commit'> & {
        dispatch<K extends keyof GistsMutationsTypes>(
            key: K,
            params?: Parameters<GistsMutationsTypes[K]>[1],
            options?: DispatchOptions
        ): ReturnType<GistsMutationsTypes[K]>;
    };

export interface GistsActionsTypes {
    [GistsATypes.GET_GISTS](
        { dispatch }: AugmentedActionContextGists,
        params: IGistsParamData
    ): any;
}

/******************************* Users ***************************/

export interface UserStateTypes {
    user?: User;
    users?: User[];
    isFetching?: boolean;
    rootDispatch?: boolean;
}

export interface UserGettersTypes {
    getFullPersonalInformation(state: UserStateTypes): string;
}

export type UserMutationsTypes<S = UserStateTypes> = {
    [UserMTypes.SET_IS_FETCHING](state: S, payload: boolean): void;
};

export type AugmentedActionContext = {
    commit<K extends keyof UserMutationsTypes>(
        key: K,
        payload: Parameters<UserMutationsTypes[K]>[1]
    ): ReturnType<UserMutationsTypes[K]>;
} & Omit<ActionContext<UserStateTypes, IRootState>, 'commit'>;

export interface UserActionsTypes {
    [UserATypes.FETCH_USER]({ commit }: AugmentedActionContext, payload: boolean): void;
}

export interface StoreActions extends RootActionsTypes, UserActionsTypes, GistsActionsTypes {}

export interface StoreGetters extends IRootGettersTypes, UserGettersTypes, GistsGettersTypes {}
