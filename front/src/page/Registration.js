import React, {useState} 	from 'react';
import ReactDOM 			from 'react-dom';
import Authorization 		from './Authorization.js'
import EmailSent 			from './EmailSent.js'

const Registration = () => {
	// Custom constants
	const [name, setName] = 		useState('');
	const [email, setEmail] = 		useState('');
	const [password, setPassword] = useState('');

	// Custom methods
	const nameChanged = e => {
		setName(e.target.value);
	}

	const emailChanged = e => {
		setEmail(e.target.value);
	}

	const passwordChanged = e => {
		setPassword(e.target.value);
	}

	const formSubmitted = e => {
		ReactDOM.render(<EmailSent email={email} />, document.getElementById('root'));
		e.preventDefault();
	}

	const toAuthPage = () => {
		ReactDOM.render(<Authorization />, document.getElementById('root'));
	}

	// Render
	return (
		<div className='main-container'>
			<h1>
				Регистрация
			</h1>

			<form onSubmit={formSubmitted}>
				<label>
					Имя
					<input type='name' placeholder='Введите ваше имя' value={name} onChange={nameChanged} />
				</label>

				<label>
					E-mail
					<input type='email' placeholder='example@example.com' value={email} onChange={emailChanged} />
				</label>

				<label>
					Пароль
					<input type='password' placeholder='&bull;&bull;&bull;&bull;&bull;&bull;' value={password} onChange={passwordChanged} />
				</label>

				<input className='reg-button' type='submit' value='Зарегистрироваться' />

				<input className='auth-page-button' type='button' value='У меня уже есть аккаунт' onClick={toAuthPage}/>
			</form>
		</div>
	);
}

export default Registration;