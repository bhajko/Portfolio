import React from "react"
import { Link } from "gatsby"

import ShowCase from "../components/showcase"
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
            <Link className="button button--hero is-dark is-rounded" to="/work">
              Portfolio
            </Link>
            <br />
            <Link
              className="button button--hero is-dark is-rounded"
              to="/about"
            >
              Skills
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ShowCase
            title="Projekt 1"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            accusantium et itaque totam iure atque error? Aliquam, doloremque
            harum? Veritatis."
          />
          <ShowCase
            title="Projekt 2"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            accusantium et itaque totam iure atque error? Aliquam, doloremque
            harum? Veritatis."
          />
          <ShowCase
            title="Projekt 3"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            accusantium et itaque totam iure atque error? Aliquam, doloremque
            harum? Veritatis."
          />
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
