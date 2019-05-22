import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/SEO';

const IndexPage = () => (
    <Layout>
        <SEO title="Home"/>
        <h3>Hey!</h3>
        <p>
            I'm Alain, a computer engineering student at the University of Waterloo. Over my undergraduate career, I hope to explore the tech industry and find out where I fit!
        </p>
    </Layout>
);

export default IndexPage;