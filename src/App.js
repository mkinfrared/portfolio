import React, {Component} from 'react';
import Nav from './components/Nav/Nav';
import Welcome from './components/Welcome/Welcome';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './_App.scss';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Nav/>
				<Welcome/>
				<Skills/>
				<Projects/>
				<Contact/>
				<Footer/>
			</div>
		);
	}
}

export default App;
