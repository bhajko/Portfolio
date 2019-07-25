import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "contact3.png" }) {
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
      <SEO title="Contact me" />
      <section className="section is-medium">
        <div className="container">
          <div className="columns">
            <div className="column">
              <Img fluid={data.file.childImageSharp.fluid} />
            </div>
            <div className="column">
              <h1 className="has-text-weight-bold">Drop me an email</h1>
              <br />
              <div className="field">
                <p className="control">
                  <input className="input" type="name" placeholder="Name" />
                </p>
              </div>
              <div className="field">
                <p className="control">
                  <input className="input" type="email" placeholder="Email" />
                </p>
              </div>
              <div className="field">
                <div className="control">
                  <textarea className="textarea" placeholder="Message" />
                </div>
              </div>
              <button className="button is-dark is-rounded">Send</button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ContactPage
