import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import footerStyles from './footer.module.scss';

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `);

    return (
        <footer className={footerStyles.footer}>
            Made by {data.site.siteMetadata.author}<br></br>

            <div className={footerStyles.tinyText}>
                Except where specified otherwise, all content is available under the&nbsp;
                <a href="https://creativecommons.org/licenses/by-sa/3.0/deed.en">
                    Creative Commons Attribution-ShareAlike 3.0 Unported License
                </a>
            </div>
        </footer>
    );
};

export default Footer;
