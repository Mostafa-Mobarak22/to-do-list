import React, { useState } from 'react'
import './Input.css'
export default function Input() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const handleAddTask = () => {
    if (newTask.trim()) { 
      setTasks([...tasks, newTask.trim()]); 
      setNewTask('');
      document.querySelector("input").value=""
    }
  };
  const handleRemoveTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };
  return (
    <div className="container-fluid text-white bg-primary pb-5">
        <h1 className='px-5 pt-5 pb-2 text-end'>TO-DO App!</h1>
        <p className='px-5 py-4 text-end'>Add New To-Do</p>
        <div className="d-flex justify-content-center gap-3 my-5">
          <input onChange={(e) => setNewTask(e.target.value)} type="text" className='form-control w-75' placeholder='Enter New Task' />
          <button onClick={()=>{handleAddTask()}} className='btn btn-primary border-2 border-white'>Add</button>
        </div>
        <div className="container text-center">
        {
                tasks.map((task, index) =>{
                    
                        return <>
                        <div key={"task"+index} className='w-50 bg-primary-subtle text-center mx-auto border-3 border-black rounded-3 shadow-lg d-flex justify-content-between m-4'>
                            <h3 key={(index+1)*100} className='text-black text-center ms-3 mt-1'>{task}</h3>
                            <button onClick={()=>{handleRemoveTask(index)}} className='btn btn-primary border-2 border-white'>Delete</button>
                        </div>
                        </>
                    })
                }
            
        
    </div>
    </div>
  )
}
