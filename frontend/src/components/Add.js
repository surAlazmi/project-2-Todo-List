
import React, { useState } from "react";




export default function Add(props){
      const [newTitle, setNewTitle]=useState('')

         const createNewTodo=() =>{
          console.log('createNewTodo from AADD' )
          props.createFunc({title:newTitle,isCompleted:false})
      }
    
         return(

        <div className="Add">

             <input type='text' placeholder="Write New Title Here" onChange={(e)=>{
                 setNewTitle(e.target.value)
             }}></input>
             <button onClick={createNewTodo}>      Creat New todo        </button> 

                
                
                
                 </div>
    )

}