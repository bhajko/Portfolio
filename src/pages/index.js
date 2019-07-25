import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />

      <section className="hero is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container">
            <h1>
              <span className="has-text-weight-bold highlight">
                Hello, I'm Balázs
              </span>
            </h1>
            <h2>
              <span className="highlight">
                a Front-end developer living in Budapest.
              </span>
            </h2>
            <Link className="button is-dark is-rounded" to="/work">
              Portfolio
            </Link>
            <br />
            <Link className="button is-dark is-rounded" to="/about">
              Skills
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
