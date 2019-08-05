import React from "react"
import Img from "gatsby-image"

const WorkItem = ({ image, title, tech, code, demo }) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image">
          <a href={demo} target="_blank" rel="noopener noreferrer">
            <Img
              fluid={image.childImageSharp.fluid}
              className="workitemImg"
              alt={title}
            />
          </a>
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
                target="_blank"
                rel="noopener noreferrer"
              >
                Code
              </a>
              <a
                href={demo}
                className="link has-text-weight-bold"
                target="_blank"
                rel="noopener noreferrer"
              >
                Site
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkItem
