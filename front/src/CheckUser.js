import React from 'react';
import { useQuery, gql } from '@apollo/client';


const CheckUser = props => {

	// Init props
	const {setPage, name, email} = props;

	const CHECK_USER = gql`
		query ($email: String){
			checkUser (email: $email) {
				firstName
				id
			}
		}
	`;

	// Default methods
	const { loading, error, data } = useQuery(CHECK_USER, {
		variables: { email: email },
	});

	if (error && error.message === "User matching query does not exist.") {
		console.log("Пользователь не зарегистрирован");

		return <div>Пользователь не зарегистрирован</div>;
	}

	if (data) {
		console.log("Пользователь зарегистрирован");

		return <div>Пользователь зарегистрирован</div>;
	}
}


export default CheckUser;
