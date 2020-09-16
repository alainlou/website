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
                        image {
                            childImageSharp {
                                fluid(maxWidth: 600) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                        url
                        description
                        credit
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
                    return (
                        <Card key={i} fluid={project.node.image.childImageSharp.fluid} title={project.node.title} url={project.node.url} content={project.node.description} credit={project.node.credit}/>
                    )
                })}
            </div>
        </Layout>
    );
};

export default ProjectsPage;
