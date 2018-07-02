import React, {Component} from 'react';
import './Nav.css';


class Nav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false
		}
	}

	toggleMenu() {
		this.setState({open: !this.state.open});
	}

	render() {
		const {open} = this.state;

		return (
			<div className='nav'>
				<div className="logo">
					<p>MK</p>
				</div>
				<ul className={(open) ? 'open' : null}>
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
				<button className={`hamburger
									hamburger--elastic
									${(open) ? `is-active` : null}`}
						type="button"
						onClick={() => this.toggleMenu()}>
				  	<span className="hamburger-box">
						<span className="hamburger-inner">
						</span>
				  	</span>
				</button>
			</div>
		);
	}

}

export default Nav;