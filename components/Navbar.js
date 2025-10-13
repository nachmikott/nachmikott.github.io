import React, { useState } from 'react';
import Link from 'next/link';

export const Nav = ({ title, links }) => {

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-sm navbar-dark navbar-custom">
      <div className="container">
        <Link href="/">
          {/* <Image src={Logo} alt="Logo" width="36" height="36" className="vertical-align-middle" /> */}
          <a className="navbar-brand text-light">
            <span className="text-light">{title}</span>
          </a>
        </Link>
        <button
          className="custom-toggler navbar-toggler"
          type="button" data-toggle="collapse"
          data-target="#primary-navigation"
          aria-controls="primary-navigation"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="primary-navigation">
          <div className="navbar-nav mb-2 mb-sm-0">
            {links.map((value, index) => (
              <Link key={index} href={value.link}>
                <a className="nav-link text-light">{value.title}</a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
