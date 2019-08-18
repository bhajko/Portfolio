import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const HeroBg = () => {
  const data = useStaticQuery(graphql`
    query {
      hero: file(relativePath: { eq: "hero.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4200, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <>
      <Img
        title="Hero image"
        alt="Developer"
        fluid={data.hero.childImageSharp.fluid}
        style={{
          position: "absolute",
          left: 0,
          top: "20px",
          width: "100%",
          height: "100%",
        }}
      />
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
    </>
  )
}

export default HeroBg
