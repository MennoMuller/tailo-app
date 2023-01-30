import React, { useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import ModifySiteMenu from "./ModifySiteMenu";
import "./ListItem.css";

const SiteItem = (props) => {
  const [popup, setPopup] = useState(false);
  const [menu, setMenu] = useState(false);
  return (
    <div className="list-item site-item">
      <a
        className="site-box"
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
        <img
          className="site-icon"
          src={
            props.icon
              ? props.icon
              : props.iconGetter(props.url)
          }
        />
        <h4 className="task-label">{props.name}</h4>
      </a>
      <p className="site-description">
        {props.description}
      </p>
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
                className="menu-option"
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
