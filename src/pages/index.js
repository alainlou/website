import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/SEO';

const IndexPage = () => (
    <Layout>
        <SEO title="Home"/>
        <h3>Hi!</h3>
        <p>
            I'm Alain, a computer engineering student at the University of Waterloo. Over my degree, I'll have 6 co-op terms, which I hope to "responsibly use" to explore the tech industry and find out where I fit!
        </p>
    </Layout>
);

export default IndexPage;