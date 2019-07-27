import React from "react"

const WorkItem = ({ image, title, tech, link }) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={image} alt={title} />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{title}</p>
            <p>{tech}</p>
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
