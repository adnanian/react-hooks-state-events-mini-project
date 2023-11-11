import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0]);
  const [taskList, setTaskList] = useState(TASKS);
  

  const tasksToDisplay = taskList.filter((task) => {
    if (selectedCategory === "All") return true;
    return task.category === selectedCategory;
  });

  function handleCategoryFilter(event) {
    setSelectedCategory(event.target.textContent);
  }

  function addTask(newTask) {
    setTaskList([...taskList, newTask]);
  }

  function deleteTask(text, category) {
    setTaskList(taskList.filter((task) => {
      return !(task.text === text && task.category === category);
    }));
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES} 
        onCategorySelection={handleCategoryFilter} 
        selectedCategory={selectedCategory}
      />
      <NewTaskForm
        categories={CATEGORIES.filter((category) => category !== "All")} 
        onTaskAddition={addTask}
      />
      <TaskList 
        tasks={tasksToDisplay} 
        onTaskDeletion={deleteTask}/>
    </div>
  );
}

export default App;
