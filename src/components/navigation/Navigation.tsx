import { useState } from 'react';
import './navigation.scss';

const Navigation = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    return (
        <nav className="nav">
            <div className="nav__container">
            <a href='#' className="nav__logo">IvanVeskovic</a>
            <div className={`nav__theme ${isDarkTheme && 'nav__theme--dark'}`} onClick={() => setIsDarkTheme(!isDarkTheme)}>
                <div className="nav__theme-icon"></div>
            </div>
            <div className="nav__button">
                <span></span>
                <span></span>
                <span></span>
            </div>
            </div>
        </nav>
    );
};

export default Navigation;
