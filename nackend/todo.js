const {Schema,model}=require('mongoose')

const todoSchema=new Schema({
    title:String,
    isCompleted: Boolean

})
//model
const Todo=model('Todo',todoSchema)
model.exports=Todo
