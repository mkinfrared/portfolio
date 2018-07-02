import React, {Component} from 'react';
import Nav from './components/Nav/Nav';
import Welcome from './components/Welcome/Welcome';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Nav/>
				<Welcome/>
			</div>
		);
	}
}

export default App;
