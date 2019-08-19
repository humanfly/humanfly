import axios from 'axios'
import store from 'store'
import jsCookie from 'js-cookie'

import User from './User'

const AUTH_COOKIE = 'auth';

class Api {
    constructor () {
        this.ax = axios.create();

        this.ax.interceptors.request.use(config => {
            config.headers['Authorization'] = `Bearer ${this.token()}`;

            return config;
        });
    }

    get (uri) {
        return this.ax.get(uri);
    }

    getAll (uris) {
        return axios.all(
            uris.map(uri => this.ax.get(uri))
        );
    }

    post (uri, payload) {
        return this.ax.post(uri, payload);
    }

    postForm (uri, payload) {
        return this.ax.post(uri, payload, { headers : { 'Content-Type' : 'multipart/form-data;' } });
    }

    put (uri, payload) {
        return this.ax.put(uri, payload);
    }

    delete(uri, params) {
        return this.ax.delete(uri, { params });
    }

    token () {
        return jsCookie.get(AUTH_COOKIE);
    }

    user () {
        return new User(store.get('user'));
    }

    storeUser (user) {
        store.set('user', user);

        return new User(user);
    }

    removeUser () {
        store.remove('user');
    }
}

export default new Api()