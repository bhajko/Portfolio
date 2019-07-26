import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const ShowCase = ({ title, description }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "Macbook.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="showcase-card">
      <div className="showcase-img">
        <Img fluid={data.file.childImageSharp.fluid} />
      </div>
      <div className="showcase-details">
        <article className="message">
          <div className="message-body">
            <h1 className="title">{title}</h1>
            <p>{description}</p>
            <br />
            <button className="button is-dark is-rounded">Read more</button>
          </div>
        </article>
      </div>
    </div>
  )
}

export default ShowCase
