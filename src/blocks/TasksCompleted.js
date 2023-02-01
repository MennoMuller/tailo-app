import React from "react";
import TaskItem from "../components/TaskItem";

const TasksCompleted = (props) => {
  return (
    <div className="col-start-2 col-end-2 row-start-2 row-end-2 flex max-w-full flex-col rounded-2xl bg-white p-5 sm:max-h-full">
      <h2 className="text-2xl font-bold">Finished tasks</h2>
      <div className="flex shrink grow flex-col overflow-y-auto overflow-x-hidden">
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
