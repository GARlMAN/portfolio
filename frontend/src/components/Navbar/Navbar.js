import React from 'react';
import './Navbar.css';
import { AiOutlineHome } from "react-icons/ai";
import { SiAboutdotme } from "react-icons/si";
import { FaBook } from "react-icons/fa";
import { BiCubeAlt } from "react-icons/bi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { IconContext } from "react-icons";

const Navbar = () => {
  return (
    <div className='Navbar'>
      <IconContext.Provider value={{ className: 'Icons', color: 'white' }}>
      <a href = "#home">
        <AiOutlineHome  title="Home" />
      </a>
      <a href = "#about">
        <SiAboutdotme  title="About" />
      </a>
      <a href = "#education">
        <FaBook  title="Education" />
      </a>
      <a href = "#skills">
        <BiCubeAlt  title="Skills" />
      </a>

      <a href = "#projects">
        <AiOutlineFundProjectionScreen data-hover="Tooltip for Projection" title="Projects" />
      </a>

      </IconContext.Provider>
    </div>
  );
};

export default Navbar;
