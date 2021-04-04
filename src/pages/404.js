import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/SEO"

const NotFound = () => {
  return (
    <Layout>
      <SEO title="404" />
      <h3>Oh no! A wild 404 appeared!</h3>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </Layout>
  )
}

export default NotFound
