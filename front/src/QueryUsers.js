import React 				from 'react';
import { useQuery, gql } 	from '@apollo/client';



const QueryUsers = () => {
	const CHECK_USER = gql`query {
		users {
			name
			id
		}
	}`;

	const {loading, error, data} = useQuery(CHECK_USER);

	if (loading) console.log(loading);
	if (error) console.log(error);

	console.log(data);
	const temp = JSON.stringify(data);

	return(
		<div>
			{temp}
		</div>
	);
}


export default QueryUsers;