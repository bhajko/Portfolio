import React from "react"

import WorkItem from "../components/workitem"
import Layout from "../components/layout"
import SEO from "../components/seo"

const WorkPage = () => {
  return (
    <Layout>
      <SEO title="My work" />
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <WorkItem
                image={"https://bulma.io/images/placeholders/1280x960.png"}
                title="Project 1"
                tech="HTML CSS JAVASCRIPT"
              />
            </div>
            <div className="column">
              <WorkItem
                image={"https://bulma.io/images/placeholders/1280x960.png"}
                title="Project 1"
                tech="HTML CSS JAVASCRIPT"
              />
            </div>
            <div className="column">
              <WorkItem
                image={"https://bulma.io/images/placeholders/1280x960.png"}
                title="Project 1"
                tech="HTML CSS JAVASCRIPT"
              />
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <WorkItem
                image={"https://bulma.io/images/placeholders/1280x960.png"}
                title="Project 1"
                tech="HTML CSS JAVASCRIPT"
              />
            </div>
            <div className="column">
              <WorkItem
                image={"https://bulma.io/images/placeholders/1280x960.png"}
                title="Project 1"
                tech="HTML CSS JAVASCRIPT"
              />
            </div>
            <div className="column">
              <WorkItem
                image={"https://bulma.io/images/placeholders/1280x960.png"}
                title="Project 1"
                tech="HTML CSS JAVASCRIPT"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default WorkPage
