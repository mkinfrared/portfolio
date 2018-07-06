import React from 'react';
import Typed from 'react-typed';
import {Parallax, Background} from 'react-parallax';
import Arrows from '../Arrows/Arrows';

function Welcome(props) {
	return (
		<Parallax
			strength={150}
			bgImage={require('./mountain.jpg')}>
				<div id='home' className='welcome'>
					<Typed className='typed-text'
						   strings={["Hello!<br>" +
									 "My name is Mikhail Korotkov.<br>" +
									 "I am a full stack developer."]}
						   typeSpeed={70}
					/>
					<Arrows className='arrows'/>
				</div>
		</Parallax>
	);
}

export default Welcome;