import React from "react";
export default function Todo(props){

    const {_id, title,isCompleted}=props.task
    return(

        <div className="Todo">
            <input type='checkbox' checked={isCompleted}></input>
             <span>{title}</span>
        <button onClick={()=>{
          props.deleteTodo(_id)
         }}>X</button>

        </div>
    )

}