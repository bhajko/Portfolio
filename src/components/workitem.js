import React from "react"
import Img from "gatsby-image"

const WorkItem = ({ image, title, tech, code, demo }) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image">
          <Img fluid={image.childImageSharp.fluid} alt={title} />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content has-text-centered">
            <p className="title is-4">{title}</p>
            <div className="tags is-centered">
              {tech.map(tag => (
                <span className="tag is-warning is-rounded">{tag}</span>
              ))}
            </div>
            <div className="space-around">
              <a
                href={code}
                className="link has-text-weight-bold"
                target="blank"
              >
                Code
              </a>
              <a
                href={demo}
                className="link has-text-weight-bold"
                target="blank"
              >
                Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkItem
