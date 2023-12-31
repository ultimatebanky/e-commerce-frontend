import React from "react";
import { NavLink } from "react-router-dom";
import { AdminAuthorLink } from "../protect/HiddenLink";

const PageMenu = () => {
  return (
    <div>
      <nav className="--btn-google --p --mb push">
        <ul className="home-links">
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <li>
            <NavLink to="/change-password">Change Password</NavLink>
          </li>
          <AdminAuthorLink>
            <li>
              <NavLink to="/users">Users</NavLink>
            </li>
            <li>
              <NavLink to="/orders">Orders</NavLink>
            </li>
          </AdminAuthorLink>
        </ul>
      </nav>
    </div>
  );
};

export default PageMenu;
