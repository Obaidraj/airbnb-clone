import axios from "../interceptor/axios-interceptor";

const get = (url, params) => {
    return axios
        .get(url, { params: params })
        .then(handleResponse)
        .catch(handleError);
};

const post = (url, model) => {
    return axios
        .post(url, model)
        .then(handleResponse)
        .catch(handleError);
};

const put = (url, model) => {
    return axios
        .put(url, model)
        .then(handleResponse)
        .catch(handleError);
};

const patch = (url, model) => {
    return axios
        .patch(url, model)
        .then(handleResponse)
        .catch(handleError);
};

const remove = (url, id) => {
    return axios
        .delete(url, id)
        .then(handleResponse)
        .catch(handleError);
};


function handleResponse(response) {
    if (response.results) { return response.results; }
    if (response.data) { return response.data; }
    return response;
}

function handleError(error) {
    if (error.data) { return error.data; }
    return error;
}

export const wrapper = { get, post, put, patch, remove };