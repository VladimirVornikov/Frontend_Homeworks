import React from "react";
import style from "./FORM.module.css";

export default function FORM(props) {

    const { updateFormData} = props

    const handlerOfSelect = (event) => {
        event.preventDefault();

        const {days, importance, information} = event.target.elements;

        const formData = {
            day: days.value,
            importance: importance.value,
            information: information.value,
        };

        updateFormData(formData)


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
                        <option value="middle">Средняя</option>
                        <option value="important">Важная</option>
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
