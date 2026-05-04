import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import navLogo from '../assets/purpleLogo.svg';
import './TopNavBar.css';

const TopNavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`top-navbar ${mobileOpen ? 'top-navbar--mobile-open' : ''}`}>
      <div className="top-navbar__inner">
        <Link to="/" className="top-navbar__logo">
          <img src={navLogo} alt="Marually" />
        </Link>

        <div className="top-navbar__links">
          <Link
            to="/"
            className={`top-navbar__link ${isActive('/') ? 'top-navbar__link--active' : ''}`}
            onClick={() => setMobileOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/driver"
            className={`top-navbar__link ${isActive('/driver') ? 'top-navbar__link--active' : ''}`}
            onClick={() => setMobileOpen(false)}
          >
            운전자
          </Link>
          <Link
            to="/advertiser"
            className={`top-navbar__link ${isActive('/advertiser') ? 'top-navbar__link--active' : ''}`}
            onClick={() => setMobileOpen(false)}
          >
            광고주
          </Link>
        </div>

        <Link to="/advertiser" className="top-navbar__cta">
          광고  의뢰
        </Link>

        <button
          className="top-navbar__hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="메뉴 열기"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default TopNavBar;
