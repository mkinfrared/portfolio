import React from 'react';
import './Contact.css'

function Contact() {
	return (
		<div className='contact'>
			<h2>My Contacts</h2>
			<div className="contact-wrapper">
				<img src="/icons/email-icon.svg" alt=""/>
				<img src="/icons/linkedin-icon.svg" alt=""/>
				<img src="/icons/Octicons-mark-github-2.svg" alt=""/>
			</div>
		</div>
	);
}

export default Contact;