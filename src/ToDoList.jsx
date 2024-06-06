import React, { useState } from 'react'



function ToDoList(){

    const[task,setTask]=useState(["Wake up early in morning","Eat Breakfast","Go to office"]);
    const[newTask,setNewTask]=useState("");

function handleInputChange(event){
    setNewTask(event.target.value);

    }

function addTask(){

    if(newTask.trim()!==""){
        setTask(r=>[...task,newTask]);
        setNewTask("");
    }
   
    }

function deleteTask(index){
        const updateTask=task.filter((_,i)=>i !== index);
        setTask(updateTask);
    }


return(<div className="to-do-list">
        <h1>To-Do-List</h1>
        <div>
            <input type="text" placeholder="Enter a task.." value={newTask} onChange={handleInputChange}></input>
            <button className="add-button" onClick={addTask}> Add</button>
        </div>
        <ol>
            {task.map((task,index)=>
            <li key={index}>
                <span className="text">{task}</span>
                <button
                    className="delete-button"
                    onClick={()=>deleteTask(index)}>
                        Delete
                </button>
            </li>
        )}
        </ol>
</div>);
}

export default ToDoList