import { React, useState, useEffect } from 'react';
import './Nav.css';

function Nav() {

    const [black, setBlack] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setBlack(true);
            } else {
                setBlack(false);
            }
        });

        return () => {
            window.removeEventListener("scroll")
        }
    }, []);

    return (
        <div className={`nav ${black && "nav__black"}`}>
            <img className="nav__logo" src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Netflix_2014_logo.svg" alt="logo" />
            <img className="nav__avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar" />

        </div>
    )
}

export default Nav
