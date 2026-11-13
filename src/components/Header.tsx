import { useEffect } from 'react';
import { asset } from '../lib/assets';
import { initMobileMenu } from '../lib/interactions';
import { HOME_LINK, INVITE_HREF, NAV_ITEMS } from '../data/navigation';
import { Logo } from './Logo';
import './Header.css';

export function Header() {
  useEffect(() => initMobileMenu(), []);

  return (
    <header className="site-header">
      <div className="site-header__inner container">
        {/* The Photosnap title is the page's single top-level heading */}
        <h1 className="site-header__title">
          <a className="site-header__home" href={HOME_LINK.href}>
            <Logo className="site-header__logo" />
            <span className="sr-only">Photosnap</span>
          </a>
        </h1>

        <button
          className="site-header__toggle"
          type="button"
          aria-expanded="false"
          aria-controls="site-menu"
          aria-label="Open menu"
        >
          <img
            className="site-header__toggle-icon site-header__toggle-icon--open"
            src={asset('shared/mobile/menu.svg')}
            alt=""
            width="20"
            height="6"
          />
          <img
            className="site-header__toggle-icon site-header__toggle-icon--close"
            src={asset('shared/mobile/close.svg')}
            alt=""
            width="16"
            height="15"
          />
        </button>

        <div className="site-menu" id="site-menu">
          <nav className="site-nav" aria-label="Primary">
            <ul className="site-nav__list" role="list">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a className="site-nav__link" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a className="btn btn--dark site-menu__cta" href={INVITE_HREF}>
            Get an invite
          </a>
        </div>
      </div>
      <div className="site-header__overlay" aria-hidden="true" />
    </header>
  );
}
