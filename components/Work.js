import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const Skills = ({ title, cards }) => {
	return (
		<div id="skills" className="bg-secondary py-5 px-5">
			<div className="container">
				<h1 className="text-primary fw-bold">{title}</h1>
				<div className="d-flex flex-row flex-wrap justify-content-center">
					{cards.map((value, index) => (
						<Card
							key={index}
							title={value.title}
							description={value.description}
							link={value.link} />
					))}
				</div>
			</div>
		</div>
	);
}

export const Projects = ({ title, cards }) => {
	return (
		<div id="projects" className="bg-primary py-5 px-5">
			<div className="container">
				<h1 className="text-light fw-bold">Projects</h1>
				<div className="d-flex flex-row flex-wrap justify-content-center">
				{cards.map((value, index) => (
					<Card
						key={index}
						title={value.title}
						description={value.description}
						icons={value.icons}
						slug={value.slug}
					/>
				))}
				</div>
				{/* <div className="text-center">
					<button type="button" className="btn btn-outline-light">See More</button>
				</div> */}
			</div>
		</div>
	);
}

export const Card = ({ title, description, icons, slug }) => {
	const router = useRouter();
	const isInteractive = Boolean(slug);

	const navigateToProject = () => {
		if (!isInteractive) return;
		router.push(`/projects/${slug}`);
	};

	const handleKeyDown = (event) => {
		if (!isInteractive) return;
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			navigateToProject();
		}
	};
	return (
		<div
			className={`card py-3 px-3 mx-sm-4 my-4 card-work${isInteractive ? ' project-card' : ''}`}
			style={{ width: '20rem' }}
			role={isInteractive ? 'link' : undefined}
			tabIndex={isInteractive ? 0 : undefined}
			onClick={navigateToProject}
			onKeyDown={handleKeyDown}
		>
			<div className="d-flex flex-column h-100">
				<div>
					<h4 className="text-primary">{title}</h4>
					<p className="text-dark">{description}</p>
				</div>
					<div className="project-card__icons">
						{icons && icons.map((value, index) => (
							<Link
								key={index}
								href={value.link}
								className="icon-link"
								target="_blank"
								rel="noreferrer"
								onClick={(event) => event.stopPropagation()}
								onKeyDown={(event) => event.stopPropagation()}
							>
								<FontAwesomeIcon className="icon-style mx-1" icon={value.icon} size="2x" />
							</Link>
						))}
					</div>
			</div>
		</div>
	);
};
