import { axiosAdmin } from "../httpHandle";

class Utils {
    /**
     * GET REQUEST
     * @param {String} endpoint
     * @param {Object} pathVars
     * @return {Object} return res
     */

    static wrapperRequestGet = async (types, endpoint = '', pathVars = {}, queryParams = {}) => {

        let mapUrlApi = endpoint;
        Object.keys(pathVars).forEach(pathVar => {
            mapUrlApi = mapUrlApi.replace(`:${pathVar}`, pathVars[pathVar])
        })
        axiosAdmin.defaults.types = types;
        try {
            const res = await axiosAdmin.get(mapUrlApi, {
                queryParams
            });
            return res.data;
        } catch (err) {
            console.log(err);
            return err
        }
    }

    /**
     * POST REQUEST
     * @param {String} endpoint
     * @param {Object} pathVars
     * @return {Object} return res
     */
    static wrapperRequestPost = async (types, endpoint = '', pathVars = {}, data = {}, headers = {}) => {
        
        let mapUrlApi = endpoint;
        Object.keys(pathVars).forEach(keyParams => {
            mapUrlApi = mapUrlApi.replace(`:${keyParams}`, pathVars[keyParams])
        })
        axiosAdmin.defaults.types = types;
        try {
            const res = await axiosAdmin.post(mapUrlApi, data, headers);
            return res.data;
        } catch (err) {
            console.log(err);
            return err;
        }
    }
}

export default Utils;