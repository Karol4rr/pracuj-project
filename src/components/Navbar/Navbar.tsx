import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsLaptop } from "react-icons/bs";
import { Button } from "./Button/Button";
import "./Navbar.scss";
import { IconContext } from "react-icons/lib";

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener("resize", showButton);

    return (
        <>
            <IconContext.Provider value={{ color: "#fff" }}>
                <div className="navbar__section">
                    <div className="navbar-container container">
                        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                            <BsLaptop className="navbar-icon" />
                            Karol Mika
                        </Link>
                        <div className="menu-icon" onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </div>
                        <ul className={click ? "nav-menu active" : "nav-menu"}>
                            <li className="nav-item">
                                <Link to="/github-api" className="nav-links" onClick={closeMobileMenu}>
                                    Github API
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/factorial" className="nav-links" onClick={closeMobileMenu}>
                                    Factorial
                                </Link>
                            </li>
                            <li className="nav-btn">
                                {button ? (
                                    <Link to="/" className="btn-link" onClick={closeMobileMenu}>
                                        <Button buttonStyle="btn--outline">OPIS</Button>
                                    </Link>
                                ) : (
                                    <Link to="/" className="btn-link" onClick={closeMobileMenu}>
                                        <Button
                                            buttonStyle="btn--outline"
                                            buttonSize="btn--mobile"
                                            onClick={closeMobileMenu}
                                        >
                                            OPIS
                                        </Button>
                                    </Link>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </IconContext.Provider>
        </>
    );
}

export default Navbar;
