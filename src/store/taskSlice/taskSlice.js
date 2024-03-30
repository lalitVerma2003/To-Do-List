import { createSlice } from '@reduxjs/toolkit'

const initialState={
    tasks: JSON.parse(localStorage.getItem("tasks")) || [] 
};

const taskSlice=createSlice({
    name: "task",
    initialState,
    reducers:{
        addTask:(state,action)=>{
            state.tasks.unshift(action.payload);
            localStorage.setItem("tasks",JSON.stringify(state.tasks));
        },
        deleteTask:(state,action)=>{
            state.tasks=state.tasks.filter((task)=>
                task.title!==action.payload.title
            );
            localStorage.setItem("tasks",JSON.stringify(state.tasks));
        },
        changeStatus:(state,action)=>{
            state.tasks=state.tasks.filter((task)=>{
                if(task.title===action.payload.title)
                    task.status="completed";
                return task;
            });
            localStorage.setItem("tasks",JSON.stringify(state.tasks));
        }
    }
});

export const {addTask,deleteTask,changeStatus}=taskSlice.actions;

export default taskSlice.reducer;