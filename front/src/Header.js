import React from 'react';
import Logo from './images/logo.png';
import Slogan from './Slogan.js';
import ContactsShort from './ContactsShort.js';



const Header = props => {

	// Render
	return (
		<header className="App-header">
			<img className='logo' src={Logo} alt='logo' />

			<Slogan />

			<ContactsShort />
		</header>
	);
}



export default Header;