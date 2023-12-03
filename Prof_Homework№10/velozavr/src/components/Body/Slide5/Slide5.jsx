import React from "react";
import style from "./Slide5.module.css";
import foto2 from "../../img/bicycles.png"

export default function Slide5() {
    return (
        <div className={style.Slide5}>
            <img
                src={foto2}
                alt="Bicycles"
            />
            <h3 className={style.h3}>Прокат велосипедов</h3>
            <p className={style.info_text}>
                У нас вы можете взять на прокат хорого обслуженные и настроенные
                велосипеды. Как раз мы находимся в прекрасном{" "}
            </p>
        </div>
    );
}
