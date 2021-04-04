import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/SEO"

import * as indexStyles from "./index.module.scss"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "headshot-UW.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 2000)
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <h3>Hello!</h3>
      <p>
        I'm a Computer Engineering student at the University of Waterloo
        interested in building technology to connect the world. I love to learn
        and am always looking for new applications of cool tech. In my spare
        time I enjoy playing music, exercising, and building personal projects.
      </p>
      <p>This is my little corner on the internet.</p>
      <div className={indexStyles.face}>
        <GatsbyImage alt="" image={data.file.childImageSharp.gatsbyImageData} />
      </div>
    </Layout>
  )
}

export default IndexPage
