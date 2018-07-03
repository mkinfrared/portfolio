import React, {Component} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
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
						<AnchorLink href="#home">Home</AnchorLink>
					</li>
					<li>
						<AnchorLink href="#skills">Skills</AnchorLink>
					</li>
					<li>
						<AnchorLink href="#projects">Projects</AnchorLink>
					</li>
					<li>
						<AnchorLink href="#contact">Contact</AnchorLink>
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