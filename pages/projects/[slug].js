import React, { Fragment, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { Header } from '../../components/Header';
import { Nav } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { navigation, SEO } from '../../config/config';
import { loadProjects } from '../../lib/projects';

export async function getStaticPaths() {
  const projectCards = loadProjects();
  const paths = projectCards
    .filter((card) => Boolean(card.slug))
    .map((card) => ({ params: { slug: card.slug } }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const projectCards = loadProjects();
  const project = projectCards.find((card) => card.slug === params.slug);

  if (!project) {
    return {
      notFound: true,
    };
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 5000);

  const readmeUrl = `https://raw.githubusercontent.com/nachmikott/${project.slug}/main/README.md`;

  let readmeMarkdown = null;

  try {
    const response = await fetch(readmeUrl, {
      headers: {
        Accept: 'text/markdown',
      },
      signal: controller.signal,
    });

    if (response.ok) {
      readmeMarkdown = await response.text();
    } else {
      console.warn(`Failed to fetch README for ${project.slug}: ${response.status}`);
    }
  } catch (error) {
    if (error.name === 'AbortError') {
      console.warn(`Fetching README for ${project.slug} timed out`);
    } else {
      console.error(`Error fetching README for ${project.slug}:`, error);
    }
  } finally {
    clearTimeout(timeoutId);
  }

  return {
    props: {
      project,
      readmeMarkdown,
    },
  };
}

export default function ProjectDetail({ project, readmeMarkdown }) {
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
          <div className="card card-work p-4 project-detail__body">
            <div className="project-detail__primary project-markdown">
              <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                {readmeMarkdown}
              </ReactMarkdown>
            </div>
            {project.demoVideo && (
              <div className="mt-4">
                <h2 className="h5 text-primary text-center fw-semibold">Demo Video</h2>
                <div className="ratio ratio-16x9 mt-2">
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
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
}
