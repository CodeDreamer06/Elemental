import React from "react";
import DiamondIcon from '../assets/icons/diamond.svg';
import StreakIcon from '../assets/icons/streak.svg';
import MoonIcon from '../assets/icons/moon.svg';
import { useDispatch } from 'react-redux';
import { switchTheme } from '../services/theme';

const Navbar = () => {
    const dispatch = useDispatch();
    const diamonds = localStorage.getItem('ElDi') || localStorage.setItem('ElDi', 0)
    const streak = localStorage.getItem('ElSt') || localStorage.setItem('ElSt', 0)
    return ( 
        <nav className="navbar">
            <h1>Elemental.io</h1>
            <div className="navbar__items">
                <span>
                    <img src={DiamondIcon} alt="coins"/>
                    <p>{diamonds}</p>
                </span>
                <span>
                    <img src={StreakIcon} alt="streak" />
                    <p>{streak}</p>
                </span>
                <img
                    className="theme-switcher" 
                    src={MoonIcon} 
                    onClick={() => dispatch(switchTheme())}
                    alt="dark mode"/>
            </div>
        </nav>
    )
}
 
export default Navbar;