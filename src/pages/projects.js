import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/SEO"
import Card from "../components/card"

import * as projectsStyles from "./projects.module.scss"

const ProjectsPage = () => {
  const data = useStaticQuery(graphql`
    {
      allProjectsJson {
        edges {
          node {
            title
            image {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
              }
            }
            url
            description
            credit
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Projects" />
      <div className={projectsStyles.container}>
        {data.allProjectsJson.edges.map((project, i) => {
          return (
            <Card
              key={i}
              fluid={project.node.image.childImageSharp.gatsbyImageData}
              title={project.node.title}
              url={project.node.url}
              content={project.node.description}
              credit={project.node.credit}
            />
          )
        })}
      </div>
    </Layout>
  )
}

export default ProjectsPage
