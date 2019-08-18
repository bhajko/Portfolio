import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Success = () => {
  const data = useStaticQuery(graphql`
    query {
      email: file(relativePath: { eq: "mail.png" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Email sent" />
      <section className="section">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-half is-offset-one-quarter has-text-centered">
              <h1 className="title">Thank you for your message!</h1>
              <br />
              <h2 className="subtitle">
                I will get back to you as soon as possible.
              </h2>
              <Img
                title="Success image"
                alt="Success"
                fluid={data.email.childImageSharp.fluid}
              />
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

export default Success
