import React, {useEffect, useState} from "react";
import {Button, Col, Form, FormControl, InputGroup, Row} from "react-bootstrap";
import Constructor from "./Constructor";
import  { Field , reduxForm} from "redux-form";


// Matrix
const MatrixSetValue = (props) => {
    useEffect(()=>{
        window.onresize = () => {setDisplay()}
        const setDisplay = () => {
            if (window.innerWidth < 500){
                document.getElementById("display").style.display="block";
            }else {document.getElementById("display").style.display = "flex"}

        }

    })

    const valueN1 = React.createRef()
    const valueM1 = React.createRef()
    const valueN2 = React.createRef()
    const valueM2 = React.createRef()
    const [NM, setNM] = useState(2)
    const [M1, setM] = useState(2)
    const [N2, setN] = useState(2)

    return (<div>
            <p className=" text-center text-primary ">O'lchamlarni kiriting <i>n x m</i></p>
            <Row>
                <Col>
                    <InputGroup>
                        <FormControl ref={valueN1} placeholder=' set "n1"'/><FormControl ref={valueM1} placeholder=' set "m1"'/>
                        <InputGroup.Append>
                            <Button variant="outline-secondary" style={{zIndex: 2}} onClick={() => {
                                if (valueN1.current.value > 0 && valueN1.current.value < 13 && valueM1.current.value > 0 && valueM1.current.value < 13) {
                                    valueN1.current.value && setNM(valueN1.current.value)
                                    valueM1.current.value && setM(valueM1.current.value)
                                } else {
                                    alert(" o'lcham  0 < m < 13  oraliqda bo'lsin")
                                }
                            }}>Ok</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Col>
                <Col>
                    <InputGroup>
                        <FormControl ref={valueN2} placeholder=' set "n2"'/><FormControl ref={valueM2}
                                                                                         placeholder=' set "m2"'/>
                        <InputGroup.Append>
                            <Button variant="outline-secondary" style={{zIndex: 2}} onClick={() => {
                                if (valueN2.current.value > 0 && valueN2.current.value < 13 && valueM2.current.value > 0 && valueM2.current.value < 13) {
                                    valueN2.current.value && setN(valueN2.current.value)
                                    valueM2.current.value && setNM(valueM2.current.value)
                                } else {
                                    alert(" o'lcham  0 < m < 13  oraliqda bo'lsin")
                                }
                            }}>Ok</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Col>
            </Row>
            <hr/>
            <p className=" text-center text-primary ">Matritsa elementlarini kirit<i>n x m</i></p>
            <Form onSubmit={props.handleSubmit} className="m-5 ">
                <div id={'display'} style={{display:"flex"}}>
                    <div className="matrix">matrix A<Constructor n={NM} m={M1} name={'a'}/></div>
                    <div className="matrix" >matrix B<Constructor n={N2} m={NM} name={'b'}/></div>
                </div>
                <div><Button className="btn mt-5" variant="primary" onClick={() => {
                    props.setCols(NM)
                }} type="submit">
                    Calculate
                </Button></div>
            </Form>
        </div>
    )
}

// Determinant

const DeterminantSetValue = (props) => {
    const value = React.createRef()
    const [N  , setN] = useState(2)
    return (<div >
            <p className=" text-center text-primary ">O'lchamlarni kiriting <i>n x m</i></p>
            <Row >
            <Col >
                <InputGroup  className="mr-5 w-50 p-3 mx-auto">
                    <FormControl type={'number'} ref={value} placeholder="n x m"/>

                    <Button variant="outline-secondary"  onClick = {()=>{
                        if (value.current.value > 1 && value.current.value < 13 ){
                            setN(value.current.value)
                        }else{alert( " o'lcham  1 < m < 13  oraliqda bo'lsin")}
                    }}>Ok</Button>

                </InputGroup>
            </Col>
        </Row>
            <hr/>
            <p className=" text-center text-primary ">Determinant elementlarini kirit</p>

            <Form onSubmit = {props.handleSubmit} className="m-5 " >
                <div className={'matrix'} style={{ borderRadius:"0px",display:"flex",justifyContent:"center"}}><Constructor name={'a'} m={N} n={N} /></div>
                <hr/>
                <Button className="btn mt-5" variant="primary" type="submit">
                    Calculate
                </Button>
            </Form>
        </div>
    )
}

// ReverseMatrix
const IMatrixSetValue = (props) => {
    const value = React.createRef()
    const [N  , setN] = useState(2)
    return (<div >
            <p className=" text-center text-primary ">O'lchamlarni kiriting <i>n x n</i></p>
            <Row >
            <Col >
                <InputGroup  className="mr-5 w-50 p-3 mx-auto">
                    <FormControl type={'number'} ref={value} placeholder="O'lchamni kirit"/>

                    <Button variant="outline-secondary"  onClick = {()=>{
                        if (value.current.value > 1 && value.current.value < 13 ){
                            setN(value.current.value)
                        }else{alert( " o'lcham  1 < n < 13  oraliqda bo'lsin")}
                    }}>Ok</Button>

                </InputGroup>
            </Col>
        </Row>
            <hr/>
            <p className=" text-center text-primary ">Matritsa elementlarini kirit</p>
            <Form onSubmit = {props.handleSubmit} className="m-5 " >
                <div className="matrix mx-auto" style={{ display:"flex",justifyContent:"center"}} ><Constructor name={'a'} m={N} n={N}/></div>
                <hr/>
                <Button className="btn mt-5 mx-auto" variant="primary" type="submit">
                    Calculate
                </Button>
            </Form>
        </div>
    )
}

// redux-form
export const MatrixForm = React.memo(reduxForm({form: 'matrix'})(MatrixSetValue))
export const IMatrixForm = React.memo(reduxForm({form: 'rmatrix'})(IMatrixSetValue))
export const DeterminantForm = reduxForm({form: 'determinant'})(DeterminantSetValue)


