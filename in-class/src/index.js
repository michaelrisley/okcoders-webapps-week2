import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const Habits = ["learn react", "learn js", "run", "read"]

const App = (props) => {
	return (
		<div>
		<h1>Welcome {props.name} {props.name2} {props.lastname} to Pure Components!</h1>
		<h2>You are rendering more than one html tag now!</h2> 
		</div> 
	)
}

ReactDOM.render(<App name="Michael" name2="Andrew" lastname="Risley" />, document.getElementById('root'));
registerServiceWorker();
