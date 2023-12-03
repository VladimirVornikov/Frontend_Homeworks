import React from "react";
import dino from "../../img/din 1.png";
import style from "./Slide1.module.css"

export default function Slide1() {
    return (
        <div className={style.Slide1}>
            <h1 className={style.h1}>Веломастерская "Велозар"</h1>
            <p className={style.info_text}>
                Мы, мастера веломастерской «Велозар», как раз те самые
                счастливые люди, которые смогли превратить свое увлечение и
                хобби в профессию. Мы сами любим кататься и хотим чтобы Ваш
                двухколесный друг приносил Вам только радость и удовольствие от
                езды.
            </p>
            <img className={style.dino} src={dino} alt="Dino" />
        </div>
    );
}
