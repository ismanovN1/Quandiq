import React, {useEffect, useState} from "react";
import {Jumbotron, Table, Button, Container, InputGroup, Form, Col, Row, FormControl, Toast} from "react-bootstrap";
import {MultiplicationMatrices} from "./D_and_M";
import {MatrixForm} from "./rForms";
import {InfoMultMat} from "./ss";
import  "./title.css";
import {HideShow} from "../../../utils/Events/domEvent";





const MaxtrixCalculate = (props) => {

    let [result, setResult] = useState(null)
    let [state, setState] = useState('O\'QISH')
    let [cols, setCols] = useState(null)
    let [show, setShow] = useState(false)
    useEffect(()=>{
        if (result) {
            document.documentElement.scrollTop = document.getElementById("toasT").offsetTop
        }
    },[show])

    const Calculate = (value) => {
        let [array, val, A, B] = [Object.keys(value).sort((a, b) => {
            if (a < b) {
                return -1
            }
            return 1
        }), Object.keys(value).length, [], [], []]

        for (const i of array) {
            if (i.includes('b')) {
                B.push(i)
            } else {
                A.push(i)
            }
        }
        const createMatrix = (len1, len2, arr) => {
            let [val, s] = [[], 0]
            for (let i = 0; i < len2; i++) {
                val.push([])
                for (let j = 0; j < len1; j++) {
                    val[i].push(value[arr[s]])
                    s++
                }
            }
            return val
        }
        const siklA = A.length / cols
        const siklB = B.length / cols
        const valueA = createMatrix(A.length / siklA, siklA,A)
        const valueB = createMatrix(siklB, A.length / siklB,B)
        setResult(MultiplicationMatrices(  valueA , valueB))
        setShow(true)
    }

    return (<Container className="mt-5 ">

            <Jumbotron>
                <h1 style={{textAlign: "center", fontSize: "7vw", color: "blue", padding: "20px", paddingTop:"0px"}}>MATRIX</h1>
                <p>Matritsani matritsaga ko'paytirish. Matritsalarni kopaytirish haqida</p>
                <Button  variant="primary" onClick={()=>{HideShow(setState)}}>{state}</Button>
                <div style={{display:"none"}} id={'myDIV'}><InfoMultMat/></div>
            </Jumbotron>
            <div className="shadow-sm p-3 mb-5 bg-white rounded">
                <h2 className={'Title text-primary'}>CALCULATE</h2><hr/>

                <MatrixForm onSubmit={Calculate} setCols={setCols}/><br/>
                {result &&
                <Toast onClose={() => setShow(false)} className={'mx-auto'} show={show} id="toasT" delay={3000}  >
                    <Toast.Header>
                        <strong className="mr-auto">Result</strong>
                    </Toast.Header>
                    <Toast.Body><Table striped bordered hover>
                        <tbody style={{borderRight:"solid",borderLeft:"solid",borderRadius:"20px"}}>{result.map(v => <tr>{v.map(p =><td>{p}</td>)}</tr>)}</tbody></Table></Toast.Body>
                </Toast>
                }
            </div>
        </Container>

    )
}

export default MaxtrixCalculate

