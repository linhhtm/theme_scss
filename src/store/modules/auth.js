import jwt_decode from "jwt-decode";
import {
    login
} from "../../services/auth/auth.service";

const authModule = {
    state: {
        token: sessionStorage.getItem('token'),
        user: JSON.parse(sessionStorage.getItem('user') || null),
    },
    mutations: {
        setData: (state, {token, user}) => {
            state.token = token;
            state.user = user;
        },
    },
    actions: {
        async login(context, payload){
            let data = await login(payload);
            const token = data.token;
            if(token){
                let user = jwt_decode(token); 
                sessionStorage.setItem('user', JSON.stringify(user)); 
                sessionStorage.setItem('token', token);
                context.commit("setData", {token, user});
            }
            return token;
        },
    }
}

export default authModule;