import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/SEO';
import { Link,  useStaticQuery, graphql } from 'gatsby';

import commonStyles from '../styles/common.module.scss';

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark(sort: { fields: [frontmatter___date], order: [DESC]}) {
                edges {
                    node {
                        fields {
                            slug
                        }
                        frontmatter {
                            title
                            date
                        }                        
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
                        <div key={i}>
                            <Link to={`/blog/${edge.node.fields.slug}`} className={commonStyles.link}>                    
                                <h3>{edge.node.frontmatter.title}</h3>
                                <h6>{edge.node.frontmatter.date}</h6>                            
                                <p>{edge.node.excerpt}</p>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </Layout>
    );
};

export default BlogPage;