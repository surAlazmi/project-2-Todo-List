const express=require('express')
const cors=require('cors')
const app =express()

const db =require('./db')
const Todo=require('./todo')
console.log(Todo)

app.use(express.json())
app.use(cors())



app .get('/',(req,res)=>{

    res.json('GET/is working')
})

//CRUD:creat ,delet ,read,update

app.get('/completed',(req,res)=>{
    Todo.find({isCompleted:true},(err,data)=>{

        if(err){
            console.log('err',err)

        }
        else{
            console.log(data)
            res.json(data)
        }
    })
})


app.get('/filter',(req,res)=>{
    console.log(req.query)
    Todo.find({isCompleted: req.query.isCompleted},(err,data)=>{

       if(err){
            console.log('err',err)

       }
        else{
            //console.log(data)
           res.json(data)
        }
    })
})







app .get('/tasks',(req,res)=>{
    Todo.find({},(err,data)=>{

        if(err)
        {console.log('ERROR:',err)
          }
    
    else
        { res.json(data)


         }
     })
})



app .post('/tasks',(req,res)=>{
  //  console.log("25:",req.body)

    Todo.create(req.body,(err,newTask)=>{


        if(err)
        {console.log('ERROR:',err)
          }
    
    else
        { res.status(201).json(newTask)


        }
     })
})



app .delete('/tasks/:id',(req,res)=>{
    //console.log("37:",req.params.id)

    Todo.deleteOne({_id:req.params.id},(err,deleteObj)=>{


        if(err)
       {//console.log('ERROR:',err)
         }
    
           else
       {      deleteObj.deletedCount===1
              ?res.json("delet this Task successfuly")
             : res.status(404)  .json('This todo is not found')


       }
     })
})


app .delete('/tasks',(req,res)=>{
    //console.log("37:",req.params.id)

    Todo.deleteMany({isCompleted:true},(err,deleteObj)=>{


        if(err)
       {//console.log('ERROR:',err)
         }
    
           else
       {      deleteObj.deletedCount===0
        
              ?res.status(404)  .json('there are no completed todo not found')
             : res.json("delet all compleated todo successfuly")


       }
     })
})









app .put('/tasks/:id',(req,res)=>{
    //console.log("37:",req.params.id)

    Todo.updateOne({_id:req.params.id},
        {title:req.body.newTitle},
        (err,updateObj)=>{


        if(err)
       {//console.log('ERROR:',err)
        res.status(400).json(err)
         }
    
           else

       {     
             //console.log(updateObj)
               updateObj.modifiedCount === 1
              ?res.json("update this Task successfuly")
             : res.status(404)  .json('This todo is not found')


       }
     })
})



app .put('/tasks/:id',(req,res)=>{
    //console.log("37:",req.params.id)

    Todo.updateOne({_id:req.params.id},
        {title:req.body.newTitle},
        (err,updateObj)=>{


        if(err)
       {//console.log('ERROR:',err)
        res.status(400).json(err)
         }
    
           else

       {     
             //console.log(updateObj)
               updateObj.modifiedCount === 1
              ?res.json("update this Task successfuly")
             : res.status(404)  .json('This todo is not found')


       }
     })
})









app.listen(5000,()=>{
    console.log("server is working");
})