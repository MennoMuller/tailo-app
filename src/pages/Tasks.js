import React from "react";
import TasksCompleted from "../blocks/TasksCompleted";
import TasksMain from "../blocks/TasksMain";
import TasksProgress from "../blocks/TasksProgress";

const Tasks = (props) => {
  return (
    <div className="main-height flex flex-col gap-3 p-2">
      <h1 className="text-4xl font-bold dark:text-white">
        Tasks
      </h1>
      <div className="flex min-h-0 min-w-0 max-w-full grow grid-cols-2 grid-rows-2 flex-col gap-5 sm:grid">
        <TasksMain
          tasks={props.tasks}
          toggleComplete={props.toggleComplete}
          date={props.date}
          compareTasks={props.compareTasks}
        />
        <TasksProgress
          tasksLeft={
            props.tasks
              .filter((task) => !task.complete)
              .filter((task) => {
                if (task.deadline_date) {
                  let deadlineNr = Date.parse(
                    task.deadline_date
                  );
                  if (props.date) {
                    return (
                      Math.ceil(
                        (deadlineNr -
                          props.date.valueOf()) /
                          (1000 * 3600 * 24)
                      ) <= 1
                    );
                  }
                }
                return false;
              }).length
          }
          completedTasks={
            props.tasks.filter((task) => task.complete)
              .length
          }
          totalTasks={props.tasks.length}
        />
        <TasksCompleted
          tasks={props.tasks}
          toggleComplete={props.toggleComplete}
          compareTasks={props.compareTasks}
        />
      </div>
    </div>
  );
};

export default Tasks;
