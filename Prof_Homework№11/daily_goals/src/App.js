import { useState } from 'react';
import './App.css';
import Container from './components/container/Container';
import FORM from './components/form/FORM';

function App() {
  const [task, setTasks] = useState({})

  console.log(task);

  const updateFormData = (newData) => {
    setTasks(newData)
  }
  return (
    <div>
      <FORM updateFormData = {updateFormData}/>
      <Container day={task.day} task={task.information}/>
    </div>
  );
}

export default App;
