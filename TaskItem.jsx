import { useContext } from "react";
import TaskContext from "../context/TaskContext";

function TaskItem({ task }) {
  const { deleteTask, toggleTask } = useContext(TaskContext);

  return (
    <div>
      <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
        {task.title}
      </span>

      <button onClick={() => toggleTask(task.id)}>
        {task.completed ? "Не виконано" : "Виконано"}
      </button>

      <button onClick={() => deleteTask(task.id)}>Видалити</button>
    </div>
  );
}

export default TaskItem;
