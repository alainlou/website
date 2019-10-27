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
            <h2>{props.data.markdownRemark.frontmatter.title}</h2>
            <h6>{props.data.markdownRemark.frontmatter.date}</h6>
            <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
        </Layout>
    )
}

export default Blog;