import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

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
        <div className="footerLink-wrapper">
          <div className="footerLink">
            <Link className="link" to="/">
              Home
            </Link>
            <Link className="link" to="/work">
              Work
            </Link>
            <Link className="link" to="/about">
              About
            </Link>
            <Link className="link" to="/contact">
              Contact
            </Link>
          </div>
        </div>
        <p>
          © {data.site.siteMetadata.author} {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}

export default Footer
