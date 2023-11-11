import React from "react";
import Task from "./Task";

let taskId = 0;

function TaskList({ tasks, onTaskDeletion }) {

  const taskComponents = tasks.map((task) => {
    return (
      <Task 
        key={taskId++} 
        text={task.text} 
        category={task.category}
        onTaskDeletion={onTaskDeletion}
      />
    );
  });

  return (
    <div className="tasks">
      {taskComponents}
    </div>
  );
}

export default TaskList;
