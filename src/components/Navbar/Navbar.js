import React, {Component} from 'react';
import classes from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    const isActive = ({isActive}) => isActive ? `${classes.active}` : undefined
    return (
        <nav className={classes.navbar}>
            <div className={classes.item}>
                <NavLink to='/profile' className={isActive}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/dialogs' className={isActive}>Dialogs</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/users' className={isActive}>Users</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/news' className={isActive}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/music' className={isActive}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/settings' className={isActive}>Settings</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;