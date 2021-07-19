import { UserStateTypes } from './../../interfaces';
import User from '@/database/models/user';

export const state: UserStateTypes = {
    user: new User(),
    users: [],
    isFetching: false,
    rootDispatch: false
};
