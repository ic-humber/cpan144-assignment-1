"use client";

import { useState } from "react";
import TaskItem from "./TaskItem";

export default function TaskManager() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Review React components", active: true },
    { id: 2, title: "Practice event handlers", active: true },
    { id: 3, title: "Finish Lab 4 screenshots", active: false },
  ]);
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("active"); // "active" or "inactive"
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  function handleAddTask(event) {
    event.preventDefault();

    const title = newTask.trim();
    if (!title) {
      setIsError(true);
      setMessage("Task title cannot be empty.");
      return;
    }

    setTasks((prev) => [
      { id: Date.now(), title, active: true },
      ...prev,
    ]);
    setNewTask("");
    setFilter("active");
    setIsError(false);
    setMessage(`"${title}" was added.`);
  }

  function handleToggle(id) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, active: !task.active } : task,
      ),
    );
  }

  function handleDelete(id) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }

  // Show only active or inactive tasks based on the filter state
  const visibleTasks = tasks.filter((task) =>
    filter === "active" ? task.active : !task.active,
  );

  return (
    <div className="card">
      <h2>Task list</h2>

      <form className="form-row" onSubmit={handleAddTask}>
        <label htmlFor="new-task">
          New task
          <input
            id="new-task"
            type="text"
            value={newTask}
            onChange={(event) => setNewTask(event.target.value)}
            placeholder="Enter a task"
          />
        </label>
        <button type="submit">Add task</button>
      </form>

      {message && (
        <p className={isError ? "message-error" : "message-success"}>
          {message}
        </p>
      )}

      <div className="btn-row">
        <button
          type="button"
          className={`secondary${filter === "active" ? " is-selected" : ""}`}
          onClick={() => setFilter("active")}
        >
          Show Active
        </button>
        <button
          type="button"
          className={`secondary${filter === "inactive" ? " is-selected" : ""}`}
          onClick={() => setFilter("inactive")}
        >
          Show Inactive
        </button>
      </div>

      <p className="message-info">
        Showing {filter} tasks ({visibleTasks.length})
      </p>

      {visibleTasks.length > 0 ? (
        <ul className="task-list">
          {visibleTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={handleToggle}
              onDelete={handleDelete}
            />
          ))}
        </ul>
      ) : (
        <p className="empty">No {filter} tasks right now.</p>
      )}
    </div>
  );
}
