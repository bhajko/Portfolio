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
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      aurora: file(relativePath: { eq: "aurora.png" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      bpdeluxe: file(relativePath: { eq: "bpdeluxe.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  const bpDeluxeTech = ["React", "Styled Components", "Contentful"]
  const portfolioTech = ["React", "Gatsby", "GraphQL", "Bulma", "Sass"]
  const auroraTech = ["HTML", "CSS", "Materialize", "PHP"]
  const projectTech = ["HTML", "CSS", "JavaScript"]

  return (
    <Layout>
      <SEO title="Work" />
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
                image={data.bpdeluxe}
                title="BP Deluxe Homes"
                tech={bpDeluxeTech}
                code="https://github.com/bhajko/BP-Deluxe-Homes"
                demo="https://bpdeluxe.bhajko.dev/"
              />
            </div>
            <div className="column">
              <WorkItem
                image={data.portfolio}
                title="Portfolio"
                tech={portfolioTech}
                code="https://github.com/bhajko/Portfolio"
                demo="https://bhajko.dev/"
              />
            </div>
            <div className="column">
              <WorkItem
                image={data.aurora}
                title="Aurora Hungary"
                tech={auroraTech}
                code="https://github.com/bhajko/Aurora-Hungary"
                demo="https://aurorahungary.hu/"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default WorkPage
