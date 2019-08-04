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
      <section className="section">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-half is-offset-one-quarter has-text-centered">
              <h1 className="title is-2">Page not found</h1>
              <h1 className="title is-1 is-warning">404</h1>
              <Img fluid={data.robot.childImageSharp.fluid} />
              <p>
                <Link className="has-text-weight-bold link" to="/">
                  Home page
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default NotFound
