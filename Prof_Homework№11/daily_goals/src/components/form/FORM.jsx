import React from "react";
import style from "./FORM.module.css";

export default function FORM(props) {

    const { takeDataFromForm} = props

    const handlerOfSelect = (event) => {
        event.preventDefault();

        const {days, importance, information} = event.target.elements;

        const formData = {
            day: days.value,
            priority: importance.value = "important" ? 1 : 0,
            goal: information.value,
        };
        

        takeDataFromForm(formData)


    };

    return (
        <div>
            <form className={style.form} onSubmit={handlerOfSelect}>
                <div>
                    <select name="days" id="day-select">
                        <option value="">Выберите день</option>
                        <option value="Monday">Понедельник</option>
                        <option value="Tuesday">Вторник</option>
                        <option value="Wednesday">Среда</option>
                        <option value="Thursday">Четверг</option>
                        <option value="Friday">Пятница</option>
                        <option value="Saturday">Суббота</option>
                        <option value="Sunday">Воскресенье</option>
                    </select>
                    <select name="importance" id="importance">
                        <option value="">Выберите важность</option>
                        <option value="low">Низкая</option>
                        <option value="important">Высокая</option>
                    </select>
                    <input
                        name="information"
                        type="text"
                        placeholder="Описание"
                    />
                </div>
                <button type="submit">Добавить</button>
            </form>
        </div>
    );
}
