import React from "react"
import { graphql, useStaticQuery } from "gatsby"

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
                tech="HTML CSS JAVASCRIPT"
              />
            </div>
            <div className="column">
              <WorkItem
                image={data.portfolio}
                title="Project 1"
                tech="HTML CSS JAVASCRIPT"
              />
            </div>
            <div className="column">
              <WorkItem
                image={data.portfolio}
                title="Project 1"
                tech="HTML CSS JAVASCRIPT"
              />
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <WorkItem
                image={data.portfolio}
                title="Project 1"
                tech="HTML CSS JAVASCRIPT"
              />
            </div>
            <div className="column">
              <WorkItem
                image={data.portfolio}
                title="Project 1"
                tech="HTML CSS JAVASCRIPT"
              />
            </div>
            <div className="column">
              <WorkItem
                image={data.portfolio}
                title="Portfolio site"
                tech="#React #Gatsby #GraphQL #Bulma #Sass"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default WorkPage
