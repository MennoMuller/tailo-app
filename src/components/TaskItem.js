import React from "react";
import { useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import ModifyTaskMenu from "./ModifyTaskMenu";
import "./ListItem.css";

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
          ? "list-item task-item overdue"
          : "list-item task-item"
      }
    >
      <div className="task-info">
        <span className="category-label">
          {props.category}
        </span>
        <h4 className="task-label">{props.name}</h4>
        {props.complete ? (
          ""
        ) : (
          <div className="deadline-info">
            <div className="info-box">
              <span
                className={
                  "deadline-icon " +
                  (props.deadline_date
                    ? timeLeft < 1
                      ? "red-icon"
                      : timeLeft < 7
                      ? "yellow-icon"
                      : "green-icon"
                    : "green-icon")
                }
              >
                !
              </span>
              <span className="deadline-warning">
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
            <div className="info-box">
              <span className="deadline">
                {props.deadline_date}
              </span>
              <span className="deadline">
                {props.deadline_time}
              </span>
            </div>
          </div>
        )}
      </div>
      <button
        className="menu-button"
        onClick={() => setPopup(true)}
      >
        <div className="meatballs-menu"></div>
      </button>
      {popup && (
        <ClickAwayListener
          onClickAway={() => setPopup(false)}
        >
          <div className="item-menu">
            <li>
              <button
                className="menu-option"
                onClick={() =>
                  console.log("delete task " + props.index)
                }
              >
                Delete task
              </button>
            </li>
            <li>
              <button
                className="menu-option"
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
      <label className="check-container">
        <input
          type="checkbox"
          checked={props.complete}
          onChange={() => props.toggleComplete(props.index)}
        ></input>
        <span className="checkmark"></span>
      </label>
    </div>
  );
};

export default TaskItem;
