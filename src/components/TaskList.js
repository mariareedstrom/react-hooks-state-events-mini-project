import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {
  function renderTasks() {
    return tasks.map((task) => {
      return (
        <Task
          key={task.text}
          text={task.text}
          category={task.category}
          onDeleteTask={() => onDeleteTask(task)}
        />
      );
    });
  }

  return <div className="tasks">{renderTasks()}</div>;
}

export default TaskList;
