import axios from 'axios';
import { login_url, registration_url } from "../urls"

export const auth = {
  namespaced: true,
  state: status,
  actions: {
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request');
        axios({ url: login_url,
         data:{
           email: user.email,
           password: user.password
         },
          method: 'POST' })
          .then((resp) => {
            if (resp.data.access_token && resp.data.refresh_token){
              const access_token = resp.data.access_token;
              const refresh_token = resp.data.refresh_token;
              localStorage.setItem('access_token', access_token);
              localStorage.setItem('refresh_token', refresh_token);
              //axios.defaults.headers.common['Authorization'] = token;
              commit('auth_success');
            }
            else{

            }
            resolve(resp);
          })
          .catch((err) => {
            commit('auth_error');
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            reject(err);
          });
      });
    },
    logout({ commit }) {
      return new Promise((resolve) => {
        commit('logout');
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        //delete axios.defaults.headers.common['Authorization'];
        resolve();
      });
    },
    register({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request');
        axios({ url: registration_url, 
        data:{
          name: user.name,
          email: user.email,
          password: user.password
        },
        method: 'POST' })
        .then((resp) => {
          const access_token = resp.data.access_token;
          const refresh_token = resp.data.refresh_token;
          localStorage.setItem('access_token', access_token);
          localStorage.setItem('refresh_token', refresh_token);
          //axios.defaults.headers.common['Authorization'] = token;
          commit('auth_success');
          resolve(resp);
        })
        .catch((err) => {
          commit('auth_error');
          localStorage.removeItem('access_token');
          localStorage.removeItem('refresh_token');
          reject(err);
        });
      });
    },
  },
  mutations: {
    auth_request(state) {
      state.status = 'loading';
    },
    auth_success(state) {
      state.status = 'success';
    },
    auth_error(state) {
      state.status = 'error';
    },
    logout(state) {
      state.status = '';
    },
  },
  getters:{
    userStatus(state) {
      return state.status
    }  
  }
};
