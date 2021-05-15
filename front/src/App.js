import './App.css';
import { useQuery, gql } 	from '@apollo/client';
import Authorization 		from './page/Authorization.js'




const GET_TEST = gql`
	query GetTest {
		me {
			id
		}
	}
`;

const App = () => {
	// const { loading, error, data } = useQuery(GET_TEST);

	// if (loading) return <p>Loading...</p>;
	// if (error) return <p>Error :(</p>;

	// console.log(data);

	return (
		<Authorization />
	);
}




export default App;
