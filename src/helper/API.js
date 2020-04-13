import axios from 'axios';

export const isAuthenticated = async () => {
    const response = await axios.get(`/api/isAuthenticated?delay=0`, {
        headers: {'Cache-Control': 'no-cache'},
        withCredentials: true
    });
    return response.data;
};

export const login = async (form) => {
    const response = await axios.post(`/api/login?delay=1500`, form, {
        withCredentials: true
    });
    return response.data;
};

export const logout = async () => {
    const response = await axios.post(`/api/logout?delay=1000`, {}, {
        withCredentials: true
    });
    return response.data;
};

export const get = async (path) => {
    const response = await axios.get(`/api${path}`, {
        withCredentials: true
    });
    return response.data;
};

export const post = async (path, data) => {
    const response = await axios.post(`/api${path}`, data, {
        withCredentials: true
    });
    return response.data;
};

export const patch = async (path, data) => {
    const response = await axios.patch(`/api${path}`, data, {
        withCredentials: true
    });
    return response.data;
};

export const remove = async (path) => {
    const response = await axios.delete(`/api${path}`, {
        withCredentials: true
    });
    return response.data;
};

export const uploadFile = async (path, formData) => {
    const response = await axios.post(`/api${path}`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        withCredentials: true
    });
    return response.data
};