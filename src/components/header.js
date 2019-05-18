import React from 'react';
import { Link } from 'gatsby';

import headerStyles from './header.module.scss';

const Header = () => (
    <header className={headerStyles.header}>
        <h1>
            <Link className={headerStyles.title} to="/">
                Alain Lou
            </Link>
        </h1>
        <nav>
            <ul className={headerStyles.navMenu}>
                <li>
                    <Link className={headerStyles.navItem} to="/">Home</Link>
                </li>
                <li>
                    <Link className={headerStyles.navItem} to="/about">About</Link>
                </li>
                <li>
                    <Link className={headerStyles.navItem} to="/contact">Contact</Link>
                </li>
                <li>
                    <Link className={headerStyles.navItem} to="/blog">Blog</Link>
                </li>
            </ul>
        </nav>
    </header>
);

export default Header;