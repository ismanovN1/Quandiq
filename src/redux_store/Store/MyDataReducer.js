import {AuthApi} from "../../DAL/Api";
import {AuthentificationAC} from "./AuthReducer";

const GETMYDATA = 'MyDataReducer/GETMYDATA'

const initialize = {
    email: null,
    login: null,
    password: null,
    firstName: null,
    lastName: null,
    status: null,
    telNumber: null,
    photo: null,
    followers: null,
    following: null,
    posts: null,
    public: null,
}

const MyDataReducer = (state = initialize, action) => {
    switch (action.type){
        case GETMYDATA:
            return {...state , ...action.MyData}
            break
        default:
            return {...state}
    }
}
export default MyDataReducer

export const getDataAC = (MyData) => {
    debugger
    return {type: GETMYDATA, MyData}
}

export const getDataThunk = () => (dispatch) => {
    AuthApi.GetMe()
        .then(
            response =>{
                // const {resultCode , myData , messages} = response.data
                dispatch(getDataAC(response.data))

                // if(resultCode === 0 ){
                //     dispatch(getDataAC(myData))
                // }
                // else{
                //     console.log(messages)
                // }
            }
        )
        .catch( (e) => {
                console.log(e)
            }
        )
}


