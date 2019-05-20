import React from 'react';
import { useStaticQuery } from 'gatsby';

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
        <footer>
            Created by {data.site.siteMetadata.author}, © {new Date().getFullYear()}
        </footer>
    );
};

export default Footer;