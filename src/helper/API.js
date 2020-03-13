import axios from 'axios';

export default class API {

    static async isAuthenticated() {
        const response = await axios.get(`/api/isAuthenticated?delay=0`, {
            headers: {'Cache-Control': 'no-cache'},
            withCredentials: true
        });
        return response.data;
    }

    static async login(form) {
        const response = await axios.post(`/api/login?delay=1500`, form, {
            withCredentials: true
        });
        return response.data;
    }

    static async logout() {
        const response = await axios.post(`/api/logout?delay=1000`, {}, {
            withCredentials: true
        });
        return response.data;
    }

    static async get(path) {
        return (await axios.get(`/api${path}`, {
            withCredentials: true
        })).data;
    }

    static async post(path, data) {
        return (await axios.post(`/api${path}`, data, {
            withCredentials: true
        })).data;
    }

    static async patch(path, data) {
        return (await axios.patch(`/api${path}`, data, {
            withCredentials: true
        })).data;
    }

    static async delete(path) {
        return (await axios.delete(`/api${path}`, {
            withCredentials: true
        })).data;
    }

    static async uploadFile(path, formData) {
        return (await axios.post(`/api${path}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            withCredentials: true
        })).data;
    }

}