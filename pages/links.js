import React, { Fragment, useMemo } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Footer } from '../components/Footer';
import { Nav } from '../components/Navbar';
import { links, navigation, SEO } from '../config/config';
import { Header } from '../components/Header';

export default function Home() {
  const navLinks = useMemo(
    () =>
      navigation.links.map((item) => ({
        ...item,
        link: item.link.startsWith('#') ? `/${item.link}` : item.link,
      })),
    []
  );

  return (
    <Fragment>
      <Header seo={SEO} />
      <Nav title={navigation.name} links={navLinks} />
      <main className="bg-secondary min-vh-100 d-flex flex-column">
        <div className="py-5 px-5 container text-center flex-grow-1">
          <img className="img-fluid my-3 card-image" width="150" height="150" src={links.image} alt="profile of nachmikott" />
          <h3 className="mt-3">{links.title}</h3>
          <p>{links.description}</p>
          {links.cards.map((value, index) => (
            <Button key={index} title={value.title} link={value.link} icon={value.icon} />
          ))}
        </div>
        <Footer />
      </main>
    </Fragment>
  );
}


function Button({ title, link, icon }) {
  return (
    <div className="row justify-content-center m-3">
      <div className="btn btn-outline-primary link-card border-0 link-card">
        <Link href={link} target="_blank" rel="noreferrer">
          <div className="d-flex align-items-center gap-3 py-3 px-3">
            {icon && <FontAwesomeIcon icon={icon} size='lg' />}
            <h4 className='mb-0'>{title}</h4>
          </div>
        </Link>
      </div>
    </div>
  );
}
