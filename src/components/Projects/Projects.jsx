import React from 'react';

function Projects() {
	return (
		<div id='projects' className='projects'>
			<h2>My Projects</h2>
			<div className="projects-wrapper">
				<a href="https://mkorotkov.com" target="_blank">
					<div className="project">
						<div className="snapshot">
							<img src="/images/majestic.jpg" alt="majestic"/>
						</div>
						<div className="description">
							<h4>Majestic</h4>
							<p>Movie Theater App</p>
						</div>
					</div>
				</a>
			</div>
		</div>
	);
}

export default Projects;