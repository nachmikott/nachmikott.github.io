import React, { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

const CALENDLY_STYLESHEET = 'https://assets.calendly.com/assets/external/widget.css';
const CALENDLY_SCRIPT = 'https://assets.calendly.com/assets/external/widget.js';

export const Contact = ({ title, description, buttons }) => {
	const { ref: contactRef, inView } = useInView({
		threshold: 0.1,
		triggerOnce: true,
	});
	const [shouldLoadCalendly, setShouldLoadCalendly] = useState(false);
	const [isCalendlyLoaded, setIsCalendlyLoaded] = useState(false);
	const [pendingCalendlyUrl, setPendingCalendlyUrl] = useState(null);
	const [calendlyLoadError, setCalendlyLoadError] = useState(false);

	useEffect(() => {
		if (inView) {
			setShouldLoadCalendly(true);
		}
	}, [inView]);

	useEffect(() => {
		if (isCalendlyLoaded && pendingCalendlyUrl && typeof window !== 'undefined' && window.Calendly) {
			window.Calendly.initPopupWidget({ url: pendingCalendlyUrl });
			setPendingCalendlyUrl(null);
		}
	}, [isCalendlyLoaded, pendingCalendlyUrl]);

	const handleCalendlyClick = useCallback((event, url) => {
		event.preventDefault();

		const openCalendlyPopup = (widgetUrl) => {
			window.Calendly.initPopupWidget({
				url: widgetUrl,
			});
		};

		if (calendlyLoadError) {
			window.open(url, '_blank', 'noopener,noreferrer');
			return;
		}

		if (typeof window !== 'undefined' && window.Calendly) {
			openCalendlyPopup(url);
		} else {
			setPendingCalendlyUrl(url);
		}
	}, [calendlyLoadError]);

	return (
		<div id="contact" className="bg-white py-5 px-5" ref={contactRef}>
			{shouldLoadCalendly && (
				<>
					<Head>
						<link rel="stylesheet" href={CALENDLY_STYLESHEET} />
					</Head>
					<Script
						src={CALENDLY_SCRIPT}
						strategy="lazyOnload"
						onLoad={() => setIsCalendlyLoaded(Boolean(window.Calendly))}
						onError={() => {
							setCalendlyLoadError(true);
							if (pendingCalendlyUrl && typeof window !== 'undefined') {
								window.open(pendingCalendlyUrl, '_blank', 'noopener,noreferrer');
								setPendingCalendlyUrl(null);
							}
						}}
					/>
				</>
			)}
			<div className="container">
				<h1 className="text-primary fw-bold">{title}</h1>
				<div>
					<p>{description}</p>
					<div className="d-flex flex-wrap align-items-center gap-3">
						{buttons.map(({ title, link, isPrimary, calendlyBadge }, index) =>
							calendlyBadge ? (
								<button
									key={index}
									type="button"
									className={`btn ${isPrimary ? 'btn-primary' : 'btn-outline-primary'}`}
									onClick={(event) => handleCalendlyClick(event, link)}
								>
									{title}
								</button>
							) : (
								<Link
									key={index}
									href={link}
									className={`btn ${isPrimary ? 'btn-primary' : 'btn-outline-primary'}`}
								>
									{title}
								</Link>
							)
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export const Footer = () => {
	return (
		<footer className="bg-secondary text-center py-2 px-5">
			<div className="container text-muted">
				<small>&copy; 2025 {" "}
						<Link href="https://github.com/nachmikott">nachmikott</Link>
				</small>
			</div>
		</footer>
	);
}
