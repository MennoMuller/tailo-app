import React from "react";
import { Link } from "react-router-dom";

const DashWebsites = (props) => {
  return (
    <div className="grid-item item-b">
      <div className="dash-header-box">
        <h2>My favorite websites</h2>
        <Link to="./websites">See all</Link>
      </div>
      <div className="dash-sites-box">
        {props.websites
          .sort((a, b) => b.clicks - a.clicks)
          .slice(0, 9)
          .map((site) => (
            <a
              className="dash-site"
              href={
                site.url.includes("http")
                  ? site.url
                  : "http://" + site.url
              }
              onClick={() => {
                console.log(site.id + " was clicked");
              }}
              key={site.id}
            >
              <img
                className="dash-site-icon"
                src={
                  site.icon
                    ? site.icon
                    : props.iconGetter(site.url)
                }
              />
              <h4 className="dash-site-label">
                {site.name}
              </h4>
            </a>
          ))}
      </div>
    </div>
  );
};

export default DashWebsites;
