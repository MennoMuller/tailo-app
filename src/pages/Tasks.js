import React from "react";
import TasksCompleted from "../blocks/TasksCompleted";
import TasksMain from "../blocks/TasksMain";
import TasksProgress from "../blocks/TasksProgress";

const Tasks = (props) => {
  return (
    <div className="main-wrapper">
      <h1>Tasks</h1>
      <div className="main-grid">
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
