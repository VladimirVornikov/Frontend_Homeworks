import React from 'react';
import Slide1 from './Slide1/Slide1.jsx';
import Slide2 from './Slide2/Slide2.jsx';
import Slide3 from './Slide3/Slide3.jsx';
import Slide4 from './Slide4/Slide4.jsx';
import Slide5 from './Slide5/Slide5.jsx';

function Body() {
    return (
        <div>
            <Slide1/>
            <Slide2/>
            <Slide3/>
            <div style={{display: "flex", flexDirection : "row", height: "480px", width: "1440px"}}>
            <Slide4 text={"Годовое ТО"} color={"rgba(34, 53, 111, 1)"}/>
            <Slide4 text={"Выравнивание колес"} color={"rgba(0, 82, 193, 1)"}/>
            <Slide4 text={"Настройка переключателей"} color={"rgba(118, 181, 139, 1)"}/>
            </div>
            <Slide5/>
        </div>
    )
}

export default Body;