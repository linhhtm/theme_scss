import Vue from 'vue';
import _ from 'lodash';

export const types = (identity) =>  _.camelCase(`${identity}_PENDING`);

const loaderModule = {
    namespaced: true,
    mutations: {
        setLoader(state, {types, isLoading}){
            Vue.set(state, types, isLoading)
        }
    },
    actions: {
        pending(context, types){
            context.commit("setLoader", {types, isLoading: true})
        },
        success(context, types){
            context.commit("setLoader", {types, isLoading: false})
        },
        error(context, types){
            context.commit("setLoader", {types, isLoading: false})
        },
    }
}

export default loaderModule;