import React, { Fragment, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Nav } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { navigation, SEO } from '../config/config';
import { Header } from '../components/Header';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const RESUME_EMBED_URL = 'https://docs.google.com/document/d/e/2PACX-1vSGQH2EljbZPlE4dmNUUkKrk2LG2DHJktyR-1O5vOI8iwWzncbLRqrPrVTAojc21xcZQYaQYmx4eTwS/pub?embedded=true';

export default function Resume() {
  const resumeSeo = useMemo(() => ({
    ...SEO,
    title: 'Resume | Nachmi Kott',
    description: 'CV and experience summary for Nachmi Kott, senior full-stack software engineer.',
  }), []);

  const navLinks = useMemo(
    () =>
      navigation.links.map((link) => ({
        ...link,
        link: link.link.startsWith('#') ? `/${link.link}` : link.link,
      })),
    []
  );

  return (
    <Fragment>
      <Header seo={resumeSeo} />
      <Nav title={navigation.name} links={navLinks} />
      <main className="bg-white py-5 px-5">
        <div className="container">
          <div className="mb-4">
            <h1 className="text-primary fw-bold">Resume</h1>
            <a
              className="btn btn-outline-primary mt-3"
              href="https://docs.google.com/document/d/1Z44Xt87s5C_Dr6UPxCSSauhs7_Ru3xbEFZiBl-KY4Bs/edit?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              See on Google Docs
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ms-2" size="sm" />
            </a>
          </div>
          <div className="d-flex justify-content-center">
            <div className="ratio ratio-4x3" style={{ width: '100%', maxWidth: '960px', minHeight: '720px' }}>
              <iframe
                src={RESUME_EMBED_URL}
                title="Nachmi Kott Resume"
                width="100%"
                height="100%"
                style={{ border: '0' }}
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
}
