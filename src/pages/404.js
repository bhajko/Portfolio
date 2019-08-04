import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFound = () => {
  const data = useStaticQuery(graphql`
    query {
      robot: file(relativePath: { eq: "robot.png" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="404: Not found" />
      <div className="container">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter has-text-centered">
            <h1 className="title is-1">Page not found</h1>
            <Img fluid={data.robot.childImageSharp.fluid} />
            <p>
              <Link to="/">Head home</Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default NotFound
