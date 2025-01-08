import React, {useState} from 'react';

function TaskInput({onAddTask}){
    const [task, setTask] = useState('');
    const[description, setDescription] = useState('');

    function handleTask(e){
        e.preventDefault();
        if(task.trim() === ''){
            alert('Task title is required');
            return;
        }
        onAddTask({task, description , completed: false});
        setTask('');
        setDescription('');
    }


    return (<div>
        <form className='input-frm' onSubmit={handleTask}>
            <div className='txt-title'><input type='text' className='title-text' placeholder='Task Title' value={task}
            onChange={(e) => setTask(e.target.value)}></input></div>
            <div className='txt-des'>
                <textarea className='dex-text' placeholder='Task Description' value={description}
                onChange={(e) => setDescription(e.target.value)}></textarea>
            </div>
            <button className='btn btn-primary w-full'>Add task</button>
        </form>
    </div>)

}

export default TaskInput;