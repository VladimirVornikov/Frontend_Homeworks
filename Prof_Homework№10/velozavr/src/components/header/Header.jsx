import React from "react";
import logo from "../img/logo.png";
import style from "./Header.module.css";

function Header() {
    return (
        <header className={style.header}>
            <img src={logo} alt="Logo" className={style.img_logo} />
            <div className={style.info}>
                <p className={`${style.info_p} ${style.p1}`}>О нас</p>
                <p className={style.info_p}>Услуги</p>
                <p className={style.info_p}>Аренда</p>
            </div>
            <button className={style.button}>Связаться</button>
        </header>
    );
}

export default Header;
