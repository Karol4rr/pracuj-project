import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import { FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from "react-icons/fa";
import { MdFingerprint } from "react-icons/md";

function Footer() {
    return (
        <div className="footer-container">
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/" className="social-logo">
                            <MdFingerprint className="navbar-icon" />
                            Karol Mika
                        </Link>
                    </div>
                    <small className="website-rights">KAROL MIKA © 2022</small>
                    <div className="social-icons">
                        <a
                            className="social-icon-link"
                            href="https://www.instagram.com/karol4rr/"
                            target="_blank"
                            aria-label="Instagram"
                            rel="noreferrer"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            className="social-icon-link"
                            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyVEVO"
                            target="_blank"
                            aria-label="Youtube"
                            rel="noreferrer"
                        >
                            <FaYoutube />
                        </a>
                        <a
                            className="social-icon-link"
                            href="https://twitter.com/elonmusk"
                            target="_blank"
                            aria-label="Twitter"
                            rel="noreferrer"
                        >
                            <FaTwitter />
                        </a>
                        <a
                            className="social-icon-link"
                            href="https://www.linkedin.com/in/karol-m-6908b7167/"
                            target="_blank"
                            aria-label="LinkedIn"
                            rel="noreferrer"
                        >
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;
