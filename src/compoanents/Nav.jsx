import React, { useState } from "react";
//import MovieList from "./MovieList";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import LibraryLogo from "../assets/Library.svg";
import MovieLogo from "../assets/movielogo.jpg";
import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faTimes,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

library.add(faBars, faTimes, faMagnifyingGlass);

const Nav = ({ setMovieSearch }) => {
  function openMenu() {
    document.body.classList += " menu--open";
  }

  function closeMenu() {
    document.body.classList.remove("menu--open");
  }

  const [movies, setMovies] = useState([]);

  const textInput = document.getElementById("searchInput");

  console.log("text input", textInput);

  const handleInputChange = (event) => {
    setMovies(event.target.value);
  };

  if (textInput) {
    textInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        searchMovies(event.target.value);
      }
    });
  }

  function searchMovies() {
    setMovieSearch(document.getElementById("searchInput").value);
  }

  return (
    <div className="navbar">
      <nav>
        <div className="nav__container">
          <div className="logo">
            <Link to="/">
              <img src={MovieLogo} alt="" className="logo" />
            </Link>
          </div>
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
            </ul>
          </div>
        </div>
      </nav>
      <div class="search content-wrapper">
        <h1>Find Movies</h1>
        <div class="input-wrap">
          <input
            type="text"
            id="searchInput"
            placeholder="Search by Title, Actor(ess), or Keyword"
            value={movies}
            onChange={(e) => handleInputChange(e)}
          />
          <div class="search-wrapper">
            <FontAwesomeIcon
              onClick={searchMovies}
              icon="fa-solid fa-magnifying-glass"
            />
          </div>
        </div>
      </div>

      <div class="overlay"></div>
    </div>
  );
};

export default Nav;
