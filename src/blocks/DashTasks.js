import React from "react";
import { Link } from "react-router-dom";
import TaskItem from "../components/TaskItem";

const DashTasks = (props) => {
  return (
    <div className="col-start-1 col-end-1 row-start-1 row-end-3 flex max-w-full flex-col rounded-2xl bg-white p-5 dark:bg-black dark:text-white sm:max-h-full">
      <div className="mb-2 flex flex-row justify-between">
        <h2 className="text-2xl font-bold">My tasks</h2>
        <Link
          to="./tasks"
          className="text-blue-500 hover:underline"
        >
          See all
        </Link>
      </div>
      <div className="flex shrink grow flex-col gap-2 overflow-y-auto overflow-x-hidden">
        {props.tasks
          .filter((task) => !task.complete)
          .sort(props.compareTasks)
          .slice(0, 3)
          .map((task) => (
            <TaskItem
              key={task.id}
              name={task.name}
              category={task.category}
              complete={task.complete}
              index={task.id}
              toggleComplete={props.toggleComplete}
              deadlineDate={task.deadlineDate}
              deadlineTime={task.deadlineTime}
              date={props.date}
              onModify={props.onModify}
              onDelete={props.onDelete}
            />
          ))}
      </div>
    </div>
  );
};

export default DashTasks;
