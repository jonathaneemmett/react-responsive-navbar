import React from 'react';

// Styles
import {useStyles} from "../../assets/style";
import {FaBars} from "react-icons/fa";

function Navbar(props) {
    const classes = useStyles();

    return (
        <nav className={classes.navbar}>
            <div className={classes.logo}>Logo</div>
            <ul className={classes.navLinks}>
                <input type="checkbox"  id="checkbox_toggle"/>
                <label htmlFor="checkbox_toggle" className={classes.hamburger}>
                    <FaBars />
                </label>
                <div className={classes.menu}>
                    <li><a href="">Home</a></li>
                    <li className={classes.services}>
                        <a href="/">Services</a>
                        <ul className={classes.dropdown}>
                            <li><a href="/">Dropdown 1</a></li>
                        </ul>
                    </li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Contact</a></li>
                </div>
            </ul>
        </nav>
    );
}

export default Navbar;