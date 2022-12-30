// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
const [count, setCount] = useState(0);

export default function App() {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount(count + 1);
  };

  const reduce = () => {
    setCount(count - 1);
  };

  const reset = () => {

    setCount(0);
  };

  return (
    <div className="App">
      <h1>Counter - {count}</h1>
      <button onClick={add}>Add</button>
      <button onClick={reduce}>Reduce</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}


function ToDoList() {
  const [todo, settodo] = useState([]);

  const submitTask = (e) => {
    e.preventDefault();

    let task = {
      title: e.target.elements.title.value,
      description: e.target.elements.description.value,
      completed: false,
    };
    settodo([...todo, task]);
  };
  const markAsCompleted = (title) => {
    settodo((prevState) => {
      let updatedTasks = prevState.map((task) => {
        if (task.title === title) {
          return {
            ...task,
            completed: true,
          };
        }
        return task;
      });
      return updatedTasks;
    });
  };
  const deleteTask = (title) => {
    settodo((prevState) => prevState.filter((task) => task.title !== title));
  };

  return (
    <div className="App">
      <form action="" onSubmit={submitTask}>

          <label htmlFor="" >Title</label>
          <input type="text" name="title"/>

          <label htmlFor="">Description</label>
          <input type="text" name="description"/>

        <input type="submit" value="Add Task" />
      </form>
      <ul>
      {todo.map((task) => (
        <li key={task.title}>
          {task.title}: {task.description}
          {task.completed ? <span> (Task completed) </span> : <span> (Task not completed) </span>}
          <button onClick={() => markAsCompleted(task.title)}>Mark as completed</button>
           <button onClick={() => deleteTask(task.title)}>Delete</button>
        </li>
      ))}
    </ul>
    </div>
  );
}

// export default ToDoList;
