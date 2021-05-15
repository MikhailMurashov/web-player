import React, {useState} 	from 'react';
import ReactDOM 			from 'react-dom';
import Registration 		from './Registration.js'

const EmailSent = props => {
	// Init props
	const {email} = props;

	// Custom methods
	const sendEmail = () => {

	}

	const toRegPage = () => {
		ReactDOM.render(<Registration />, document.getElementById('root'));
	}

	// Render
	return (
		<div className='main-container'>
			<h1>
				Письмо отправлено
			</h1>

			<div className='text-container'>
				На вашу почту {email} было отправлено письмо с ссылкой для<br />
				подтверждения вашей учетной записи. Если не можете найти письмо,<br />
				проверьте папку «Спам».
			</div>

			<form>
				<input className='send-email-button' type='button' value='Отправить ещё раз' onClick={sendEmail} />

				<input className='reg-page-return-button' type='button' value='Вернуться к регистрации' onClick={toRegPage} />
			</form>
		</div>
	);
}

export default EmailSent;