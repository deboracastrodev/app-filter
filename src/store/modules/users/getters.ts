import { GetterTree } from 'vuex';
import { UserGettersTypes, UserStateTypes, IRootState } from './../../interfaces';

export const getters: GetterTree<UserStateTypes, IRootState> & UserGettersTypes = {
    getFullPersonalInformation: (state: UserStateTypes) => {
        return state.user ? state.user.fullPersonalInformation : '';
    }
};
