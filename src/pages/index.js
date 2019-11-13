import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/SEO';

import indexStyles from './index.module.scss';

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "headshot-UW.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2000) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    return (
        <Layout>
            <SEO title="Home"/>
            <h3>Hello!</h3>
            <p>
            I'm a Computer Engineering student at the University of Waterloo 
            interested in building technology to connect the world. I love to 
            learn and am always looking for new applications of cool tech. In 
            my spare time I enjoy playing music, exercising, and hacking.
            </p>
            <p>
                This is my little corner on the internet.
            </p>
            <div className={indexStyles.face}>
                <Img fluid={data.file.childImageSharp.fluid} />
            </div>
        </Layout>
    );    
};

export default IndexPage;