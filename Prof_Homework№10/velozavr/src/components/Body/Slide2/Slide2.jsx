import React from "react";
import style from "./Slide2.module.css";
import foto1 from "../../img/bicycle.png"

export default function Slide2() {
    return (
        <div className={style.Slide2}>
            <h2 className={style.h2}>Что мы предлагаем</h2>
            <p className={style.info_text}>
                В нашей мастерской можно выполнить комплексное техническое
                обслуживание велосипеда, ремонт и настройку всех его узлов,
                шиномонтажные работы. Вовремя проведенное ТО велосипеда помогает
                избежать многих проблем и дорогого ремонта. Все работы выполняем
                качественно и с душой.
            </p>
            <img className={style.foto1} src={foto1} alt="Bicycle" />
        </div>
    );
}
