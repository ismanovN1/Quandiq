import React, {useEffect, useState} from "react";
import {Table, Button, Container, InputGroup, Form, Col, Row, FormControl, Toast, Jumbotron} from "react-bootstrap";
import {InverseMatrix, MultiplicationMatrices} from "./D_and_M";
import {IMatrixForm, MatrixForm} from "./rForms";
import {InfoInverseMatrix} from "./ss";
import {HideShow} from "../../../utils/Events/domEvent";





const IMaxtrixCalculate = (props) => {
    let [state, setState] = useState('O\'QISH')
    let [result, setResult] = useState(null)
    let [cols, setCols] = useState(null)
    let [show, setShow] = useState(false)
    useEffect(()=>{
        if (result) {
            document.documentElement.scrollTop = document.getElementById("toasT").offsetTop
        }
    },[show])

    const Calculate = (value) => {
        let [array, length, val, s ] = [Object.keys(value).sort((a, b) => {
            if (a < b) {
                return -1
            }
            return 1
        }), Object.keys(value).length, [], 0]

            for (let i = 0; i < Math.sqrt(length); i++) {
                val.push([])
                for (let j = 0; j < Math.sqrt(length); j++) {
                    val[i].push(value[array[s]])
                    s++
                }
            }

        setResult(InverseMatrix(val))
        setShow(true)
    }
    return (<Container className="mt-5 ">
        <Jumbotron>
            <h1 style={{textAlign: "center", fontSize: "7vw", color: "blue", padding: "20px", paddingTop:"0px"}}>MATRIX</h1>
            <p>Teskari matritsa. Teskari matritsalarni topish haqida</p>
            <Button  variant="primary" onClick={()=>{HideShow(setState)}}>{state}</Button>
            <div style={{display:"none"}} id={'myDIV'}><InfoInverseMatrix/></div>
        </Jumbotron>
        <div className="shadow-sm p-3 mb-5 bg-white rounded">
            <h2 className={'Title text-primary'}>CALCULATE</h2><hr/>
            <IMatrixForm onSubmit={Calculate} setCols={setCols}/><br/>
            {result &&
            <Toast className={'mx-auto'} onClose={() => setShow(false)} style={{left: "auto",right: "auto", width:"50%"}} show={show} id="toasT" delay={3000}  >
                <Toast.Header>
                    <strong className="mr-auto">Result</strong>
                </Toast.Header>
                <Toast.Body><Table striped bordered hover>
                    <tbody style={{borderRight:"solid",borderLeft:"solid",borderRadius:"20px"}}>{result.map(v => <tr>{v.map(p =><td>{p}</td>)}</tr>)}</tbody></Table></Toast.Body>
            </Toast>}
        </div>

        </Container>

    )
}

export default IMaxtrixCalculate