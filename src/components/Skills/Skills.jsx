import React from 'react';
import Blocks from '../Blocks/Blocks';
import {Bounce} from 'react-reveal';

function Skills(props) {
	function getBadge() {
		var s   = document.createElement('script');
		s.type  = 'text/javascript';
		s.async = true;
		s.src   = '//cdn.youracclaim.com/assets/utilities/embed.js';
		var o   = document.getElementsByTagName('script')[0];
		o.parentNode.insertBefore(s, o);
	}

	getBadge();

	return (
		<div id='skills' className='skills'>
			<Bounce top
					  delay={100}
					  duration={1000}>
				<h2>My skills</h2>
			</Bounce>
			<Blocks/>
			<div className="badges">
				<div className='badge'
					  data-iframe-width="150"
					  data-iframe-height="270"
					  data-share-badge-id="265a674f-a791-4371-9f39-ac61fbb8cdd6">
				</div>
			</div>
		</div>
	);
}

export default Skills;