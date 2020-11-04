import React, {useState} from "react"
import {Switch, Route} from "react-router-dom";
import {Dropdown, DropdownButton, Accordion, Card, Row, Col} from "react-bootstrap"
import MaxtrixCalculate from "./DeterminantAndMatrix/MatrixComponent";
import DeterminantCalculate from "./DeterminantAndMatrix/DeterminantComponent";
import IMaxtrixCalculate from "./DeterminantAndMatrix/IMatrix";

const Mathematika = ({match}) => {
    return (<div>
        <div className={'jumbotron'}
             style={{backgroundImage: "url(https://img.freepik.com/free-vector/realistic-math-chalkboard-background_23-2148154055.jpg?size=626&ext=jpg)"}}>
            <div className={'mx-auto'} style={{right: "5%", width: "6rem"}}><Dropdown>
                <Dropdown.Toggle>
                    Kalkuyalator
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href={"IMatrix"}>Teskari matritsani topish >></Dropdown.Item>
                    <Dropdown.Item href={"MultMatrix"}>Matritsalarni ko'paytirish >></Dropdown.Item>
                    <Dropdown.Item href={"Determinant"}> Determinantni hisoblash >></Dropdown.Item>
                </Dropdown.Menu>

            </Dropdown></div>
        </div>

        <div>
            <Route path={`${match.path}MultMatrix/`} component={MaxtrixCalculate}/>
            <Route path={`${match.path}Determinant/`} render={() => <DeterminantCalculate/>}/>
            <Route path={`${match.path}IMatrix/`} render={() => <IMaxtrixCalculate/>}/>
        </div>
    </div>)
}


export default Mathematika