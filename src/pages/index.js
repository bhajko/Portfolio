import React from "react"

import HeroBg from "../components/herobg"
import ShowCase from "../components/showcase"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />

      <HeroBg />

      <section className="section">
        <div className="container">
          <ShowCase
            title="Projekt 1"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            accusantium et itaque totam iure atque error? Aliquam, doloremque
            harum? Veritatis."
          />
          <ShowCase
            title="Projekt 2"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            accusantium et itaque totam iure atque error? Aliquam, doloremque
            harum? Veritatis."
          />
          <ShowCase
            title="Projekt 3"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            accusantium et itaque totam iure atque error? Aliquam, doloremque
            harum? Veritatis."
          />
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
