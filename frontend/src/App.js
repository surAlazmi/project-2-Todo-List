import React, { useEffect, useState } from 'react'
import './App.css';
import axios from 'axios'
import Todo from './components/Todo'

function App() {

  const [tasks,setTasks]=useState([])


useEffect(()=>{
getData()

},[])


  const getData=()=>{
    //should bring data using axios from backend(get/tasks)
    
    axios
    .get( 'http://localhost:5000/tasks')
     .then((response) => {
     //console.log('RESPONSE: ', response);
     console.log('DATA: ', response.data);
     setTasks(response.data)
       })
        .catch((err) => {
      console.log ('ERR: ', err);
   });

  }
  const mapOverTasks=tasks.map((taskObj,i)=> (<Todo key={i} task={taskObj}/>))
     
  


  return (
   /*when click on this button should cell function bring data */

    <div className="App">
      
        <p>App</p>
          <button onClick={getData}>GET TASKE</button>

          {mapOverTasks}



              </div>
  );
}

export default App;
