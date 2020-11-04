import React from "react";
import style from "./renderForm.module.css"
import {Form, FormControl} from "react-bootstrap";


export const RenderForm = ({input,  label,  type, meta: {touched, error, warning}}) => {
    let check = touched && error
    return(
            <div className={`${style.FormsElement} ${ check ? style.Error : undefined}`}>

                    <FormControl style={{minWidth:"60px"}} {...input} type = {type} placeholder={label} />
                    {touched && ((error && <span style={{color:"red"}}>{error}</span>) || (warning && <span>{warning}</span>))}

            </div>


    )
}
export const RenderForm2 = ({input,  label,value}) => {

    return(
            <input {...input} value={value}  />


    )
}