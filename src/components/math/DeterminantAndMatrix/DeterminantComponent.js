import React, {useEffect, useState} from "react";
import {Button, Container, InputGroup, Form, Col, Row, FormControl, Toast, Table, Jumbotron} from "react-bootstrap";
import {Determinant} from "./D_and_M";
import {DeterminantForm} from "./rForms";
import {InfoDeterminant, InfoMultMat} from "./ss";
import {HideShow} from "../../../utils/Events/domEvent";

const DeterminantCalculate = (props) => {
    let [result , setResult] = useState(null)
    let [show, setShow] = useState(false)
    let [state, setState] = useState('O\'QISH')
    useEffect(()=>{
        if (result) {
            document.documentElement.scrollTop = document.getElementById("toasT").offsetTop
        }
    },[show])


    const Calculate = (value) => {

        let [array, len, val, s] = [Object.keys(value).sort((a, b) => {
            if (a < b) {
                return -1
            }
            return 1
        }), Object.keys(value).length, [], 0]

        for (let i = 0; i < Math.sqrt(len); i++) {
            val.push([])
            for (let j = 0; j < Math.sqrt(len); j++) {
                val[i].push(value[array[s]])
                s++
            }
        }
        setResult(Determinant(val))
        setShow(true)
    }
    debugger
    return (<Container className="mt-5 ">
        <Jumbotron>
            <h1 style={{textAlign: "center", fontSize: "7vw", color: "blue", padding: "20px", paddingTop:"0px"}}>DETERMINANT</h1>
            <p>Diskriminant. Diskriminantni hisoblash haqida</p>
            <Button  variant="primary" onClick={()=>{HideShow(setState)}}>{state}</Button>
            <div style={{display:"none", paddingTop:"5vw"}} id={'myDIV'}><InfoDeterminant/></div>
        </Jumbotron>
        <div className="shadow-sm p-3 mb-5 bg-white rounded">
            <h2 className={'Title text-primary'}>CALCULATE</h2><hr/>
            <DeterminantForm  onSubmit={Calculate} /><br/>
            {result &&
            <Toast onClose={() => setShow(false)} show={show} id="toasT" delay={3000} className={'mx-auto'}  >
                <Toast.Header>
                    <strong className="mr-auto">Result</strong>
                </Toast.Header>
                <Toast.Body>{result}
                    </Toast.Body>
            </Toast>
            }
        </div>


    </Container>

    )
}

export default DeterminantCalculate