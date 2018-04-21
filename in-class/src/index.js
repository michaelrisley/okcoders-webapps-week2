import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const habits = ["Learn React", "Learn JS", "Run", "Read"]

const CurrentHabits = (props) => {
	const liHabits = props.habits.map((mappedHabits) => <li>{mappedHabits}</li>)
	return (
	<div>
		<ol>
			{liHabits}
		</ol>
	</div>
	)
}

class UserHabits extends Component {
	constructor(props) {
		super(props)
		this.state = {
			habitName: "",
			habits: []
		}
	}

	handleChange = (event) => {
		this.setState({ habitName: event.target.value });
	}

	handleSubmit = (event) => {
		event.preventDefault()
		this.setState((prevState) => {
			return{
				habitName: "",
				habits: [ ...prevState.habits, prevState.habitName]
			}
		})

		console.log(this.state)
	}

	render() {
			return (
			<div>
	      		<form onSubmit={this.handleSubmit}>
		        	<label>
		          		Habit Name:
		          		<input type="text" value={this.state.habitName} onChange={this.handleChange} />
		        	</label>
	        		<input type="submit" value="Submit" />
	      		</form>
	      		<CurrentHabits habits={this.state.habits} />
      		</div>
    		)
  		}
	}

class App extends Component {
	constructor(props) {
	super(props)
	this.state = {
		name: "Michael" 
	}
}

	render() {
		return (
		<div>
		<h1>Welcome {this.state.name} {this.state.name2} {this.state.lastname} to Class Components!</h1>
		<h2>You are rendering more than one html tag now!</h2> 
		<UserHabits />
		</div> 
		)	
	}
}

class BoilerPlateClass extends Component {
		constructor(props) {
			super(props)
			this.state = {
			}
		}

	render() {
			return (
			<div>
			</div>
			)
		}
	}



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();