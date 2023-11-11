import React from "react";

function Task( {text, category, onTaskDeletion} ) {

  function handleClick() {
    onTaskDeletion(text, category);
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleClick}>X</button>
    </div>
  );
}

export default Task;
