import React from "react";

//import fontawesome from '@fortawesome/fontawesome'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import LibraryLogo from "../assets/Library.svg";
import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

//import { faBars} from '@fortawesome/fontawesome-free-solid'

library.add(faBars, faTimes);

const Nav = () => {

  function openMenu() {
    document.body.classList += " menu--open";
  }

  function closeMenu() {
    document.body.classList.remove("menu--open");
  }
 
  
  return (
    <nav>
      <div className="nav__container">
        <Link to="/">
          <img src={LibraryLogo} alt="" className="logo" />
        </Link>
        <ul className="nav__links">
          <li className="nav__list">
            <Link to="/" className="nav__link">
              Home
            </Link>
          </li>
          <li className="nav__list">
            <Link to="/" className="nav__link">
              Find Movies
            </Link>
          </li>
          <li className="nav__list">
            <Link to="/" className="nav__link">
              Contact
            </Link>
          </li>
          <button class="btn__menu" onClick={openMenu}>
          <FontAwesomeIcon icon="bars" />
          
          </button>
        </ul>
        <div className="menu__backdrop">
          <button className="btn__menu btn__menu--close" onClick={closeMenu}>
            <FontAwesomeIcon icon="times" />
          </button>
          
          <ul className="menu__links">
            <li className="menu__list">
              <Link to="/" className="menu__link">
                Home
              </Link>
            </li>
            <li className="menu__list">
              <Link to="/movies" className="menu__link">
                Find Movies
              </Link>
            </li>
            <li className="menu__list">
              <Link to="/contact" className="menu__link">
                Contact
              </Link>
            </li>
          </ul></div>

      </div>
    </nav>
  );
};

export default Nav;
