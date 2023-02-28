import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  // const tasks = ["Task 1", "Task 2"]

  const [tasks,setTasks] = useState([])

  const taskElements = tasks.map((task) =>{
      return <h2>{task}</h2>
  })

  function addTask(){
    const taskNew = `Task ${tasks.length + 1}`
    // tasks.push(taskNew)
    setTasks(prevTasks => [...prevTasks,taskNew])

    
    console.log(tasks)
  }

  return (
    <>
    {taskElements}
      <div>
       <button onClick={addTask}>Add tasks</button>
      </div>
    </>
   
  );
}

export default App;
