import React from 'react';
import { useQuery, gql } 	from '@apollo/client';



const CHECK_USER = gql`
	query {
		users {
			id
		}
	}
`;

const EmailSent = props => {
	// Init props
	const {setPage, email} = props;

	// Custom methods
	const sendEmail = () => {
		//console.log(SaveUser);
	}

	const toRegPage = () => {
		setPage('Registration');
	}

	// Default methods
	const {loading, error, data} = useQuery(CHECK_USER);

	// Render
	if (loading) return <div className='main-container'>Пожалуйста, подождите</div>;

	if (error) return <div className='main-container'>Пользователь с таким адресом уже зарегестрирован</div>;

	if (data) return (
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