import React from 'react';
import './Nav.css'

function Nav(props) {
	return (
		<div className='nav'>
			<div className="logo">
				<p>MK</p>
			</div>
			<ul>
				<li>
					<a href="#">Home</a>
				</li>
				<li>
					<a href="#">Skills</a>
				</li>
				<li>
					<a href="#">Portfolio</a>
				</li>
				<li>
					<a href="#">Contact</a>
				</li>
			</ul>
		</div>
	)
}

export default Nav;