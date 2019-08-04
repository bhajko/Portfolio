import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { IconContext } from "react-icons"
import { FaGithub, FaLinkedinIn, FaFacebookF, FaEnvelope } from "react-icons/fa"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "contact.png" }) {
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
      <SEO title="Contact" />
      <section className="section">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column">
              <Img fluid={data.file.childImageSharp.fluid} />
            </div>
            <div className="column">
              <h1 className="has-text-weight-bold">Drop me an email</h1>
              <br />
              <form
                action="/pages/success"
                name="contact"
                method="POST"
                data-netlify="true"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div className="field">
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      name="name"
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <input
                      className="input"
                      type="email"
                      name="email"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <textarea
                      className="textarea"
                      name="message"
                      placeholder="Message"
                    />
                  </div>
                </div>
                <button type="submit" className="button is-dark is-rounded">
                  Send
                </button>
              </form>

              <div className="is-divider" data-content="OR" />
              <div className="space-around">
                <a
                  href="https://www.facebook.com/balazs.hajko"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconContext.Provider
                    value={{
                      color: "#444",
                      size: "2em",
                      className: "fbIcon",
                    }}
                  >
                    <FaFacebookF />
                  </IconContext.Provider>
                </a>
                <a
                  href="https://www.linkedin.com/in/balazs-hajko/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconContext.Provider
                    value={{
                      color: "#444",
                      size: "2em",
                      className: "liIcon",
                    }}
                  >
                    <FaLinkedinIn />
                  </IconContext.Provider>
                </a>
                <a
                  href="https://github.com/bhajko"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconContext.Provider
                    value={{
                      color: "#444",
                      size: "2em",
                      className: "ghIcon",
                    }}
                  >
                    <FaGithub />
                  </IconContext.Provider>
                </a>
                <a href="mailto:bhajko@gmail.com" rel="noopener noreferrer">
                  <IconContext.Provider
                    value={{
                      color: "#444",
                      size: "2em",
                      className: "gmIcon",
                    }}
                  >
                    <FaEnvelope />
                  </IconContext.Provider>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ContactPage
