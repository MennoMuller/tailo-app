import React, { useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import ModifySiteMenu from "../components/ModifySiteMenu";
import SiteItem from "../components/SiteItem";

const WebsiteMain = (props) => {
  const [menu, setMenu] = useState(false);
  return (
    <div className="col-start-1 col-end-1 row-start-1 row-end-3 flex max-w-full flex-col rounded-2xl bg-white p-5 dark:bg-black dark:text-white sm:max-h-full">
      <h2 className="text-2xl font-bold">
        My favorite websites
      </h2>
      <div className="flex shrink grow flex-col overflow-y-auto overflow-x-hidden">
        {props.websites
          .sort((a, b) => b.clicks - a.clicks)
          .map((site) => (
            <SiteItem
              key={site.id}
              name={site.name}
              icon={site.icon}
              index={site.id}
              description={site.description}
              url={site.url}
              iconGetter={props.iconGetter}
              onClick={props.onClick}
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
            <ModifySiteMenu
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

export default WebsiteMain;
