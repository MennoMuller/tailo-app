import React, { useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import ModifySiteMenu from "./ModifySiteMenu";
//import "./ListItem.css";

const SiteItem = (props) => {
  const [popup, setPopup] = useState(false);
  const [menu, setMenu] = useState(false);
  return (
    <div className="relative grid max-w-full auto-cols-auto grid-rows-2 rounded-lg  p-2">
      <a
        className="col-start-1 col-end-1 row-start-1 row-end-1 flex w-fit flex-row hover:underline"
        href={
          props.url.includes("http")
            ? props.url
            : "http://" + props.url
        }
        onClick={() => {
          console.log(props.index + " was clicked");
        }}
        target="_blank"
      >
        <div className="inline h-7 w-7 shrink-0 p-1 dark:rounded-md dark:bg-white dark:bg-opacity-30">
          <img
            className="h-5 w-5 object-cover"
            src={
              props.icon
                ? props.icon
                : props.iconGetter(props.url)
            }
          />
        </div>
        <h4 className="ml-3 inline font-bold">
          {props.name}
        </h4>
      </a>
      <p className=" col-start-1 col-end-3 row-start-2 row-end-2 max-w-full">
        {props.description}
      </p>
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
                  console.log(
                    "delete website " + props.index
                  )
                }
              >
                Delete website
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
                Modify website
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
            <ModifySiteMenu
              name={props.name}
              url={props.url}
              icon={props.icon}
              modify={true}
            />
          </div>
        </ClickAwayListener>
      )}
    </div>
  );
};

export default SiteItem;
