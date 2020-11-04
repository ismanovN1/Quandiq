import {AuthApi} from "../../DAL/Api";

const AUTHENTIFICATION = 'AuthReducer/AUTHENTIFICATION'

const initialize = {
    token: null
}
const AuthReducer = (state = initialize, action) => {
    switch(action.type){
        case AUTHENTIFICATION :
            return {...state , token: action.token}
            break
        default:
            return {...state}
    }
}
export default AuthReducer

export const AuthentificationAC = (token) => ({ type: AUTHENTIFICATION ,token })

export const AuthentificationThunk = (userData) => (dispatch) => {
    AuthApi.Authentication(userData)
        .then(
            response => {
                const {resultCode, token , messages} = response.data
                if (resultCode === 0 ){
                    window.localStorage.setItem('token' , token)
                }
                else{
                    console.log(messages)
                }
            }
        ).catch((e)=>{
            console.log(e)
    })
}