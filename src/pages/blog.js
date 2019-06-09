import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/SEO';
import { useStaticQuery } from 'gatsby';

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                    frontmatter {
                        title
                        date
                    }
                    html
                    excerpt
                    }
                }
            }
        }
    `)
    return (
        <Layout>
            <SEO title="Blog"/>
            <div>
                {data.allMarkdownRemark.edges.map((edge, i) => {
                    return (
                        <div>
                            <h2>{edge.node.frontmatter.title}</h2>
                            <h6>{edge.node.frontmatter.date}</h6>
                            <p>{edge.node.excerpt}</p>
                        </div>
                    )
                })}
            </div>
        </Layout>
    );
};

export default BlogPage;