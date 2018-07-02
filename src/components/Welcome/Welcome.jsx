import React from 'react';
import Typed from 'react-typed';
import Arrows from '../Arrows/Arrows';
import './Welcome.css'

function Welcome(props) {
	return (
		<div className='welcome'>
			<Typed className='typed-text'
				   strings={[ "Hello!<br>" +
							  "My name is Mikhail Korotkov.<br>" +
							  "I am a full stack developer."]}
				   typeSpeed={70}
			/>
			<Arrows className='arrows'/>
		</div>
	);
}

export default Welcome;