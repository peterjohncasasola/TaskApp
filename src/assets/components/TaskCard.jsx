import './TaskCard.css'
import Tag from "./Tag.jsx";
import deleteIcon from '../images/delete.png'

const TaskCard = ({ title, index, handleDelete, tags }) => {

    const onDragStart = (e) => {
        e.dataTransfer.setData("text/plain", index);
    };

    return (
        <div className="task-card" draggable onDragStart={onDragStart}>
            <p className="task-text">{title}</p>
            <div className="task-card-bottom-line">
                <div className="task-card-tags">
                    {tags.map(tag => (
                        <Tag key={tag} tagName={tag} selectTag={() => {}} selected={tag}/>
                    ))}
                </div>
                <div className="task-delete" onClick={() => handleDelete(index)}>
                    <img src={deleteIcon} alt="delete" className="delete-icon" />
                </div>
            </div>
        </div>
    );
};

export default TaskCard;