import React from "react"
import Img from "gatsby-image"

const WorkItem = ({ image, title, tech, icon, link }) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image">
          <Img fluid={image.childImageSharp.fluid} alt={title} />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{title}</p>
            <div className="tags">
              {tech.map(tag => (
                <span className="tag is-warning is-rounded">{tag}</span>
              ))}
            </div>
            <div>{icon}</div>
            <a href={link} target="blank">
              Check it out
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkItem
