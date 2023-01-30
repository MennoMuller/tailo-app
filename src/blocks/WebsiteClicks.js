import React from "react";
import ClicksSquare from "../components/ClicksSquare";

const WebsiteClicks = (props) => {
  return (
    <div className="grid-item item-b orange">
      <h2>Most clicks</h2>
      <div className="squares-wrapper">
        {props.websites
          .sort((a, b) => b.clicks - a.clicks)
          .slice(0, 4)
          .map((site) => (
            <ClicksSquare
              key={site.id}
              url={site.url}
              icon={site.icon}
              clicks={site.clicks}
              iconGetter={props.iconGetter}
            />
          ))}
      </div>
    </div>
  );
};

export default WebsiteClicks;
