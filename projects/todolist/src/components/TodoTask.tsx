import { ITask } from "../Interfaces";

interface Props {
  task: ITask;
  conpleteTask(nameTaskDeleting: string): void
}

const TodoTask = ({ task, conpleteTask }: Props) => {
  return (
    <div className="task">
      <div className="content">
        <span className="task-name">{task.taskName}</span>
        <span className="task-deadline">Due in {task.taskDeadline} days</span>
      </div>
      <div className="remove" onClick={() => {conpleteTask(task.taskName)}}>✖</div>
    </div>
  );
};

export default TodoTask;
