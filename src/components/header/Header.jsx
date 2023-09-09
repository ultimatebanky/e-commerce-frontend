import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Header.scss";
import { BiLogIn, BiPaperPlane } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { logout, RESET, selectName } from "../../redux/features/auth/authSlice";
import { ShowOnLogin, ShowOnLogout } from "../protect/HiddenLink";
import { FaUserCircle } from "react-icons/fa";
import { UserName } from "../../pages/profile/Profile";
import { googleLogout } from "@react-oauth/google";
import remight from '../../assets/remight-low-resolution-logo-white-on-transparent-background.png'
const activeLink = ({ isActive }) => (isActive ? `${"active"}` : "");

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goHome = () => {
    navigate("/");
  };

  const logoutUser = () => {
    dispatch(RESET());
    dispatch(logout());
    googleLogout();
    navigate("/login");
  };

  const toProfile = () => {
    navigate('/profile')
  }

  return (
    <header className="header">
      <nav>
        <div className="logo" onClick={goHome}>
            <img src={remight} width='75px'/>
        </div>

        <div className="navLinks">
          <NavLink exact activeClassName="active" onClick={goHome}><p>Home</p></NavLink>
          <NavLink exact activeClassName="active" to='/about'><p>About</p></NavLink>
          <NavLink exact activeClassName="active" to='/services'><p>Services</p></NavLink>
          <NavLink exact activeClassName="active" to='/team'><p>Our Team</p></NavLink>
          <NavLink exact activeClassName="active" to='/contact'><p>Contact</p></NavLink>
        </div>

        <ul className="home-links">
          <ShowOnLogin>
            <li className="--flex-center" >
              <button onClick={toProfile} style={{cursor: 'pointer'}}>
                <FaUserCircle size={20} />
              </button>
              &nbsp;
              <UserName />
            </li>
          </ShowOnLogin>
          <ShowOnLogout>
            <li>
              <button className="--btn --btn-primary">
                <Link to="/login">Login</Link>
              </button>
            </li>
          </ShowOnLogout>

          <ShowOnLogin>
            <li>
              <button className="--btn --btn-secondary" onClick={logoutUser}>
                Logout
              </button>
            </li>
          </ShowOnLogin>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
