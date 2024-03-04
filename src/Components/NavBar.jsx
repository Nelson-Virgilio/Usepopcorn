// import React from 'react'
import { Link } from 'react-router-dom';
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi';

const NavBar = () => {
  return (
    <div>
      <nav>
        <h1>
          <Link to="/">
            <BiCameraMovie />
            Movie LIBX
          </Link>
        </h1>
        <form>
          <input type="text" placeholder="Pesquise um filme..." />
          <button type="submit">
            <BiSearchAlt2 />
          </button>
        </form>
        {/* <Link to="/movie/2">Movie</Link>
        <Link to="/search">search</Link> */}
      </nav>
    </div>
  );
};

export default NavBar;
