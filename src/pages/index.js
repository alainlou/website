import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/SEO"

import * as indexStyles from "./index.module.scss"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "running.jpeg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 2000)
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <h3>Hello!</h3>
      <p>
        I'm a recent graduate of the Computer Engineering program at the University of Waterloo specializing in FPGA development. I am curious about the world; I love to learn and experience new things! In my spare time I enjoy music, food and being in good company.
      </p>
      <p>This is my little corner on the internet.</p>
      <div className={indexStyles.face}>
        <GatsbyImage alt="" image={data.file.childImageSharp.gatsbyImageData} />
      </div>
    </Layout>
  )
}

export default IndexPage
