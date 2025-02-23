import todoIcon from './assets/images/direct-hit.png'
import ongoingIcon from './assets/images/glowing-star.png'
import doneIcon from './assets/images/fire.png'

import './App.css';
import TaskForm from "./assets/components/TaskForm.jsx";
import TaskColumn from "./assets/components/TaskColumn.jsx";
import {useEffect, useState} from "react";

const tasksFromStorage = localStorage.getItem('tasks');

const App = () => {

    const [tasks, setTasks] = useState(JSON.parse(tasksFromStorage) || []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);


    const handleDelete = (id) => {
        const newTasks = tasks.filter((task, index) => index !== id);
        setTasks(newTasks);
        // localStorage.setItem('tasks', JSON.stringify(newTasks));
    }


    const handleDrop = (taskIndex, newStatus) => {
        const updatedTasks = tasks.map((task, index) => {
            if (index === parseInt(taskIndex)) {
                return {...task, status: newStatus};
            }
            return task;
        });
        
        setTasks(updatedTasks)
    }

    return (
        <div className="app">
            <TaskForm setTasks={setTasks}/>
            <header className="app-header">
            </header>
            <main className="app-main">
                <TaskColumn icon={todoIcon} title="To do" tasks={tasks} status="todo" handleDrop={handleDrop} handleDelete={handleDelete}/>
                <TaskColumn icon={ongoingIcon} title="Ongoing" tasks={tasks} status="ongoing" handleDrop={handleDrop} handleDelete={handleDelete}/>
                <TaskColumn icon={doneIcon} title="Done" tasks={tasks} status="done" handleDrop={handleDrop} handleDelete={handleDelete} />
            </main>
        </div>
    )
}

export default App;