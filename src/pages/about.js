import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "Hajko_Balazs.jpg" }) {
        childImageSharp {
          fixed(height: 300, width: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="About me" />
      <section className="section">
        <div className="container">
          <Img fixed={data.file.childImageSharp.fixed} />
          <h1>About Me</h1>
          <p>I currently work as a Front-end developer.</p>
          <p>
            <Link to="/contact">Want to work with me? Reach out.</Link>
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default AboutPage
