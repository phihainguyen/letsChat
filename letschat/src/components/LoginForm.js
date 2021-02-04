import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
	const [ username, setUsername ] = useState('');
	const [ password, setPassword ] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();

		const authObject = {
			'Project-ID'  : 'a7f7329e-4f2d-4581-a5e1-089a70a7eb44',
			'User-Name'   : username,
			'User-Secret' : password
		};
		try {
			await axios.get('https://api.chatengine.io/chats', { headers: authObject });
			//storing the username and password to local storage that way once logged in you wont need to log in again
			localStorage.setItem('username', username);
			localStorage.setItem('password', password);

			//by reloading the page you are able to render something differently after logging in
			window.location.reload();
		} catch (error) {}
	};

	return (
		<div className="wrapper">
			<div className="form">
				<h1>Chat Application</h1>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						className="input"
						placeholder="Username"
						required
					/>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className="input"
						placeholder="Password"
						required
					/>
					<div align="center">
						<button type="submit" className="button">
							<span>Let's Chat</span>
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default LoginForm;
