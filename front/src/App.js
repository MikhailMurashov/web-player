import './App.css';
import React, {useState, createContext} from 'react';
import Authorization from './pages/Authorization.js';
import Registration from './pages/Registration.js';
import EmailSent from './pages/EmailSent.js';


export const UserContext = createContext();

const App = () => {

	// Set states
	const [page, setPage] = useState('Authorization');
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	let pageComponent;

	// Render
	if (page === 'Authorization') {
		pageComponent = <Authorization setPage={setPage} />;
	}

	if (page === 'Registration') {
		pageComponent = <Registration setPage={setPage} />;
	}
															
	if (page === 'EmailSent') {
		pageComponent = <EmailSent setPage={setPage} />;
	}

	return (
		<UserContext.Provider value={{name, setName, email, setEmail, password, setPassword}}>
			{pageComponent}
		</UserContext.Provider>
	);
}


export default App;
