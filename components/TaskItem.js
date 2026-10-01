// Child component — gets task data and handlers through props
export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className="task-item">
      <div className="task-item__main">
        <span
          className={`badge ${task.active ? "badge--active" : "badge--done"}`}
        >
          {task.active ? "Active" : "Done"}
        </span>
        <span className={task.active ? "task-item__title" : "task-item__title task-done"}>
          {task.title}
        </span>
      </div>
      <div className="task-item__actions">
        <button
          type="button"
          className="secondary"
          onClick={() => onToggle(task.id)}
        >
          {task.active ? "Mark done" : "Mark active"}
        </button>
        <button
          type="button"
          className="secondary"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
}
