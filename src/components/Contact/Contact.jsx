import React from 'react';
import './Contact.css'

function Contact() {
	return (
		<div id='contact' className='contact'>
			<h2>My Contacts</h2>
			<div className="contact-wrapper">
				<a href="mailto:mkinfrared@gmail.com" target="_self">
					<img src="/icons/email-icon.svg" alt="email"/>
				</a>
				<a href="https://www.linkedin.com/in/mikhail-korotkov/" target="_blank">
					<img src="/icons/linkedin.svg" alt="linkedIN"/>
				</a>
				<a href="https://github.com/mkinfrared" target="_blank">
					<img src="/icons/Octicons-mark-github-2.svg" alt="github"/>
				</a>
			</div>
		</div>
	);
}

export default Contact;