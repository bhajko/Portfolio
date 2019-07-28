import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { IconContext } from "react-icons"
import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiAngularSimple,
  DiReact,
  DiSass,
  DiNodejsSmall,
  DiMongodb,
  DiGithubBadge,
  DiStackoverflow,
  DiTrello,
  DiVisualstudio,
  DiNpm,
  DiBootstrap,
} from "react-icons/di"
import {
  FaDocker,
  FaYarn,
  FaSlack,
  FaVuejs,
  FaSketch,
  FaFigma,
} from "react-icons/fa"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      about: file(relativePath: { eq: "about.png" }) {
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
      <SEO title="About me" />
      <section className="section">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column">
              <h1 className="has-text-weight-bold">About Me</h1>
              <br />
              <p>
                I'm Balázs, a front-end developer based in Budapest, Hungary. I
                focus on creating digital products with great user experience.
                These days I work at a hungarian IT company where my role
                comprises of building new features and improving the overall
                experience of two R&D projects.
              </p>
              <br />
              <p>
                I specialise in front-end development and design systems. I'm
                passionate about the web, design and everything at its
                intersection. I deeply care about inclusion and empathy.
              </p>
              <br />
              <p>
                I look forward for opportunities as a developer to create
                meaningful products. I'm also interested in product and
                design-oriented roles.
              </p>
              <br />
              <p>
                If you wish to work with me,{" "}
                <Link to="/contact">
                  <span className="has-text-weight-bold about-link">
                    contact me.
                  </span>
                </Link>
              </p>
              <br />
              <p>
                You can download my CV{" "}
                <Link to="/contact">
                  <span className="has-text-weight-bold about-link">here.</span>
                </Link>
              </p>
            </div>

            <div className="column">
              <Img fluid={data.about.childImageSharp.fluid} />
            </div>
          </div>
          <div className="columns is-desktop">
            <div className="column">
              <h1 className="has-text-weight-bold has-text-centered">
                My skill set
              </h1>
              <br />
              <div className="icons-contact">
                <IconContext.Provider
                  value={{
                    color: "#E34F26",
                    size: "2.5em",
                  }}
                >
                  <span className="tooltip" data-tooltip="HTML5">
                    <DiHtml5 />
                  </span>
                </IconContext.Provider>
                <IconContext.Provider
                  value={{
                    color: "#1A70B5",
                    size: "2.5em",
                  }}
                >
                  <span className="tooltip" data-tooltip="CSS3">
                    <DiCss3 />
                  </span>
                </IconContext.Provider>
                <IconContext.Provider
                  value={{
                    color: "#CD6799",
                    size: "2.5em",
                  }}
                >
                  <span className="tooltip" data-tooltip="SASS">
                    <DiSass />
                  </span>
                </IconContext.Provider>
                <IconContext.Provider
                  value={{
                    color: "#61408F",
                    size: "2.5em",
                  }}
                >
                  <span className="tooltip" data-tooltip="Bootstrap">
                    <DiBootstrap />
                  </span>
                </IconContext.Provider>
                <IconContext.Provider
                  value={{
                    color: "#F7DF1E",
                    size: "2.5em",
                  }}
                >
                  <span className="tooltip" data-tooltip="JavaScript">
                    <DiJsBadge />
                  </span>
                </IconContext.Provider>
                <IconContext.Provider
                  value={{
                    color: "#DD0330",
                    size: "2.5em",
                  }}
                >
                  <span className="tooltip" data-tooltip="Angular">
                    <DiAngularSimple />
                  </span>
                </IconContext.Provider>
                <IconContext.Provider
                  value={{
                    color: "#00D8FF",
                    size: "2.5em",
                  }}
                >
                  <span className="tooltip" data-tooltip="ReactJS">
                    <DiReact />
                  </span>
                </IconContext.Provider>
              </div>
            </div>
            <div class="is-divider-vertical is-hidden-touch" />
            <div className="column">
              <h1 className="has-text-weight-bold has-text-centered">
                Tools I use
              </h1>
              <br />
              <div className="icons-contact">
                <IconContext.Provider
                  value={{
                    color: "#007ACD",
                    size: "2.5em",
                  }}
                >
                  <span className="tooltip" data-tooltip="VS Code">
                    <DiVisualstudio />
                  </span>
                </IconContext.Provider>
                <IconContext.Provider
                  value={{
                    color: "#FB3E44",
                    size: "2.5em",
                  }}
                >
                  <span className="tooltip" data-tooltip="NPM">
                    <DiNpm />
                  </span>
                </IconContext.Provider>
                <IconContext.Provider
                  value={{
                    color: "#2C8EBB",
                    size: "2.5em",
                  }}
                >
                  <span className="tooltip" data-tooltip="Yarn">
                    <FaYarn />
                  </span>
                </IconContext.Provider>
                <IconContext.Provider
                  value={{
                    color: "#24292E",
                    size: "2.5em",
                  }}
                >
                  <span className="tooltip" data-tooltip="GitHub">
                    <DiGithubBadge />
                  </span>
                </IconContext.Provider>
                <IconContext.Provider
                  value={{
                    color: "#F48024",
                    size: "2.5em",
                  }}
                >
                  <span className="tooltip" data-tooltip="Stack Overflow">
                    <DiStackoverflow />
                  </span>
                </IconContext.Provider>
                <IconContext.Provider
                  value={{
                    color: "#2AB77E",
                    size: "2.5em",
                  }}
                >
                  <span className="tooltip" data-tooltip="Slack">
                    <FaSlack />
                  </span>
                </IconContext.Provider>
                <IconContext.Provider
                  value={{
                    color: "#2571C2",
                    size: "2.5em",
                  }}
                >
                  <span className="tooltip" data-tooltip="Trello">
                    <DiTrello />
                  </span>
                </IconContext.Provider>
              </div>
            </div>
            <div class="is-divider-vertical is-hidden-touch" />
            <div className="column">
              <h1 className="has-text-weight-bold has-text-centered">
                On the radar
              </h1>
              <br />
              <div className="icons-contact">
                <IconContext.Provider
                  value={{
                    color: "#76B858",
                    size: "2.5em",
                  }}
                >
                  <span className="tooltip" data-tooltip="NodeJS">
                    <DiNodejsSmall />
                  </span>
                </IconContext.Provider>
                <IconContext.Provider
                  value={{
                    color: "#55AC4D",
                    size: "2.5em",
                  }}
                >
                  <span className="tooltip" data-tooltip="MongoDB">
                    <DiMongodb />
                  </span>
                </IconContext.Provider>
                <IconContext.Provider
                  value={{
                    color: "#00AADA",
                    size: "2.5em",
                  }}
                >
                  <span className="tooltip" data-tooltip="Docker">
                    <FaDocker />
                  </span>
                </IconContext.Provider>
                <IconContext.Provider
                  value={{
                    color: "#41B883",
                    size: "2.5em",
                  }}
                >
                  <span className="tooltip" data-tooltip="VueJS">
                    <FaVuejs />
                  </span>
                </IconContext.Provider>
                <IconContext.Provider
                  value={{
                    color: "#FDAD00",
                    size: "2.5em",
                  }}
                >
                  <span className="tooltip" data-tooltip="Sketch">
                    <FaSketch />
                  </span>
                </IconContext.Provider>
                <IconContext.Provider
                  value={{
                    color: "#F24E1E",
                    size: "2.5em",
                  }}
                >
                  <span className="tooltip" data-tooltip="Figma">
                    <FaFigma />
                  </span>
                </IconContext.Provider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default AboutPage
