import { ActionTypes as gistsType } from './modules/gists/action-types';
import { ActionTypes as userType } from './modules/users/action-types';
import { ActionTypes as rootATypes } from './modules/root/action-types';

export const AllActionTypes = {
    ...gistsType,
    ...userType,
    ...rootATypes
};
