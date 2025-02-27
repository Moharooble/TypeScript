import { ChangeEvent, FC, useState } from "react";
import "./App.css";
import { ITask } from "./Interfaces";
import TodoTask from "./components/TodoTask";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = { taskName: task, taskDeadline: deadline };

    setTodoList([...todoList, newTask]);
  };
  const conpleteTask = (nameTaskDeleting: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName != nameTaskDeleting;
      })
    );
  };

  return (
    <div className="app">
      <div className="header">
        <div className="input-container">
          <input
            type="text"
            placeholder="Task..."
            value={task}
            name="task"
            onChange={handleChange}
          />
          <input
            type="number"
            value={deadline}
            name="deadline"
            placeholder="dealine (in days)..."
            onChange={handleChange}
          />
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>

      {todoList.length > 0 && (
        <div className="todo-list">
          {todoList.map((task: ITask, key: number) => {
            return (
              <TodoTask key={key} task={task} conpleteTask={conpleteTask} />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default App;
