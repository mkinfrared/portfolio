import React, {Component} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';


class Nav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false
		};

		this.toggleMenu = this.toggleMenu.bind(this);
		this.closeMenu  = this.closeMenu.bind(this);

	}

	componentDidMount() {
		window.addEventListener('click', this.closeMenu);
	}

	componentWillUnmount() {
		window.removeEventListener('click', this.closeMenu);
	}

	closeMenu() {
		this.setState({open: false});
	}

	toggleMenu(ev) {
		ev.stopPropagation();
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
						<AnchorLink onClick={() => this.closeMenu()} href="#home">Home</AnchorLink>
					</li>
					<li>
						<AnchorLink onClick={() => this.closeMenu()} href="#skills">Skills</AnchorLink>
					</li>
					<li>
						<AnchorLink onClick={() => this.closeMenu()} href="#projects">Projects</AnchorLink>
					</li>
					<li>
						<AnchorLink onClick={() => this.closeMenu()} href="#contact">Contact</AnchorLink>
					</li>
				</ul>
				<button className={`hamburger
									hamburger--elastic
									${(open) ? `is-active` : null}`}
						type="button"
						onClick={this.toggleMenu}>
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