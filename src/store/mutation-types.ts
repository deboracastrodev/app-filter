import { MutationTypes as gistsTypes } from '@/store/modules/gists/mutation-types';
import { MutationTypes as usersTypes } from '@/store/modules/users/mutation-types';

export const AllMutationTypes = { ...gistsTypes, ...usersTypes };
