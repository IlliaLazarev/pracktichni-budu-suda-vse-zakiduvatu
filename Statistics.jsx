import { useContext } from "react";
import TaskContext from "../context/TaskContext";

function Statistics() {
  const { tasks } = useContext(TaskContext);

  const completed = tasks.filter(task => task.completed).length;
  const active = tasks.length - completed;

  return (
    <div>
      <h3>Статистика</h3>
      <p>Усього задач: {tasks.length}</p>
      <p>Виконано: {completed}</p>
      <p>Не виконано: {active}</p>
    </div>
  );
}

export default Statistics;
