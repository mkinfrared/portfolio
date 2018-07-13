import React from 'react';
import {Bounce} from 'react-reveal';

function Projects() {
	return (
		<div id='projects' className='projects'>
			<Bounce top
					delay={100}
					duration={2000}>
				<h2>My Projects</h2>
			</Bounce>
			<div className="projects-wrapper">
				<Bounce left
						delay={300}
						duration={1000}>
					<div className="project">
						<div className="snapshot">
							<img src="/images/majestic.jpg" alt="majestic"/>
							<a href="https://majestic.mkorotkov.com" target="_blank">
								<div className='description'>
									<p>
										Movie theater app that helps movie theater administrators to add movies to the
										database, mark movies they want to show at their theater, create showtimes for
										each
										movie, track sold tickets, and for users to choose showtimes and seats and make
										payments on the website.
									</p>
								</div>
							</a>
						</div>
						<div className="brief-desc">
							<a href="https://majestic.mkorotkov.com" target="_blank">
								<h4>Majestic</h4>
								<p>Movie Theater App</p>
							</a>
							<div>
								<a href="https://github.com/mkinfrared/personal-project-i" target='_blank'>
									<img src='/icons/Octicons-mark-github.svg' alt=""/>
								</a>
							</div>
						</div>
					</div>
				</Bounce>
				<Bounce left
						delay={400}
						duration={1000}>
					<div className="project">
						<div className="snapshot">
							<img src="/images/spootify.jpg" alt="spootify"/>
							<a href="https://www.spootify.org" target="_blank">
								<div className='description'>
									<p>
										The Idea behind this project was to clone Spotify desktop application. Using
										Spotify's web API and playback SDK, we were able to recreate a sleek looking
										Spotify clone as well as producing music playback. We achieved the goal of
										authenticating by using a Spotify profile information through PassportJs,
										setting up the NodeJs server to connect to the Spotify API, and initializing and
										connecting the Spotify SDK music player. The project was developed with help
										of <a href='http://tayte.website' target='_blank'>Tayte Stokes</a> and <a
										href='https://www.jordanbuonforte.com' target='_blank'>Jordan Buonforte</a>.
									</p>
								</div>
							</a>
						</div>
						<div className="brief-desc">
							<a href="https://www.spootify.org" target="_blank">
								<h4>Spootify</h4>
								<p>Music Player App</p>
							</a>
							<div>
								<a href="https://github.com/spootify/spootify" target='_blank'>
									<img src='/icons/Octicons-mark-github.svg' alt=""/>
								</a>
							</div>
						</div>
					</div>
				</Bounce>
			</div>
		</div>
	);
}

export default Projects;