import React from "react";

const TasksProgress = (props) => {
  return (
    <div className="col-start-2 col-end-2 row-start-1 row-end-1 flex max-h-full max-w-full flex-col rounded-2xl bg-orange-300 p-5 dark:bg-emerald-900 dark:text-white">
      <h2 className="text-2xl font-bold">Progress</h2>
      <div className="mt-4 flex max-w-full shrink flex-row items-center justify-start overflow-auto">
        <div className="mx-2 flex h-24 w-24 shrink-0 flex-col items-center justify-center overflow-hidden rounded-2xl bg-white shadow-md dark:bg-black">
          <span className="text-lg font-bold">
            {props.tasksLeft}
          </span>
          <span className="text-center">
            tasks left today
          </span>
        </div>
        <div className="mx-2 flex h-24 w-24 shrink-0 flex-col items-center justify-center overflow-hidden rounded-2xl bg-white shadow-md dark:bg-black">
          <span className="text-lg font-bold">
            {props.completedTasks}/{props.totalTasks}
          </span>
          <span className="text-center">done</span>
        </div>
      </div>
      <div className="w-screen"></div>
    </div>
  );
};

export default TasksProgress;
