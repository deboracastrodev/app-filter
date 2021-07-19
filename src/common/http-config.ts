import axios, { AxiosInstance } from 'axios';

const apiClient: AxiosInstance = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        'Content-type': 'application/json',
        Accept: 'application/vnd.github.v3+json',
        Authorization: 'token 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'
    }
});

export default apiClient;
