import React from "react";
import WebsiteClicks from "../blocks/WebsiteClicks";
import WebsiteMain from "../blocks/WebsiteMain";
import WebsiteQuote from "../blocks/WebsiteQuote";

const Websites = (props) => {
  return (
    <div className="main-wrapper">
      <h1>Favorite websites</h1>
      <div className="main-grid">
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
