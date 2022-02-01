import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [details, setDetails] = useState("");
  const [category, setCategory] = useState();

  function renderCategories() {
    return categories
      .filter((category) => category !== "All")
      .map((category) => {
        return (
          <option key={category} value={category}>
            {category}
          </option>
        );
      });
  }

  function handleChange(e) {
    if (e.target.name === "text") {
      setDetails(e.target.value);
    } else if (e.target.name === "category") {
      setCategory(e.target.value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit({ text: details, category });
    setDetails("");
  }

  return (
    <form className="new-task-form">
      <label>
        Details
        <input
          type="text"
          name="text"
          onChange={handleChange}
          id="task-details"
        />
      </label>
      <label>
        Category
        <select name="category" onChange={handleChange}>
          {renderCategories()}
        </select>
      </label>
      <input
        type="submit"
        value="Add task"
        onSubmit={handleSubmit}
        id="task-category"
      />
    </form>
  );
}

export default NewTaskForm;
