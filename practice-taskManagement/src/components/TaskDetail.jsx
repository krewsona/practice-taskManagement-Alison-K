import React from 'react';
import { useParams, Link} from 'react-router-dom';
import {tasks} from './TaskList';

const TaskDetail = () => {
    const { taskId } = useParams();
    
    //find method
    const task = tasks.find(t => t.id === taskId);

    return(
        <div>
            {task 
                ? (<div>
                    <h2>{task.title}</h2>
                    <p>{task.description}</p>
                </div>) 
                : (<p> Task not found. Please check the ID.</p>)}
            
            <Link to="/"> Back to Task List</Link>
        </div>
    );
};


export default TaskDetail;