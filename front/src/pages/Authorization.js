import React, {useContext} from 'react';
import {UserContext} from '../App.js';


const Authorization = props => {
	
	// Init props
	const {setPage} = props;

	// Init context
	const {email, setEmail, password, setPassword} = useContext(UserContext);

	// Custom methods
	const emailChanged = event => {
		setEmail(event.target.value);
	}

	const passwordChanged = event => {
		setPassword(event.target.value);
	}

	const formSubmitted = event => {
		alert('E-mail ' + email + '   Password: ' + password);
		event.preventDefault();
	}

	const toRegPage = () => {
		setPage('Registration');
	}

	// Render
	return (
		<div className='main-container'>
			<h1>
				Авторизация
			</h1>

			<form onSubmit={formSubmitted}>
				<label>
					E-mail
					<input type='email' placeholder='example@example.com' value={email} onChange={emailChanged} />
				</label>

				<label>
					Пароль
					<input type='password' placeholder='&bull;&bull;&bull;&bull;&bull;&bull;' value={password} onChange={passwordChanged} />
				</label>

				<input className='auth-button' type='submit' value='Войти' />

				<input className='reg-page-button' type='button' value='Зарегистрироваться' onClick={toRegPage} />
			</form>
		</div>
	);
}


export default Authorization;
