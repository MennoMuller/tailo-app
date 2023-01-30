import React, { useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import TaskItem from "../components/TaskItem";
import ModifyTaskMenu from "../components/ModifyTaskMenu";
import FilterButton from "../components/FilterButton";

const TasksMain = (props) => {
  const [filter, setFilter] = useState(null);
  const [menu, setMenu] = useState(false);
  return (
    <div className="grid-item item-a">
      <h2>My tasks</h2>
      <div className="filters-box">
        <FilterButton
          filter={filter}
          myFilter="All tasks"
          setFilter={setFilter}
        />
        <FilterButton
          filter={filter}
          myFilter="School"
          setFilter={setFilter}
        />
        <FilterButton
          filter={filter}
          myFilter="Social"
          setFilter={setFilter}
        />
        <FilterButton
          filter={filter}
          myFilter="Home"
          setFilter={setFilter}
        />
        <FilterButton
          filter={filter}
          myFilter="Misc"
          setFilter={setFilter}
        />
      </div>
      <div className="list-wrapper">
        {(filter != null
          ? props.tasks
              .filter((task) => !task.complete)
              .filter((task) => task.category == filter)
          : props.tasks.filter((task) => !task.complete)
        )
          .sort(props.compareTasks)
          .map((task) => (
            <TaskItem
              key={task.id}
              name={task.name}
              category={task.category}
              complete={task.complete}
              index={task.id}
              toggleComplete={props.toggleComplete}
              deadline_date={task.deadline_date}
              deadline_time={task.deadline_time}
              date={props.date}
            />
          ))}
      </div>
      <button
        className="add-button"
        onClick={() => setMenu(true)}
      >
        +
      </button>
      {menu && (
        <ClickAwayListener
          onClickAway={() => setMenu(false)}
        >
          <div>
            <ModifyTaskMenu modify={false} />
          </div>
        </ClickAwayListener>
      )}
    </div>
  );
};

export default TasksMain;
