import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const habits = ["Learn React", "Learn JS", "Run", "Read"]

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

class App extends Component {
	constructor(props) {
	super(props)
	this.state = {}
}

	render() {
		return (
		<div>
		<h1>Welcome {this.props.name} {this.props.name2} {this.props.lastname} to Pure Components!</h1>
		<h2>You are rendering more than one html tag now!</h2> 
		<CurrentHabits />
		</div> 
		)	
	}
}





ReactDOM.render(<App name="Michael" name2="Andrew" lastname="Risley" />, document.getElementById('root'));
registerServiceWorker();