import React, {useContext} from 'react';
import {UserContext} from '../App.js';
import {useQuery, useMutation, gql} from '@apollo/client';


const EmailSent = props => {

	// Init props
	const {setPage} = props;

	// Init context
	const {name, email, password} = useContext(UserContext);

	const CHECK_USER = gql`
		query {
			checkUser (email: "${email}") {
				firstName
				id
			}
		}
	`;

	const CREATE_USER = gql`
		mutation {
			userCreate (firstName:"${name}", lastName: "${name}", email:"${email}") {
				user {
					id
				}
			}
		}
	`;	

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
	// if (loading) return <div className='main-container'>Пожалуйста, подождите</div>;

	// if (error && error.message === "User matching query does not exist.") {
	// 	console.log("Пользователь не зарегистрирован");

	// 	const {loading, error, data} = useMutation(CREATE_USER);

	// 	if (data) {
	// 		return (
	// 			<div className='main-container'>
	// 				<h1>
	// 					Письмо отправлено
	// 				</h1>

	// 				<div className='text-container'>
	// 					На вашу почту {email} было отправлено письмо с ссылкой для<br />
	// 					подтверждения вашей учетной записи. Если не можете найти письмо,<br />
	// 					проверьте папку «Спам». 
	// 				</div>

	// 				<form>
	// 					<input className='send-email-button' type='button' value='Отправить ещё раз' onClick={sendEmail} />

	// 					<input className='reg-page-return-button' type='button' value='Вернуться к регистрации' onClick={toRegPage} />
	// 				</form>
	// 			</div>
	// 		);
	// 	}

	// }

	// if (data) {
	// 	console.log("Пользователь зарегистрирован");

	// 	return <div className='main-container'>Пользователь с таким адресом уже зарегестрирован<br />{JSON.stringify(error)}</div>;
	// }
		
	

}


export default EmailSent;
