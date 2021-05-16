import './App.css';
import React, {useState} 	from 'react';
import Authorization 		from './pages/Authorization.js';
import Registration 		from './pages/Registration.js';
import EmailSent 			from './pages/EmailSent.js';




const App = () => {
	// Set states
	const [page, setPage] = 		useState('Authorization');
	const [email, setEmail] = 		useState('');
	const [password, setPassword] = useState('');

	// Render
	if (page === 'Authorization') 	return <Authorization 	setPage={setPage} email={email} setEmail={setEmail} password={password} setPassword={setPassword}/>;
	if (page === 'Registration') 	return <Registration 	setPage={setPage} email={email} setEmail={setEmail} password={password} setPassword={setPassword}/>;
	if (page === 'EmailSent') 		return <EmailSent 		setPage={setPage} email={email} setEmail={setEmail} password={password} setPassword={setPassword}/>;

}



export default App;
