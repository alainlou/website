import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/SEO';
import Card from '../components/card';

import projectsStyles from './projects.module.scss';

const ProjectsPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allProjectsJson {
                edges {
                    node {
                        title
                        imgSrc {
                            relativePath
                        }
                        url
                        description
                    }
                }
            }
        }
    `);

    return (
        <Layout>
            <SEO title="Projects"/>
            <div className={projectsStyles.container}>
                {data.allProjectsJson.edges.map((project, i) => {
                    console.log(project.node);
                    return (
                        <Card key={i} imgSrc={project.node.imgSrc.relativePath} title={project.node.title} url={project.node.url} content={project.node.description}/>
                    )
                })}
            </div>
        </Layout>
    );
};

export default ProjectsPage;