import React from 'react';
import {Bounce} from 'react-reveal';

function Contact() {
	return (
		<div id='contact' className='contact'>
			<Bounce top
					delay={100}
					duration={1000}>
				<h2>My Contacts</h2>
			</Bounce>
			<div className="contact-wrapper">
				<Bounce left
						delay={300}
						duration={1000}>
					<a href="mailto:mkinfrared@gmail.com" target="_self">
						<img src="/icons/email-icon.svg" alt="email"/>
					</a>
				</Bounce>
				<Bounce bottom
						delay={300}
						duration={1000}>
					<a href="https://www.linkedin.com/in/mikhail-korotkov/" target="_blank" rel="noopener noreferrer">
						<img src="/icons/linkedin.svg" alt="linkedIN"/>
					</a>
				</Bounce>
				<Bounce right
						delay={300}
						duration={1000}>
					<a href="https://github.com/mkinfrared" target="_blank" rel="noopener noreferrer">
						<img src="/icons/Octicons-mark-github-2.svg" alt="github"/>
					</a>
				</Bounce>
			</div>
		</div>
	);
}

export default Contact;