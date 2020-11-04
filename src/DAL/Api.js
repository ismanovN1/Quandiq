import * as axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:4000/',
    headers: {
        'x-auth-token': window.localStorage.getItem('token') || null
    }

});

export const AuthApi = {
    Registration(data) {
        return instance.post('api/user/register', data)
    },
    async Authentication(data){
        return instance.post('api/user/auth' , data)
    },
    GetMe(){
        return instance.get('api/user/me')
    }
}