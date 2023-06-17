import React, { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [tasksDeleted, setTasksDeleted] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() === '') return;

    const newTask = {
      id: new Date().getTime(),
      text: inputValue,
      completed: false
    };

    setTasks([...tasks, newTask]);
    setInputValue('');
  };

  const handleTaskDelete = (taskId) => {
    const filteredTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(filteredTasks);

    if (filteredTasks.length === 0) {
      setTasksDeleted(true);
    }
  };

  return (
    <>
      <div className="box">
        <form onSubmit={handleFormSubmit}>
          <div className="input_button">
            <input
              type="text"
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
              placeholder="Enter a task"
            />
            <button type="submit">Add Task</button>
          </div>
        </form>

        <ul className="task_list">
          {tasks.map((task) => (
            <li key={task.id}>
              {task.text}
              <button onClick={() => handleTaskDelete(task.id)}>Delete</button>
            </li>
          ))}
        </ul>

        {tasks.length === 0 && (
          <p className="congratulations_message">
            Congratulations! All your tasks are done.
          </p>
        )}
      </div>
    </>
  );
};


export default TodoList;
