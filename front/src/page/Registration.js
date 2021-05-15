import React, {useState} 	from 'react';
import ReactDOM 			from 'react-dom';
import Authorization 		from './Authorization.js'

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
		alert('Имя: ' + name + '   E-mail: ' + email + '   Password: ' + password);
		e.preventDefault();
	}

	const authPage = () => {
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

				<input className='regButton' type='submit' value='Зарегистрироваться' />

				<input className='authPageButton' type='button' value='У меня уже есть аккаунт' onClick={authPage}/>
			</form>
		</div>
	);
}

export default Registration;