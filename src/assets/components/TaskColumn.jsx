import "./TaskColumn.css";
import TaskCard from "./TaskCard.jsx";

const TaskColumn = ({icon, title, tasks, status, handleDelete, handleDrop}) => {

    const onDragOver = (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "copy";
    }

    const onDrop = (e) => {
        const taskIndex = e.dataTransfer.getData('text/plain');
        handleDrop(taskIndex, status);
    }

    return (
         <section className="task-column" onDragOver={onDragOver} onDrop={onDrop}>
            <h2 className="task-column-heading">
                <img className="task-column-icon" src={icon}  alt={title}/> {title}
            </h2>
            {
                tasks.map((task, index) =>
                    task.status === status && <TaskCard handleDelete={handleDelete} index={index} title={task.task} key={index} tags={task.tags} />
                )
            }
        </section>
    )
}

export default TaskColumn;