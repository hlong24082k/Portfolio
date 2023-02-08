import React from "react";
import "./header.css";

import {AiOutlineHome, 
        AiOutlineClose,
        AiOutlineMenu} from "react-icons/ai";

const Header = () =>{
    return(
        <header className="header">
            <nav className="nav container">
                <a href="" className="nav-logo">HL</a>

                <div className="nav-menu">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <a href="#home" className="nav-link">
                                <i class="uil uil-estate" className="icon"></i>HOME
                            </a>
                        </li>

                        <li className="nav-item">
                            <a href="#about" className="nav-link">
                                <i class="uil uil-user" className="icon"></i>ABOUT
                            </a>
                        </li>

                        <li className="nav-item">
                            <a href="#skills" className="nav-link">
                                <i class="uil uil-file-info-alt" className="icon"></i>SKILLS
                            </a>
                        </li>

                        <li className="nav-item">
                            <a href="#portfolio" className="nav-link">
                                <i class="uil uil-scenery" className="icon"></i>PORTFOLIO
                            </a>
                        </li>

                        <li className="nav-item">
                            <a href="#contact" className="nav-link">
                                <i class="uil uil-envelopes" className="icon"></i>CONTACT
                            </a>
                        </li>
                    </ul>
                    <div className="icon-close">
                        <AiOutlineClose />
                    </div>
                </div>

                <div className="icon-toggle">
                    <i class="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header