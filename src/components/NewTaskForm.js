import React, {useState} from "react";

function NewTaskForm( {
    categories, 
    onTaskAddition
  } ) {

  const [taskDetails, setTaskDetails] = useState("");
  const [selectedOption, setSelectedOption] = useState(categories[0]);
  

  const options = categories.map((category) => {
    return (
        <option key={category} value={category}>{category}</option>
    )
  });

  function handleDetailsChange(event) {
    setTaskDetails(event.target.value);
  }

  function handleSelectedOptionChange(event) {
    setSelectedOption(event.target.value);
  }

  function handleTaskFormSubmit(event) {
    event.preventDefault();
    const newTask = {
      text: taskDetails,
      category: selectedOption
    }
    onTaskAddition(newTask);
  }

  return (
    <form className="new-task-form" onSubmit={handleTaskFormSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleDetailsChange} value={taskDetails} />
      </label>
      <label>
        Category
        <select name="category" onChange={handleSelectedOptionChange}>
          {options}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
