import axios, { AxiosInstance } from 'axios';

const apiClient: AxiosInstance = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        'Content-type': 'application/json',
        Accept: 'application/vnd.github.v3+json',
        Authorization: `token ${process.env.VUE_APP_TOKEN_GIT}`
    }
});

export default apiClient;
