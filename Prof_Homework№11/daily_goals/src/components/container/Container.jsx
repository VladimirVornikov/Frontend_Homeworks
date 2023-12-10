import React from "react";
import style from "./Container.module.css";

export default function Container(props) {
    const {day, task} = props;


    console.log(day, task);
    return (
        <div className={style.divTasks}>
            <div className={style.day}>{day}</div>
            <div className={style.task}>INFO</div>
            <div className={style.task}>INFO</div>
            <div className={style.task}>INFO</div>
        </div>
    );
}
