import { asset } from '../lib/assets';
import { HOME_LINK, INVITE_HREF, NAV_ITEMS } from '../data/navigation';
import { ArrowLink } from './ArrowLink';
import { Logo } from './Logo';
import './Footer.css';

const SOCIAL_LINKS = [
  { name: 'Facebook', icon: 'facebook', width: 20, height: 20 },
  { name: 'YouTube', icon: 'youtube', width: 21, height: 20 },
  { name: 'Twitter', icon: 'twitter', width: 21, height: 18 },
  { name: 'Pinterest', icon: 'pinterest', width: 20, height: 20 },
  { name: 'Instagram', icon: 'instagram', width: 21, height: 20 },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner container">
        <a className="site-footer__logo" href={HOME_LINK.href} aria-label="Photosnap home">
          <Logo />
        </a>

        <ul className="site-footer__social" role="list">
          {SOCIAL_LINKS.map((social) => (
            <li key={social.icon}>
              <a className="site-footer__social-link" href="#" aria-label={social.name}>
                <img
                  src={asset(`shared/desktop/${social.icon}.svg`)}
                  alt=""
                  width={social.width}
                  height={social.height}
                />
              </a>
            </li>
          ))}
        </ul>

        <nav className="site-footer__nav" aria-label="Footer">
          <ul className="site-footer__nav-list" role="list">
            {[HOME_LINK, ...NAV_ITEMS].map((item) => (
              <li key={item.href}>
                <a className="site-footer__nav-link" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ArrowLink className="site-footer__invite" href={INVITE_HREF}>
          Get an invite
        </ArrowLink>

        <p className="site-footer__copyright">Copyright 2019. All Rights Reserved</p>
      </div>
    </footer>
  );
}
