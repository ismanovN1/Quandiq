import React from "react";
import {connect} from "react-redux";
import {AuthentificationThunk} from "../../redux_store/Store/AuthReducer";
import * as axios from "axios";


const Authentification = (props) => {
    let  login = React.createRef()
    let  password = React.createRef()
    const send = () => {
        props.AuthentificationThunk({
            login: login.current.value,
            password: password.current.value
        })
    }
    return <div>
        <input type="text"/>
        <input type="text"/>
        <button onClick={send}>sign</button>
     </div>
}

export default connect(null , {AuthentificationThunk})(Authentification)