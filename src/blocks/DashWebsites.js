import React from "react";
import { Link } from "react-router-dom";

const DashWebsites = (props) => {
  return (
    <div className="col-start-2 col-end-2 row-start-1 row-end-1 flex max-h-full max-w-full flex-col rounded-2xl bg-white p-5 dark:bg-black dark:text-white">
      <div className="mb-2 flex flex-row justify-between">
        <h2 className="text-2xl font-bold">
          My favorite websites
        </h2>
        <Link
          to="./websites"
          className="text-blue-500 hover:underline"
        >
          See all
        </Link>
      </div>
      <div className="flex flex-row flex-wrap items-center justify-evenly">
        {props.websites
          .sort((a, b) => b.clicks - a.clicks)
          .slice(0, 9)
          .map((site) => (
            <a
              className="flex w-36 flex-row items-center gap-2 overflow-hidden"
              href={
                site.url.includes("http")
                  ? site.url
                  : "http://" + site.url
              }
              onClick={() => {
                props.onClick(site.id);
              }}
              key={site.id}
            >
              <div className="shrink-0 p-1 dark:rounded-md dark:bg-white dark:bg-opacity-60">
                <img
                  className="h-8 w-8 object-cover"
                  src={
                    site.icon
                      ? site.icon
                      : props.iconGetter(site.url)
                  }
                  alt=""
                />
              </div>
              <h4 className="font-bold">{site.name}</h4>
            </a>
          ))}
      </div>
    </div>
  );
};

export default DashWebsites;
