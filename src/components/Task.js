import React from "react";

function Task({ category, text, onDeleteTask }) {
  function handleDeleteClick(_e) {
    onDeleteTask();
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={handleDeleteClick} className="delete">
        X
      </button>
    </div>
  );
}

export default Task;
