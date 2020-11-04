import React from "react";
import style from "./home.module.css";
const Home = () => {
    return(
        <div className={style.container}>
            <div className={style.containerText}>
                <p>Sayt to'liq tayyor emas. Tez kunda to'liq versiasi ishga tushiriladi.</p>
                <h1>Saytda  qoling!</h1>
                <button onClick={()=>{alert('Ishonchingiz uchun rahmat !!!')}}>Ok?</button>
            </div>
        </div>
    )
}
export default Home