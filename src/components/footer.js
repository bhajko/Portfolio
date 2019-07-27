import React from "react"
import { graphql, useStaticQuery } from "gatsby"
// import { IconContext } from "react-icons"
// import { FaGithub, FaLinkedinIn, FaFacebookF, FaEnvelope } from "react-icons/fa"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        {/* <a
          href="https://www.facebook.com/balazs.hajko"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconContext.Provider
            value={{
              color: "#444",
              size: "1.2em",
              className: "icons-footer",
            }}
          >
            <FaFacebookF />
          </IconContext.Provider>
        </a>
        <a
          href="https://www.linkedin.com/in/balazs-hajko/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconContext.Provider
            value={{
              color: "#444",
              size: "1.2em",
              className: "icons-footer",
            }}
          >
            <FaLinkedinIn />
          </IconContext.Provider>
        </a>
        <a
          href="https://github.com/bhajko"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconContext.Provider
            value={{
              color: "#444",
              size: "1.2em",
              className: "icons-footer",
            }}
          >
            <FaGithub />
          </IconContext.Provider>
        </a>
        <a href="mailto:bhajko@gmail.com" rel="noopener noreferrer">
          <IconContext.Provider
            value={{
              color: "#444",
              size: "1.2em",
              className: "icons-footer",
            }}
          >
            <FaEnvelope />
          </IconContext.Provider>
        </a> */}
        <p>
          © {data.site.siteMetadata.author} {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}

export default Footer
