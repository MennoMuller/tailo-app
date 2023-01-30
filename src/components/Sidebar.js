import { NavLink } from "react-router-dom";

import Logo from "./Logo";
import Avatar from "./Avatar";

import dashboardIcon from "./../img/dashboard.png";
import tasksIcon from "./../img/tasks.png";
import websitesIcon from "./../img/websites.png";
import weatherIcon from "./../img/weather.png";

const Sidebar = (props) => {
  return (
    <div className="mx-auto -mt-4 mb-4 flex  shrink-0 flex-col items-center justify-start gap-10 rounded-2xl bg-white p-4 sm:mx-4 sm:-mt-14">
      <div className="flex flex-row gap-5 sm:flex-col">
        <Logo />
        <Avatar
          image={props.avatar}
          username={props.username}
        />
      </div>
      <nav>
        <ul className="flex flex-row gap-2 sm:flex-col">
          <li>
            <NavLink
              to="/"
              className="flex flex-row items-center gap-2 rounded p-2 text-lg text-black hover:opacity-80"
            >
              <img
                src={dashboardIcon}
                alt=""
                className="h-7 w-7 object-cover"
              />
              <span className="hidden sm:inline">
                Dashboard
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/tasks"
              className="flex flex-row items-center gap-2 rounded p-2 text-lg text-black hover:opacity-80"
            >
              <img
                src={tasksIcon}
                alt=""
                className="h-7 w-7 object-cover"
              />
              <span className="hidden sm:inline">
                Tasks
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/websites"
              className="flex flex-row items-center gap-2 rounded p-2 text-lg text-black hover:opacity-80"
            >
              <img
                src={websitesIcon}
                alt=""
                className="h-7 w-7 object-cover"
              />
              <span className="hidden sm:inline">
                Websites
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/weather"
              className="flex flex-row items-center gap-2 rounded p-2 text-lg text-black hover:opacity-80"
            >
              <img
                src={weatherIcon}
                alt=""
                className="h-7 w-7 object-cover"
              />
              <span className="hidden sm:inline">
                Weather
              </span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
