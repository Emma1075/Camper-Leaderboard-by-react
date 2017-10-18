import React from 'react'
import './Header.css'

class Header extends React.Component {
    render() {
        return (
            <header className="logo">
                <a href="https://www.freecodecamp.com">
                    <img src="https://s3.amazonaws.com/freecodecamp/freecodecamp_logo.svg" alt="FreeCodeCamp logo" />
                </a>
            </header>
        );
    }
}

export default Header