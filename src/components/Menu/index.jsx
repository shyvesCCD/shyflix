import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assents/img/Logo3.png';
import './Menu.css';
import Button from '../Button/index';
// import ButtonLink from './components/ButtonLink';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className ="Logo" src={Logo} alt="Shyvesflix"></img>
            </Link>
            

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo video
            </Button>
        </nav>
    );
}


export default Menu;