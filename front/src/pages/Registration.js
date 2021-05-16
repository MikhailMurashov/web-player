import React, {useState} 	from 'react';



const Registration = props => {
	// Init props
	const {setPage, email, setEmail, password, setPassword} = props;

	// Set states
	const [name, setName] = useState('');

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
		// if (FormSubmitted(email) === 'not exist') 
		setPage('EmailSent');
		// else console.log('user exist');
		
		e.preventDefault();
	}

	const toAuthPage = () => {
		setPage('Authorization');
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

				<input className='auth-page-button' type='button' value='У меня уже есть аккаунт' onClick={toAuthPage} />
			</form>
		</div>
	);
}

export default Registration;