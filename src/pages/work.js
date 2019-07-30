import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import GatsbyIcon from "../assets/gatsby.svg"

import WorkItem from "../components/workitem"
import Layout from "../components/layout"
import SEO from "../components/seo"

const WorkPage = () => {
  const data = useStaticQuery(graphql`
    query {
      portfolio: file(relativePath: { eq: "portfolio.png" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const portfolioTech = ["React", "Gatsby", "GraphQL", "Bulma", "Sass"]
  const projectTech = ["HTML", "CSS", "JavaScript"]

  return (
    <Layout>
      <SEO title="My work" />
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <WorkItem
                image={data.portfolio}
                title="Project 1"
                tech={projectTech}
              />
            </div>
            <div className="column">
              <WorkItem
                image={data.portfolio}
                title="Project 1"
                tech={projectTech}
              />
            </div>
            <div className="column">
              <WorkItem
                image={data.portfolio}
                title="Project 1"
                tech={projectTech}
              />
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <WorkItem
                image={data.portfolio}
                title="Project 1"
                tech={projectTech}
              />
            </div>
            <div className="column">
              <WorkItem
                image={data.portfolio}
                title="Project 1"
                tech={projectTech}
              />
            </div>
            <div className="column">
              <WorkItem
                image={data.portfolio}
                title="Portfolio site"
                tech={portfolioTech}
                icon={<GatsbyIcon className="workIcons" />}
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default WorkPage
