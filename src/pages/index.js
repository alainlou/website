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
                    fluid(maxHeight: 2000) {
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
                I'm Alain, a computer engineering student at the University of Waterloo. 
                I'm interested in using technology to connect the world.
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