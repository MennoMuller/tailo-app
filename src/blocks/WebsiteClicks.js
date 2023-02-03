import React from "react";
import ClicksSquare from "../components/ClicksSquare";

const WebsiteClicks = (props) => {
  return (
    <div className="col-start-2 col-end-2 row-start-1 row-end-1 flex max-h-full max-w-full flex-col rounded-2xl bg-orange-300 p-5 dark:bg-emerald-900 dark:text-white">
      <h2 className="text-2xl font-bold">Most clicks</h2>
      <div className="mt-4 flex max-w-full shrink flex-row items-center justify-start overflow-auto">
        {props.websites
          .sort((a, b) => b.clicks - a.clicks)
          .slice(0, 4)
          .map((site) => (
            <ClicksSquare
              key={site.id}
              index={site.id}
              url={site.url}
              icon={site.icon}
              clicks={site.clicks}
              iconGetter={props.iconGetter}
              onClick={props.onClick}
            />
          ))}
      </div>
    </div>
  );
};

export default WebsiteClicks;
