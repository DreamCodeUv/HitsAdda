import React, { useState } from 'react'
// import { NavLink } from 'react-router-dom'
import '../css/Nav.css'

import logo from '../asset/logo/hitsadda.png'
import { NavLink } from 'react-router-dom';


const Navigation = () => {
  const [sid, setSid] = useState(false);
  function Shclk() {
    setSid(!sid);
  }
  return (
    <>
      <header>
        <nav>
          <div className="nav">
            <div className="left">
              <div className="logo-container">
                <NavLink to={'/'} >
                <img src={logo} alt="Logo for Hits Adda" className="logo-im" />
                </NavLink>
                <NavLink to={'/'} >
                <span className="web-name">Hits Adda</span>
                </NavLink>
               
              </div>
            </div>
            <div className="right">
              <div className="nav-cnt">
                <ul className="nav-ul">
                <NavLink to={'/contact'}><li className="nav-li-ham">Cotact</li> </NavLink>
                <NavLink to={'/policy'}><li className="nav-li-ham">Policy</li> </NavLink>
                </ul>
              </div>
            </div>
            <div className="hamburger" onClick={() => Shclk()}>
              <span className="ham" id={sid ? "up-b" : "noclk"}></span>
              <span className="ham" id={sid ? "hide" : ""}></span>
              <span className="ham" id={sid ? "bt-b" : "noclk"}></span>
            </div>
          </div>
        </nav>
        <div className="menu-ham" id={sid ? "show" : "hide"}>
                    <div className="list-nav">
                        <ul className="nav-ul-ham">
                           <NavLink to={'/contact'}><li className="nav-li-ham">Cotact</li> </NavLink>
                           <NavLink to={'/policy'}> <li className="nav-li-ham">Policy</li></NavLink>
                        </ul>
                    </div>
                </div>
      </header>
    </>
  )
}

export default Navigation