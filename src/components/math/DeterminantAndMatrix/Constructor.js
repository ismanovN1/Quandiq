import {InputGroup} from "react-bootstrap";
import {Field} from "redux-form";
import {RenderForm} from "../../../utils/renderForm/renderForm";
import {number, required} from "../../../utils/validator";
import React from "react";

const Constructor = (props) => {
    const { n , m , name} = props
    let array = []
    for(let i = 0 ; i < m; i++ ){
        array.push([])
        for(let j = 0 ; j < n; j++ ){
            array[i].push( name + (i+1).toString() + (j+1).toString())
        }
    }
    return <div>
        {
            array.map( i => <InputGroup style={{margin:"0 auto" }} ><InputGroup.Prepend> {i.map(k =>
                <Field name={k} type="text"  component={RenderForm} label={k} validate={ [required, number] } />
            )}</InputGroup.Prepend></InputGroup>)
        }
    </div>
}
export default Constructor