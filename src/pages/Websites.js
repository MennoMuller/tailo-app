import React from "react";
import WebsiteClicks from "../blocks/WebsiteClicks";
import WebsiteMain from "../blocks/WebsiteMain";
import WebsiteQuote from "../blocks/WebsiteQuote";

const Websites = (props) => {
  return (
    <div className="main-height flex flex-col gap-3 p-2">
      <h1 className="text-4xl font-bold">Websites</h1>
      <div className="flex min-h-0 min-w-0 max-w-full grow grid-cols-2 grid-rows-2 gap-5 sm:grid">
        <WebsiteMain
          websites={props.websites}
          iconGetter={props.iconGetter}
        />
        <WebsiteClicks
          websites={props.websites}
          iconGetter={props.iconGetter}
        />
        <WebsiteQuote />
      </div>
    </div>
  );
};

export default Websites;
