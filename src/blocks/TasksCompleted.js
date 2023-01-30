import React from "react";
import TaskItem from "../components/TaskItem";

const TasksCompleted = (props) => {
  return (
    <div className="grid-item item-c">
      <h2>Finished tasks</h2>
      <div className="list-wrapper">
        {props.tasks
          .filter((task) => task.complete)
          .sort(props.compareTasks)
          .map((task) => (
            <TaskItem
              key={task.id}
              name={task.name}
              category={task.category}
              complete={task.complete}
              index={task.id}
              toggleComplete={props.toggleComplete}
            />
          ))}
      </div>
    </div>
  );
};

export default TasksCompleted;
