import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo60.png';
import './Menu.css';
import Button from '../Button';

function Menu() {
	return(
		<nav className="Menu">
			 <Link to="/">
				 <img className="Logo" src={Logo} alt="Logo Pelasflix" />
			 </Link>

			 <Button as={Link} className="ButtonLink" to="/cadastro/video">
				Novo vídeo
			 </ Button>
		</nav>
	);
}

export default Menu;
