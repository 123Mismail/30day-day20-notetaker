
 
import { createSlice } from "@reduxjs/toolkit";

interface todType{
    id:Date;
    title:string;
    description:string
}

const initialState={
    
       todos :[ {
            id: new Date(),
            title:"hello world",
            description:"greeting is good habit at all"
        }]
}

export const  todoSlice=createSlice({
    name:"todo",
    initialState,
    reducers:{
       addTodo:(state,action)=>{
        const todo={
            id: new Date(),
            title:action.payload,
            description:action.payload
        }
        state.todos.push(todo)
       },
       deleteTodo:(state,action)=>{
       state.todos= state.todos.filter((item)=> item.id !== action.payload.id);
       },
       updateTodo:(state,action)=>{
        state.todos=state.todos.map((pre)=>pre.id === action.payload.id ? {
            ...pre , 
            title:action.payload.title,
            description:action.payload.description
        }:pre )
       }
    }
})

export const  {addTodo,deleteTodo,updateTodo} =todoSlice.actions
export default todoSlice.reducer