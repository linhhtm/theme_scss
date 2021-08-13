import Axios from 'axios'
import store from './store';

const configInterceptor = (API_URL) => {

	const axios = Axios.create({
		baseURL: API_URL,
		headers: {
			Accept:
			'application/json,application/x-www-form-urlencoded,text/plain,*/*',
			'Content-Type': 'application/json;charset=utf-8',
		},
	})
	axios.interceptors.request.use(
		(config) => {
			const token = sessionStorage.getItem('token') || null;
			if (token) {
				config.headers['Authorization'] = token
			}

			//SET LOADER
			store.dispatch('loader/pending', config.types);

			return config
		},
		(error) => {
			store.dispatch('loader/error', error.config.types);
			//ALERT ERRORS
			store.dispatch('alert/error', error);
			return Promise.reject(error)
		}
	)

	axios.interceptors.response.use(
		(res) => {
			store.dispatch('loader/success', res.config.types);
			return res
		},
		(error) => {
			store.dispatch('loader/error', error.config.types);
			//ALERT ERRORS
			store.dispatch('alert/error', error);
			return Promise.reject(error)
		}
	)

	return axios
}

export const axiosAdmin = configInterceptor(process.env.VUE_APP_API_BASE)