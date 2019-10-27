import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

export const query = graphql`
    query($slug: Date!) {
        markdownRemark(fields: { slug : { eq: $slug } }) {
            frontmatter {
                title
                date
            }
            html
        }
    }
`

const Blog = (props) => {    
    return (
        <Layout>
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <h3>{props.data.markdownRemark.frontmatter.date}</h3>
            <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
        </Layout>
    )
}

export default Blog;