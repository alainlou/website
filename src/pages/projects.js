import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/SEO';
import Card from '../components/card';

const ProjectsPage = () => {
    return (
        <Layout>
            <SEO title="Projects"/>
            <p>This is a migration project from Github...</p>
            <Card imgSrc="https://source.unsplash.com/user/erondu/600x400" title="Hello" content="This is a card"/>
        </Layout>
    );
};

export default ProjectsPage;