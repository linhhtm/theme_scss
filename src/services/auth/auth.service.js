import AUTH_ENDPOINT from '../endpoint/auth.endpoint';
import Utils from '../../utils/utils';
import { types } from '../../store/loader';

const identity = 'login';
export const typesPending = types(identity)

export const login = async (payload) => {
    const res = await Utils.wrapperRequestPost(typesPending, AUTH_ENDPOINT.LOGIN, {
        tenant_name: payload.tenantName,
    }, {
        username: payload.username,
        password: payload.password
    });
    return res
}