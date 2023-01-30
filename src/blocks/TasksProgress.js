import React from "react";

const TasksProgress = (props) => {
  return (
    <div className="grid-item item-b paleorange">
      <h2>Progress</h2>
      <div className="squares-wrapper">
        <div className="square">
          <span className="square-number">
            {props.tasksLeft}
          </span>
          <span className="square-caption square-caption-small">
            tasks left today
          </span>
        </div>
        <div className="square">
          <span className="square-number">
            {props.completedTasks}/{props.totalTasks}
          </span>
          <span className="square-caption">done</span>
        </div>
      </div>
    </div>
  );
};

export default TasksProgress;
