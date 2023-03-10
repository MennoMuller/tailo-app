import React, { useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import TaskItem from "../components/TaskItem";
import ModifyTaskMenu from "../components/ModifyTaskMenu";
import FilterButton from "../components/FilterButton";

const TasksMain = (props) => {
  const [filter, setFilter] = useState(null);
  const [menu, setMenu] = useState(false);
  return (
    <div className="col-start-1 col-end-1 row-start-1 row-end-3 flex max-w-full flex-col rounded-2xl bg-white p-5 dark:bg-black dark:text-white sm:max-h-full">
      <h2 className="text-2xl font-bold">My tasks</h2>
      <div className="my-2 flex h-max shrink-0 flex-row items-center justify-between overflow-x-auto overflow-y-hidden">
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
      <div className="flex shrink grow flex-col gap-2 overflow-y-auto overflow-x-hidden">
        {(filter != null
          ? props.tasks
              .filter((task) => !task.complete)
              .filter((task) => task.category === filter)
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
              deadlineDate={task.deadlineDate}
              deadlineTime={task.deadlineTime}
              date={props.date}
              onModify={props.onModify}
              onDelete={props.onDelete}
            />
          ))}
      </div>
      <button
        className="mt-2 flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-full bg-black pb-3 text-5xl text-white"
        onClick={() => setMenu(true)}
      >
        +
      </button>
      {menu && (
        <ClickAwayListener
          onClickAway={() => setMenu(false)}
        >
          <div>
            <ModifyTaskMenu
              modify={false}
              onSubmit={(results) => {
                props.onAdd(results);
                setMenu(false);
              }}
            />
          </div>
        </ClickAwayListener>
      )}
    </div>
  );
};

export default TasksMain;
