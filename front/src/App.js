import './App.css';
import { useQuery, gql } 	from '@apollo/client';
import Authorization 		from './page/Authorization.js'



const App = () => {
	const CHECK_USER = gql`query {
		users {
			name
			id
		}
	}`;

	const { loading, error, data } = useQuery(CHECK_USER);

	if (loading) console.log(loading);
	if (error) console.log(error);

	console.log(data);

	return (
		<Authorization />
	);
}



export default App;
