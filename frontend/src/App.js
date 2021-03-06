import React, { useEffect, useState } from 'react'
import './App.css';
import axios from 'axios'
import Todo from './components/Todo'
import Add from './components/Add';
import Register from './components/Register'


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


  const postNewTodo=(body)=>{
    //console.log('func postNewTodo from APP')
    
      axios
      .post( 'http://localhost:5000/tasks ',body)
       .then((response) => {
     //console.log('RESPONSE: ', response);
        console.log('DATA: ', response.data);
        setTasks(response.data)
        getData()
       })
        .catch((err) => {
        console.log ('ERR: ', err);
     });


  }

  const deleteTodo =(id)=>{
        
      axios
      .delete( 'http://localhost:5000/tasks/' + id)
       .then((response) => {
     //console.log('RESPONSE: ', response);
        console.log('DATA: ', response.data);
        setTasks(response.data)
        getData()
       })
        .catch((err) => {
        console.log ('ERR: ', err);
     });


  }



  const toggleTodo =(id,newStatus)=>{
        
    axios
    .put( 'http://localhost:5000/tasks/${id}/${newStatus} ')
     .then((response) => {
   //console.log('RESPONSE: ', response);
      console.log('DATA: ', response.data);
      setTasks(response.data)
      getData()
     })
      .catch((err) => {
      console.log ('ERR: ', err);
   });


}


 const mapOverTasks = tasks.map((taskObj,i)=> (
 <Todo key={i} task={taskObj} deleteTodo={deleteTodo} 
 toggleTodo={toggleTodo}/>))
     
  


  return (
   /*when click on this button should cell function bring data */

    <div className="App">
      
        <p>App</p>
        {/*<Add createFunc={postNewTodo}></Add>*/}
          <button onClick={getData}>GET TASKE</button>

          {/*{mapOverTasks}*/}
          <Register></Register>



              </div>
  );
}

export default App;
