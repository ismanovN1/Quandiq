import React from "react";
import {AuthApi} from "../../DAL/Api";

const Registration = (props) => {

    let [email, login, password, firstName, lastName, telNumber ]= [ React.createRef(),React.createRef(),React.createRef(), React.createRef(),React.createRef(),React.createRef()]

    const send =async () => {
        debugger
        const result = await AuthApi.Registration({
            email: email.current.value,
            login: login.current.value,
            password: password.current.value,
            firstName: firstName.current.value,
            lastName: lastName.current.value,
            telNumber: telNumber.current.value
        })
        console.log(result)
    }

    return(
        <div>
            <input ref={email} placeholder="email" type="text"/> <br/>
            <input ref={login} placeholder="login" type="text"/><br/>
            <input ref={password} placeholder="password" type="text"/> <br/>
            <input ref={firstName} placeholder="firstname" type="text"/><br/>
            <input ref={lastName} placeholder="lastname" type="text"/><br/>
            <input ref={telNumber} placeholder="Telephone Number" type="text"/><br/>
            <button onClick={send}>sign up</button>
        </div>
    )
}
export default Registration