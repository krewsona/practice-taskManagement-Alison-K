import React from 'react';
import { Link } from 'react-router-dom';

const tasks = [
    {id: '1', title: 'Task 1: Doctors appointment', description: 'Dr. Smith, 3:30 on Wednesday' },
    {id: '2', title: 'Task 2: Clean up back yard', description: 'Pick up sticks. Mow lawn.' },
    {id: '3', title: 'Task 3: Do homework', description: 'Finish assignments 1 and 2.' },
]


const TaskList = () => {
    return (
        <div className='task-container'>
            <h2> Task List</h2>
            <ul>{tasks.map(task => (
                <li key={task.id}>
                    <Link to={`/task/${task.id}`} className='back-button'>{task.title}</Link>
                </li>                   
                ))}
            </ul>
        </div>
    );
};


export { tasks };
export default TaskList;