import React, { Component } from "react";
import Logo from "./Logo";
import "../../css/Nav.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

class Navbar extends Component {
    state = { clicked: false };

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    };

    handleScrollToSection = (e, sectionId) => {
        e.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            this.setState({ clicked: false });
        }
    };

    render() {
        return (
            <>
                <nav>
                    <a href="#">
                        <Logo />
                    </a>
                    <div>
                        <ul
                            id="navbar"
                            className={this.state.clicked ? "#navbar active" : "#navbar"}
                        >
                            <li>
                                <a href="#" onClick={(e) => this.handleScrollToSection(e, 'banner')}>
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#" onClick={(e) => this.handleScrollToSection(e, 'productos')}>Productos</a>
                            </li>
                            <li>
                                <a href="#" onClick={(e) => this.handleScrollToSection(e, 'about')}>Quienes somos</a>
                            </li>
                            <li>
                                <a href="#" onClick={(e) => this.handleScrollToSection(e, 'contacto')}>Contacto</a>
                            </li>
                            <li>
                                <a href="#">Iniciar sesión</a>
                            </li>
                            <li>
                                <a href="#">Registrarse</a>
                            </li>
                        </ul>
                    </div>
                    <div id="mobile" onClick={this.handleClick}>
                        <i
                            id="bar"
                            className={
                                this.state.clicked
                                    ? "fa-solid fa-times"
                                    : "fa-solid fa-bars"
                            }
                        ></i>
                    </div>
                </nav>
            </>
        );
    }
}

export default Navbar;
