import React from 'react';



const Authorization = props => {
	// Init props
	const {setPage, email, setEmail, password, setPassword} = props;

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