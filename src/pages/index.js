import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const IndexPage = () => (
    <Layout>
        <h1>Hi there!</h1>
        <h2>I'm Alain Lou, an ECE student at the University of Waterloo</h2>
        <Link to="/contact">Contact</Link>
    </Layout>
);

export default IndexPage;