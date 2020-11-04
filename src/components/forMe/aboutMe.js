import React, {useState} from "react";
import me1 from '../../images/myphoto1.jpg'
import me2 from '../../images/myphoto2.jpg'
import "./aboutMe.css"
import {Col, Row, Container} from "react-bootstrap";

const CreateInfo = (props) => {
    return <Row>
        <Col style={{marginTop: "3vw", color: "white", textAlign: "right", fontSize: "100%"}}><b>{props.name}:</b></Col>
        <Col style={{
            borderLeft: "6px solid red",
            marginTop: "3vw",
            textAlign: "left",
            fontSize: "100%",
            color: "white"
        }}>{props.value}</Col>
    </Row>
}

const AboutMe = () => {
    const [me, setMe] = useState(me2)
    const Blur = () => {
        setMe(me2)
        console.log('izm')
    }
    const Blur2 = () => {
        setMe(me1)
        console.log('izm1')
    }
    return (
        <Container className="shadow  p-3 mb-5 bg-info rounded">
            <div className={'container disp'}>
                <img className={'img'} onMouseLeave={Blur} onMouseEnter={Blur2} src={me}/>
                <div className={'Info'}>
                    <CreateInfo name={<span>
                        <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-person" fill="currentColor"xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                        </svg>First Name
                    </span>} value={'Ismanov'}/>
                    <CreateInfo name={<span>
                        <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-person" fill="currentColor"xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                        </svg>Last Name
                    </span>} value={'Quandiq'}/>
                    <CreateInfo name={<span>
                        <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-calendar-check"
                             fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                            <path fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                        </svg>Birthday
                    </span>} value={'01-April 1998'}/>
                    <CreateInfo name={<span>
                        <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-map" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103zM10 1.91l-4-.8v12.98l4 .8V1.91zm1 12.98l4-.8V1.11l-4 .8v12.98zm-6-.8V1.11l-4 .8v12.98l4-.8z"/>
                        </svg>Location
                    </span>} value={
                        <div>
                            <p><b>Tashkent</b> region</p>
                            <p><b>Uzbekistan</b></p>
                        </div>
                    }/>
                    <CreateInfo name={<span>
                        <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-telephone-fill"
                             fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                  d="M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z"/>
                        </svg>
                        Contact numbers
                    </span>} value={
                        <div>

                            <p>+998 93 397-98-84</p>
                            <p>+998 99 868-98-84</p>
                        </div>
                    }/>
                    <CreateInfo name={
                        <span><svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-envelope"
                                   fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"  d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
                                </svg>Email
                        </span>} value={
                        <div>
                            <address>
                                <a href="mailto:ismanov98q@mail.ru">ismanov98q@mail.ru</a><br/>
                                <a href="mailto:ismanov98q@gmail.com">ismanov98q@gmail.com</a>
                            </address>
                        </div>
                    }/>
                    <CreateInfo name={'Title'} value={'Frontend'}/>
                    <CreateInfo name={'Technology'} value={
                        <div>
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>JS(ES6+)</p>
                            <p>PYTHON(3.X)</p>
                        </div>
                    }/>
                </div>
            </div>
        </Container>
    )
}
export default AboutMe