import React from 'react';
import Blocks from '../Blocks/Blocks';
import {Bounce} from 'react-reveal';

function Skills(props) {
	return (
		<div id='skills' className='skills'>
			<Bounce top
					delay={100}
					duration={1000}>
				<h2>My skills</h2>
			</Bounce>
			<Blocks/>
		</div>
	);
}

export default Skills;