import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { IconContext } from "react-icons"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"

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
      <section className="section">
        <div className="container">
          <div className="columns">
            {/* <div className="column">
              <h1 className="has-text-weight-bold">Or contact me via...</h1>
            </div> */}
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
              <br />
              <a href="https://github.com/bhajko" target="_blank">
                <IconContext.Provider
                  value={{
                    color: "#FFDD57",
                    size: "2em",
                    style: "margin-right: 1em",
                  }}
                >
                  <FaGithub />
                </IconContext.Provider>
              </a>
              <a
                href="https://www.linkedin.com/in/balazs-hajko/"
                target="_blank"
              >
                <IconContext.Provider
                  value={{
                    color: "#FFDD57",
                    size: "2em",
                  }}
                >
                  <FaLinkedinIn />
                </IconContext.Provider>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ContactPage
