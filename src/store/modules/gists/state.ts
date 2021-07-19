import { GistsStateTypes } from './../../interfaces';
import Gists from '@/database/models/gists';

export const state: GistsStateTypes = {
    gists: new Gists(),
    gists_colletions: [],
    isFetching: false,
    rootDispatch: false,
    minutesFilter: '10'
};
