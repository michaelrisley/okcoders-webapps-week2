import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const habits = ["learn react", "learn js", "run", "read"]

const CurrentHabits = () => {
	const liHabits = habits.map((mappedHabits) => <li>{mappedHabits}</li>)
	return (
	<div>
		<ol>
			{liHabits}
		</ol>
	</div>
	)
}

const App = (props) => {
	return (
		<div>
		<h1>Welcome {props.name} {props.name2} {props.lastname} to Pure Components!</h1>
		<h2>You are rendering more than one html tag now!</h2> 
		<CurrentHabits />
		</div> 
	)
}

ReactDOM.render(<App name="Michael" name2="Andrew" lastname="Risley" />, document.getElementById('root'));
registerServiceWorker();
