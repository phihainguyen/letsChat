import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

const App = () => {
	if (!localStorage.getItem('username')) return <LoginForm />;
	return (
		<ChatEngine
			height="100vh"
			projectID="a7f7329e-4f2d-4581-a5e1-089a70a7eb44"
			userName="phihai93"
			userSecret="123123"
			renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
		/>
	);
};

export default App;
