import apiClient from '@/common/http-config';
import { Repository } from '@vuex-orm/core';
import Gists from '../models/gists';
import { IGistsParamData } from '@/store/interfaces';

export default class GistsRepository extends Repository {
    use = Gists;

    async getGists(params: IGistsParamData): any {
        const { data } = await apiClient.get('/gists', { params });
        this.fresh(data.data);
    }
}
