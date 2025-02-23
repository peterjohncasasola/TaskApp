import "./TaskForm.css";
import Tag from "./Tag.jsx";
import tags from '../../tags.js'
import {useState} from "react";

const TaskForm = ({setTasks}) => {

    const defaultData = {
        task: "",
        status: "todo",
        tags: []
    }

    const [taskData, setTaskData] = useState(defaultData);

    const checkTag = (selectedTag) => {
        return taskData.tags.some(tag => tag === selectedTag);
    }

    const selectTag = (selectedTag) => {
        if (checkTag(selectedTag)) {

            const filteredTags = taskData.tags.filter(tag => tag !== selectedTag);

            setTaskData(tags => {
                return {...tags, tags: filteredTags};
            });

        } else {
            setTaskData(taskData => {
               return { ...taskData, tags: [...taskData.tags, selectedTag] };
            });
        }
    }
    
    const handleChange = (e) => {
        const { name, value } = e.target;

        setTaskData((prevData) => {
            return { ...prevData, [name]: value };
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setTasks((prevData) => {
            return [...prevData, taskData];
        })
        setTaskData(defaultData);
    }


    return (
        <header className="app-header">
            <form onSubmit={handleSubmit}>
                <input type="text" name="task" className="task-input" placeholder="Enter Task" onChange={handleChange} value={taskData.task} />
                <div className="task-form-bottom-line">
                    <div>
                        {
                            tags.map((tag, index) => (
                                <Tag key={index} tagName={tag} selectTag={selectTag} selected={checkTag(tag)} />
                            ))
                        }
                    </div>

                    <div>
                        <select name="status" id="task-status" className="task-status" onChange={handleChange} value={taskData.status}>
                            <option value="todo">To do</option>
                            <option value="ongoing">Ongoing</option>
                            <option value="done">Done</option>
                        </select>
                        <button type="submit" className="task-submit">
                            + Add Task
                        </button>
                    </div>
                </div>
            </form>
        </header>
    )
}

export default TaskForm