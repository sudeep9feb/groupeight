import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [inputData,setInputData] = useState({"firstName":"","lastName":""})
  function changeHandler(event){
    console.log(event.target.value)
    console.log(event.target.name)
    const {name,value} = event.target
    setInputData(prevData => ({...prevData,[name]:value}))
  }

  function submitHandler(event){
    event.preventDefault()
    console.log(inputData.firstName)
    console.log(inputData.lastName)

  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input 
          placeholder='First Name'
          name='firstName'
          value={inputData.firstName}
          onChange={changeHandler}
        />
        <input 
          placeholder='Last Name'
          name='lastName'
          value={inputData.lastName}
          onChange={changeHandler}
        />
        <br/>
        <button>Add Contact</button>
      </form>
    </div>
   
  );
}

export default App;
