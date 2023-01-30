import React, { useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import ModifySiteMenu from "../components/ModifySiteMenu";
import SiteItem from "../components/SiteItem";

const WebsiteMain = (props) => {
  const [menu, setMenu] = useState(false);
  return (
    <div className="grid-item item-a">
      <h2>My favorite websites</h2>
      <div className="list-wrapper">
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
            <ModifySiteMenu modify={false} />
          </div>
        </ClickAwayListener>
      )}
    </div>
  );
};

export default WebsiteMain;
