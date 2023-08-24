import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SideBarData } from './sideBarData';
import { IconContext } from 'react-icons';

export const Navbar = () => {
  const [sidebar, setSideBar] = useState(false)

  const showSideBar = () => setSideBar(!sidebar)

  return (
    <>
    <IconContext.Provider value={{ color: 'black' }}>
    <div className="navbar"> {/* Corrección: className */}
      <Link to="#" className="menu-bars">
        <FaIcons.FaBars className='menu-open' onClick={showSideBar}/> {/* Corrección: className */}
      </Link>
    </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={showSideBar}>
          <li className='navbar-toggle'>
            <Link to='#' className='menu-bars'>
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          {SideBarData.map((item, index) => {
            return(
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
      </IconContext.Provider>
      </>
  );
};
