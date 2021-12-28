import React,{useState} from "react";
import axios from "axios";
export default function Register(){
    const [email,setEmail]=useState('s@gmaile.com')
    const [password,setPassword]=useState('123')
    const [username,setUsername]=useState('jouza7')
 const regsterFunction=(e)=>{
    e.preventDefault()
    console.log('reg')
    const newUser={
        email,
        password,username,
    }
    axios
    .post( 'http://localhost:5000/user/register ',newUser)
     .then((response) => {
   //console.log('RESPONSE: ', response);
      console.log('DATA: ', response.data);
      
      
     })
      .catch((err) => {
      console.log ('ERR: ', err);
   });


}

 


return(
<div className="Register">
    <form action=''>
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="Write email here" onChange={(e)=>{setEmail(e.target.value)}} value={email}></input><br></br>
        
        <label htmlFor='password'>passWordl</label>
    <input type='password' placeholder="Write password here" onChange={(e)=>{setPassword(e.target.value)}} value={password}></input><br></br>
    
    <label htmlFor="username">Username</label>
    <input type='text' placeholder="Write usernam here" onChange={(e)=>{setUsername(e.target.value)}} value={username}></input><br></br>
    
    
    <input type='submit' value='Regster' onClick={regsterFunction}></input>
    </form>
</div>





)



}