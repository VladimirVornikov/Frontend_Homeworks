import {useState} from "react";
import "./App.css";
import Container from "./components/container/Container";
import FORM from "./components/form/FORM";
import Data from "./components/data/Data";

function App() {

    const [task, setTasks] = useState([]);

    const [dataForm, setDataForm] = useState({});

    const takeDataFromForm = (Data) => {
        setDataForm(Data);
    };

    const updateFormData = (newData) => {
    // Update the state directly with the new data
      setTasks(newData);
};
    const handleDeleteTask = (dayIndex, taskIndex) => {
        const updatedTasks = task
            .map((day, i) => {
                if (i === dayIndex && taskIndex !== undefined) {
                    // Filter out the task with the specified index
                    return {
                        ...day,
                        goals: day.goals.filter((_, j) => j !== taskIndex),
                    };
                } else if (i !== dayIndex) {
                    // Filter out the entire day when taskIndex is undefined
                    return day;
                }
                return null; // Handle other cases by returning null
            })
            .filter(Boolean); // Remove null entries

        updateFormData(updatedTasks);
    };

    return (
        <div>
            <Data updateFormData={updateFormData} dataForm={dataForm} />
            <FORM takeDataFromForm={takeDataFromForm} />

            {task.map(
                (elem, dayIndex) =>
                    elem.goals.length > 0 && (
                        <div key={dayIndex}>
                            {/* I gave the data to our container, before that I separated them to day and to task with priority */}
                            <Container
                                day={elem.name}
                                aim={elem.goals.map((goal) => ({
                                    goal: goal.goal,
                                    priority: goal.priority,
                                }))}
                                dayIndex={dayIndex}
                                handleDeleteTask={handleDeleteTask}
                            />
                        </div>
                    )
            )}
        </div>
    );
}

export default App;
