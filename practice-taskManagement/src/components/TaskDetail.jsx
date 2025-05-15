import React from 'react';
import { useParams, Link} from 'react-router-dom';
import {tasks} from './TaskList';

const TaskDetail = () => {
    const { taskId } = useParams();
    
    
    const task = tasks.find(taskItems => taskItems.id === taskId);

    return(
        <div className='task-container'>
            {task 
                ? (<div>
                    <h2>{task.title}</h2>
                    <p>{task.description}</p>
                </div>) 
                : (<p> Task not found. Please check the ID.</p>)}
<br />
            <button className = "back-button">
                <Link to="/"> Back to Task List</Link>
            </button>

        </div>
    );
};


export default TaskDetail;