import React, { Fragment, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Header } from '../../components/Header';
import { Nav } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { navigation, projects, SEO } from '../../config/config';

export async function getStaticPaths() {
  const paths = projects.cards
    .filter((card) => Boolean(card.slug))
    .map((card) => ({ params: { slug: card.slug } }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const project = projects.cards.find((card) => card.slug === params.slug);

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      project,
    },
  };
}

export default function ProjectDetail({ project }) {
  const router = useRouter();

  const navLinks = useMemo(
    () =>
      navigation.links.map((item) => ({
        ...item,
        link: item.link.startsWith('#') ? `/${item.link}` : item.link,
      })),
    []
  );

  const projectSeo = useMemo(
    () => ({
      ...SEO,
      title: `${project.title} | ${SEO.title}`,
      description: project.description,
    }),
    [project]
  );

  const handleBack = () => {
    if (typeof window !== 'undefined' && window.history.length > 1) {
      router.back();
    } else {
      router.push('/#projects');
    }
  };

  return (
    <Fragment>
      <Header seo={projectSeo} />
      <Nav title={navigation.name} links={navLinks} />
      <main className="bg-secondary min-vh-100 py-5">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
            <button type="button" className="btn btn-outline-primary" onClick={handleBack}>
              ← Back
            </button>
            {project.icons && project.icons.length > 0 && (
              <div className="project-detail__icons">
                {project.icons.map((item, index) => (
                  <Link key={index} href={item.link}>
                    <a className="icon-link" target="_blank" rel="noreferrer">
                      <FontAwesomeIcon className="icon-style project-detail__icon" icon={item.icon} size="lg" />
                    </a>
                  </Link>
                ))}
              </div>
            )}
          </div>
          <div className="card card-work p-4">
            {project.demoVideo && (
              <div className="ratio ratio-16x9 mb-4">
                <iframe
                  src={project.demoVideo}
                  title={`${project.title} demo video`}
                  width="100%"
                  height="100%"
                  style={{ border: '0' }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            )}
            <div className="ratio ratio-16x9">
              <iframe
                src={`https://nachmikott.com/${project.slug}`}
                title={`${project.title} preview`}
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
