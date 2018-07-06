import React from 'react';

function Blocks(props) {
	return (
		<div className='blocks'>
			<div className="block front">
				<h3>Front-End Development</h3>
				<ul>
					<li className='html'>HTML 5</li>
					<li className='css'>CSS 3</li>
					<li className='javascript'>Javascript</li>
					<li className='react'>React</li>
					<li className='vue'>Vue</li>
					<li className='jquery'>jQuery</li>
				</ul>
			</div>
			<div className="block back">
				<h3>Back-End Development</h3>
				<ul>
					<li className='node'>Node</li>
					<li className='express'>Express</li>
					<li className='postgre'>PostgreSQL</li>
				</ul>
			</div>
			<div className="block misc">
				<h3>Additional Skills</h3>
				<ul>
					<li className='git'>Git</li>
					<li className='github'>GitHub</li>
					<li className='photoshop'>Photoshop</li>
				</ul>
			</div>
		</div>
	);
}

export default Blocks;