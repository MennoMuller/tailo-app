import { NavLink } from "react-router-dom";

import Logo from "./Logo";
import Avatar from "./Avatar";

import dashboardIcon from "./../img/dashboard.png";
import tasksIcon from "./../img/tasks.png";
import websitesIcon from "./../img/websites.png";
import weatherIcon from "./../img/weather.png";

const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <Logo />
        <Avatar
          image={props.avatar}
          username={props.username}
        />
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">
              <img
                src={dashboardIcon}
                alt=""
                className="nav-icon"
              />
              <span className="nav-text">Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/tasks">
              <img
                src={tasksIcon}
                alt=""
                className="nav-icon"
              />
              <span className="nav-text">Tasks</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/websites">
              <img
                src={websitesIcon}
                alt=""
                className="nav-icon"
              />
              <span className="nav-text">Websites</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/weather">
              <img
                src={weatherIcon}
                alt=""
                className="nav-icon"
              />
              <span className="nav-text">Weather</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
