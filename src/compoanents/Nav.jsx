import React, { useState } from "react";

//import fontawesome from '@fortawesome/fontawesome'

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
import axios from "axios";


//import axios from 'axios';

//import { faBars} from '@fortawesome/fontawesome-free-solid'

library.add(faBars, faTimes, faMagnifyingGlass);

const Nav = () => {
  function openMenu() {
    document.body.classList += " menu--open";
  }

  function closeMenu() {
    document.body.classList.remove("menu--open");
  }

  const [movies, setMovies] = useState([]);

  const textInput = document.getElementById('searchInput');

  console.log("text input", textInput);

  const movieList = document.querySelector(".movies");

  if (textInput){
  textInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      console.log('Enter key pressed!', event.target.value);
  
      let movie = event.target.value;
      searchMovies(movie);
    }
  });
}



  async function searchMovies(movie) {

    console.log("hit searchmovies funciton")

    const { data } = await axios.get(
       `http://www.omdbapi.com/?i=tt3896198&apikey=cc6cc917&s=${movie}`
    );

    console.log("movie results", data);
    setMovies(data);


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
            name="searchInput"
            placeholder="Search by Title, Actor(ess), or Keyword"
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
