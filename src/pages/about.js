import React from "react"
import { Link, graphql, useStaticQuery, withPrefix } from "gatsby"
import Img from "gatsby-image"
import { IconContext } from "react-icons"
import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiReact,
  DiSass,
  DiNodejsSmall,
  DiMongodb,
  DiGithubBadge,
  DiStackoverflow,
  DiTrello,
  DiNpm,
} from "react-icons/di"
import { FaDocker, FaYarn, FaSlack, FaVuejs } from "react-icons/fa"
import TsIcon from "../assets/typescript.svg"
import VsIcon from "../assets/visualstudiocode.svg"
import WpIcon from "../assets/webpack.svg"
import XdIcon from "../assets/adobexd.svg"
import JestIcon from "../assets/jest.svg"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      about: file(relativePath: { eq: "about.png" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="About" />
      <section className="section">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column">
              <h1 className="has-text-weight-bold">About Me</h1>
              <br />
              <p>
                I'm Balázs, a frontend developer based in Budapest, Hungary. I
                focus on creating digital products with great user experience.
              </p>
              <br />
              <p>
                I specialise in frontend development and I build websites and
                applications with <strong>React</strong>, <strong>Next.js</strong>, <strong>React Native</strong>,
                <strong>Redux</strong>, <strong>GraphQL</strong>, and <strong>Styled Components</strong>.
              </p>
              <br />
              <p>
                I look forward to creating meaningful products as a developer.
              </p>
              <br />
              <p>
                If you wish to work with me,{" "}
                <Link to="/contact">
                  <span className="has-text-weight-bold link">contact me.</span>
                </Link>
              </p>
              <br />
            </div>

            <div className="column">
              <Img
                title="About image"
                alt="About"
                fluid={data.about.childImageSharp.fluid}
              />
            </div>
          </div>
          <div className="columns is-desktop">
            <div className="column">
              <h1 className="has-text-weight-bold has-text-centered">
                My skill set
              </h1>
              <br />
              <div className="space-around">
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
                    color: "#F7DF1E",
                    size: "2.5em",
                  }}
                >
                  <span className="tooltip" data-tooltip="JavaScript">
                    <DiJsBadge />
                  </span>
                </IconContext.Provider>
                <span className="tooltip" data-tooltip="TypeScript">
                  <TsIcon className="aboutIcons aboutIcons--ts" />
                </span>
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
            <div className="is-divider-vertical is-hidden-touch" />
            <div className="column">
              <h1 className="has-text-weight-bold has-text-centered">
                Tools I use
              </h1>
              <br />
              <div className="space-around">
                <span className="tooltip" data-tooltip="VS Code">
                  <VsIcon className="aboutIcons aboutIcons--vs" />
                </span>
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
            <div className="is-divider-vertical is-hidden-touch" />
            <div className="column">
              <h1 className="has-text-weight-bold has-text-centered">
                On the radar
              </h1>
              <br />
              <div className="space-around">
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
                <span className="tooltip" data-tooltip="Jest">
                  <JestIcon className="aboutIcons aboutIcons--je" />
                </span>
                <span className="tooltip" data-tooltip="Webpack">
                  <WpIcon className="aboutIcons aboutIcons--wp" />
                </span>
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
                <span className="tooltip" data-tooltip="Adobe XD">
                  <XdIcon className="aboutIcons aboutIcons--xd" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default AboutPage
