import React from "react";
import matrix1 from "../../../images/matrix1.jpg"
import matrix2 from "../../../images/matrix2.jpg"
import matrix3 from "../../../images/matrix3.jpg"
import matrix11 from "../../../images/matrix11.jpg"
import matrix22 from "../../../images/matrix22.jpg"
import matrix23 from "../../../images/matrix23.jpg"
import matrix24 from "../../../images/matrix24.jpg"
import matrix25 from "../../../images/matrix25.jpg"
import './ss.css'

export const InfoMultMat = () => {
    return (
        <div>
            <p>A - satr martitsa va B - ustun matritsa bir xil sondagi elementlarga ega bo‘lsin deylik.
                Bunda A satrning B ustunga ko‘paytmasi quyidagicha aniqlanadi:</p>
            <p className ="imgCenter"><img src={matrix1}/></p>
            <p>
                ya’ni ko‘paytma matritsalarning mos elementlari ko‘paytmalarining yig‘indisiga teng bo‘ladi.
                Matritsalarni ko‘paytirishning bu qoidasi satrni ustunga ko‘paytirish qoidasi deb yuritiladi.
                Ikki matritsani ko‘paytirish amali moslashtirilgan matritsalar uchun
                kiritiladi. A matritsaning ustunlari soni B matritsaning satrlari soniga
                teng bo‘lsa, A va B matritsalar moslashtirilgan deyiladi.
            </p>
            <p>
                4-ta’rif. <i>m x p</i> o‘lchamli  A=(a <sub><i>ij</i></sub>) matritsaning <i>p x n</i> o‘lchamli A=(a <sub><i>jk</i></sub>)
                matritsaga ko‘paytmasi <i>AB</i> deb, c<sub><i>ik</i></sub> elementi <i>A</i> matritsaning <i>i</i> -satrini <i>B</i> matritsaning
                <i>j</i>-ustuniga satrni ustunga ko‘paytirish qoidasi bilan, ya’ni
                <img src={matrix2}/>(qo‘shiluvchlari quyidagi sxemada keltirilgan) kabi aniqlanadigan<i>m x n</i> o‘lchamli
                 <i> C=c<sub>ik</sub></i>
                matritsaga aytiladi.
            </p>
            <p className="imgCenter"><img src={matrix3}/></p>
        </div>
    )
}
export const InfoInverseMatrix = () => {
    return(
        <div>
            <p>Agar A va  A<sup>-1</sup> kvadrat matritsalar uchun AA<sup>-1</sup> = A<sup>-1</sup>A = <i>I</i> tenglik bajarilsa, A<sup>-1</sup>
                matritsa A matritsaga teskari matritsa deyiladi.</p>
            <p>Sonlarda,k<sup>-1</sup> mavjud bo‘lishi k =/= 0
                bo‘lishi talab etilgani kabi, matritsalarda, A<sup>-1</sup> mavjud bo‘lishi uchun
                det A =/= 0 bo‘lishi talab qilinadi.</p>
            <p>Agar det A = 0 bo‘lsa, A matritsaga singular matritsa deyiladi. Bunda
                singular so‘ziga sinonim sifatida «xos» yoki «maxsus» terminlaridan ham
                foydalaniladi. Agar det A =/= 0 bo‘lsa, A
                matritsa nosingular (yoki xosmas yoki
                maxsusmas) matritsa deb ataladi.</p>
            <p>Agar A matritsada avval elementlarni mos algebraik to‘ldiruvchilar bilan
                almashtirilsa va keyin transponirlansa, hosil bo‘lgan matritsa
                A matritsaga biriktirilgan matritsa deyiladi va <i>adjA</i> bilan belgilanadi:
                <p><img src={matrix11}/></p>
            </p>


        </div>
    )
}
export const InfoDeterminant = () => {
    return(
        <div>
            <p><img src={matrix22} /></p>
            <p>kabi belgilanadi va aniqlanadi.
                 <i>a<sub>11</sub>, a<sub>12</sub>, a<sub>21</sub>, a<sub>22</sub></i>
                sonlarga determinantning elementlari deyiladi. Bunda
                <i>, a<sub>11</sub>, a<sub>12</sub></i> 1-satr, <i>a<sub>21</sub>, a<sub>22</sub></i>  2 -satr,
                <i> a<sub>11</sub>, a<sub>21</sub></i> 1-ustun va
                <i> a<sub>12</sub>, a<sub>22</sub></i> 2 -ustun elementlari hisoblanadi,
                ya’ni <i>a<sub>ij</sub></i>determinantning i -satr va
                j - ustunda joylashgan elementini ifodalaydi.</p>
            <p>
                <i> a<sub>12</sub>, a<sub>22</sub></i>
                elementlar joylashgan diagonalga determinantning bosh diagonali,
                <i> a<sub>12</sub>, a<sub>22</sub></i>
                elementlar joylashgan diagonalga determinantning yordamchi diagonali
                deyiladi.
                </p>
            <p>
                Shunday qilib, ikkinchi tartibli determinant bosh diagonal elementlari
                ko‘paytmasidan yordamchi diagonal elementlari ko‘paytmasini ayrilganiga teng:
            </p><p><img src={matrix23}/></p>
            <p><img src={matrix24}/></p>
            <p>
                kabi belgilanadi va aniqlanadi.
            </p>
            <p>
                Uchinchi tartibli determinant uchun satr, ustun, bosh diagonal, yordamchi
                diagonal tushunchalari ikkinchi tartibli determinantdagi kabi kiritiladi.
                Uchinchi tartibli determinantlarni hisoblashda (1.2.2) tenglikning o‘ng
                tomonidagi birhadlarni topishning yodda saqlash uchun oson bo‘lgan qoidalaridan
                foydalaniladi.

            </p>
            <p>
                «Uchburchak qoidasi» ushbu sxema bilan tasvirlanadi
            </p>
            <p><img src={matrix25}/></p>

        </div>
    )
}