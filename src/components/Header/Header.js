import React from 'react'
import './Header.css';

const Header = (props) => {
    
        const { changeScreen, currentScreen } = props;
        const screens = ['Home', 'About', 'Profile', 'Contact'];
        return (
            <header className="Header-container">
                <div className="Header-logo">xamQrexii</div>
                <ul className="Header-container-ul">
                  {screens.map((screen, index) => <li key={index} onClick={() => changeScreen(screen)} className={currentScreen === screen ? 'Header-li-active' : ''}>{screen}</li>)}
                </ul>
            </header>
        )
    
}

export default Header;