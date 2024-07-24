import React, { Component } from "react";
import Logo from "./Logo";
import "../../css/Nav.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

class Navbar extends Component {
    state = { clicked: false };
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    };

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
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
                                <a href="#" className="active">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#">Productos</a>
                            </li>
                            <li>
                                <a href="#">Quienes somos</a>
                            </li>
                            <li>
                                <a href="#">Contacto</a>
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
