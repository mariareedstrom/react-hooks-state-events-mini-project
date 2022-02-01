import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [filterBy, setFilterBy] = useState("All");

  function filterTasksByCategory(category) {
    setFilterBy(category);
  }

  function onDeleteTask(toFilter) {
    const filtered = tasks.filter((task) => task !== toFilter);
    setTasks(filtered);
  }

  function onTaskFormSubmit(task) {
    setTasks([task, ...tasks]);
  }

  let filteredTasks = tasks.filter((task) => {
    if (filterBy === "All") {
      return true;
    } else {
      return task.category === filterBy;
    }
  });

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        selectedCategory={filterBy}
        categories={CATEGORIES}
        filterTasksByCategory={filterTasksByCategory}
      />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList
        tasks={filteredTasks}
        setTasks={setTasks}
        onDeleteTask={onDeleteTask}
      />
    </div>
  );
}

export default App;
