import React from 'react';

function Projects() {
	return (
		<div id='projects' className='projects'>
			<h2>My Projects</h2>
			<div className="projects-wrapper">
				<div className="project">
					<div className="snapshot">
						<img src="/images/majestic.jpg" alt="majestic"/>
						<a href="https://majestic.mkorotkov.com" target="_blank">
							<div className='description'>
							</div>
						</a>
					</div>
					<div className="brief-desc">
						<a href="https://majestic.mkorotkov.com" target="_blank">
							<h4>Majestic</h4>
							<p>Movie Theater App</p>
						</a>
						<div>
							<a href="">
								<img src='/icons/Octicons-mark-github.svg' alt=""/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Projects;