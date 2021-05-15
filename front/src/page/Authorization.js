import React, {useState} 	from 'react';
import ReactDOM 			from 'react-dom';
import Registration 		from './Registration.js'



const Authorization = () => {
	// Custom constants
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	// Custom methods
	const emailChanged = e => {
		setEmail(e.target.value);
	}

	const passwordChanged = e => {
		setPassword(e.target.value);
	}

	const formSubmitted = e => {
		alert('E-mail ' + email + '   Password: ' + password);
		e.preventDefault();
	}

	const toRegPage = () => {
		ReactDOM.render(<Registration />, document.getElementById('root'));
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

				<input className='reg-page-button' type='button' value='Зарегистрироваться' onClick={toRegPage}/>
			</form>
		</div>
	);
}

export default Authorization;