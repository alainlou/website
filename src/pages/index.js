import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/SEO';

const IndexPage = () => (
    <Layout>
        <SEO title="Home"/>
        <h3>Hey!</h3>
        <br></br>
        <p>
            I'm Alain, a computer engineering student at the University of Waterloo. 
            I'm interested in applying my knowledge to tackle big problems.
            Over my undergraduate career, I hope to explore the tech industry and find out where I fit!
        </p>
        <p>
            This is my little corner on the internet where I talk about my experiences.
        </p>
    </Layout>
);

export default IndexPage;