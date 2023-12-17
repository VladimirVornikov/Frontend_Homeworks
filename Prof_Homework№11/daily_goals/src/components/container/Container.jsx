import React from "react";
import style from "./Container.module.css";

export default function Container(props) {
    const { day, aim, dayIndex, handleDeleteTask } = props;

    const handleDeleteTaskItem = (taskIndex) => {
        handleDeleteTask(dayIndex, taskIndex);
    };

    const handleDeleteWholeTask = () => {
        console.log("Deleting whole task. Day Index:", dayIndex);
        handleDeleteTask(dayIndex);
    };

    return (
        <div className={aim.length > 3 ? style.divTasksFor140px : style.divTasksFor70px}>
            
        
            <div className={style.day}>{day}</div>
            <div className={style.tasksContainer}>
                {aim.map((elem, index) => (
                    <div key={index} style={{backgroundColor: elem.priority == 1 ? "red" : "green"}}className={style.task} >
                        <p style={{color: "white", fontSize: "24px"}}>{elem.goal}</p>
                        <p className={style.cross} onClick={() => handleDeleteTaskItem(index)}>X</p>
                        </div>
                    
                ))}
            </div>
            <p className={style.crossDiv} onClick={handleDeleteWholeTask}>X</p>
        </div>
    );
}
