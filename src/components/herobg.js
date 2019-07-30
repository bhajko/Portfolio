import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"

import BackgroundImage from "gatsby-background-image"

const HeroBg = () => (
  <StaticQuery
    query={graphql`
      query {
        hero: file(relativePath: { eq: "hero.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <BackgroundImage fluid={data.hero.childImageSharp.fluid}>
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
                <Link
                  className="button button--hero is-dark is-rounded"
                  to="/work"
                >
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
        </BackgroundImage>
      )
    }}
  />
)

export default HeroBg
