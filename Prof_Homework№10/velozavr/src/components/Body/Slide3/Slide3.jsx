import React from "react";
import style from "./Slide3.module.css"

export default function Slide3() {
    return (
        <div className={style.Slide3}>
            <div className={style.div_info}>
                <p className={style.info_text}>
                    Приехав к нам однажды, многие наши клиенты становятся
                    постоянными, а часть из них даже друзьями.
                </p>
                <p className={style.info_text}>
                    А также в нашей мастерской можно отремонтировать
                    электросамокат и электровелосипед.
                </p>
            </div>
        </div>
    );
}
