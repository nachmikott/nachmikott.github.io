import React from 'react';
import getConfig from 'next/config'
import Link from 'next/link'

const { publicRuntimeConfig } = getConfig()

export const Intro = ({ title, description, image, buttons }) => {
	return (
		<div className="bg-secondary py-5 px-5">
			<div className="container">
				<div className=" row align-items-center">
					<div className="col-sm-6">
						<h1 className="text-primary fw-bold display-3">{title}</h1>
						<p>{description}</p>
					<div className="d-flex flex-wrap align-items-center gap-3">
						{buttons.map((value, index) => {
							const isExternal = value.link.startsWith('http') || value.link.startsWith('mailto:');
							return value.isPrimary ? (
								<Link key={index} href={value.link}>
									<a className="btn btn-primary">{value.title}</a>
								</Link>
							) : (
								<Link key={index} href={value.link}>
									<a
										className="btn btn-outline-primary"
										target={isExternal ? '_blank' : undefined}
										rel={isExternal ? 'noreferrer' : undefined}
									>
										{value.title}
									</a>
								</Link>
							);
						})}
					</div>
					</div>
					<div className="col-sm-6 text-center">
						<img
							className="img-fluid my-3 card-image" width="250"
							height="250" src={image}
							alt="profile of nachmikott"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export const About = ({ title, description }) => {
	return (
		<div id="about" className="bg-white py-5 px-5">
			<div className="container">
				<h1 className="text-primary fw-bold">{title}</h1>
				<div>
					{description.map((value, index) => (
						<p key={index} >{value}</p>
					))}
				</div>
			</div>
		</div>
	);
}
