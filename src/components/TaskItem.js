import React from "react";
import { useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import ModifyTaskMenu from "./ModifyTaskMenu";
//import "./ListItem.css";

const TaskItem = (props) => {
  let timeLeft;
  if (props.deadline_date) {
    let deadlineNr = Date.parse(props.deadline_date);
    if (props.date) {
      timeLeft = Math.ceil(
        (deadlineNr - props.date.valueOf()) /
          (1000 * 3600 * 24)
      );
    }
  }

  const [popup, setPopup] = useState(false);
  const [menu, setMenu] = useState(false);
  return (
    <div
      className={
        !props.complete && timeLeft < 0
          ? "relative grid max-w-full auto-cols-auto grid-rows-2 rounded-lg border border-solid border-black bg-red-400 p-2"
          : "relative grid max-w-full auto-cols-auto grid-rows-2 rounded-lg border border-solid border-black p-2"
      }
    >
      <div className="col-start-1 col-end-1 row-start-1 row-end-3 flex flex-col justify-end overflow-hidden">
        <span className="text-sm text-slate-500">
          {props.category}
        </span>
        <h4 className="font-bold">{props.name}</h4>
        {props.complete ? (
          ""
        ) : (
          <div className="mb-5 mt-2 flex w-full flex-row items-center justify-between">
            <div className="flex flex-row items-center">
              <span
                className={
                  "mr-2 flex h-5 w-5 items-center justify-center rounded-full " +
                  (props.deadline_date && timeLeft < 7
                    ? timeLeft < 1
                      ? "bg-red-500 font-bold text-white"
                      : "bg-yellow-400 font-bold text-white"
                    : "bg-green-500 text-green-500")
                }
              >
                !
              </span>
              <span className="text-base">
                {props.deadline_date
                  ? timeLeft < 0
                    ? "Overdue"
                    : "Deadline " +
                      (timeLeft < 1
                        ? "today"
                        : timeLeft < 7
                        ? "this week"
                        : "in " + timeLeft + " days")
                  : "No deadline"}
              </span>
            </div>
            <div className="flex flex-row items-center">
              <span className="mr-2 text-xs">
                {props.deadline_date}
              </span>
              <span className="mr-2 text-xs">
                {props.deadline_time}
              </span>
            </div>
          </div>
        )}
      </div>
      <button
        className="col-start-2 col-end-2 row-start-1 row-end-1 flex h-2 w-6 cursor-pointer items-center justify-center self-start justify-self-end pb-3 align-text-top text-xl font-bold"
        onClick={() => setPopup(true)}
      >
        &hellip;
      </button>
      {popup && (
        <ClickAwayListener
          onClickAway={() => setPopup(false)}
        >
          <div className="absolute z-10 col-start-2 col-end-2 row-start-1 row-end-1 mt-3 w-max list-none justify-self-end overflow-hidden rounded-lg bg-black">
            <li>
              <button
                className="w-full cursor-pointer py-1 px-2 text-white hover:bg-slate-800"
                onClick={() =>
                  console.log("delete task " + props.index)
                }
              >
                Delete task
              </button>
            </li>
            <li>
              <button
                className="cursor-pointer px-2 py-1 text-white hover:bg-slate-800"
                onClick={() => {
                  setMenu(true);
                  setPopup(false);
                }}
              >
                Modify task
              </button>
            </li>
          </div>
        </ClickAwayListener>
      )}

      {menu && (
        <ClickAwayListener
          onClickAway={() => setMenu(false)}
        >
          <div>
            <ModifyTaskMenu
              name={props.name}
              category={props.category}
              deadline_date={props.deadline_date}
              deadline_time={props.deadline_time}
              date={props.date}
              modify={true}
            />
          </div>
        </ClickAwayListener>
      )}
      <label className="relative col-start-2 col-end-2 row-start-2 row-end-2 block h-6 w-6 cursor-pointer select-none self-end justify-self-end">
        <input
          className="absolute h-0 w-0 cursor-pointer opacity-0"
          type="checkbox"
          checked={props.complete}
          onChange={() => props.toggleComplete(props.index)}
        ></input>
        <span
          className={
            props.complete
              ? "absolute h-6 w-6 rounded bg-green-400 text-center font-bold text-white hover:bg-emerald-500 "
              : "absolute h-6 w-6 rounded bg-slate-100 text-transparent hover:bg-slate-300"
          }
        >
          &#10003;
        </span>
      </label>
    </div>
  );
};

export default TaskItem;
