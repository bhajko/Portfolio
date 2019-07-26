import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  const toggleNavbar = () => {
    document.querySelector(".navbar-menu").classList.toggle("is-active")
    document.querySelector(".navbar-burger").classList.toggle("is-active")
  }

  const active = {
    boxShadow: "inset 0 3px 0 #FFDD57",
  }

  return (
    <header>
      <nav
        className="navbar is-light nav-wrap"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item logo" to="/">
              {data.site.siteMetadata.author}
            </Link>

            <div
              className="navbar-burger burger"
              onClick={toggleNavbar}
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasic"
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </div>
          </div>
          <div id="navbarBasic" className="navbar-menu">
            <div className="navbar-end">
              <Link className="navbar-item" activeStyle={active} to="/">
                Home
              </Link>
              <Link className="navbar-item" activeStyle={active} to="/work">
                Work
              </Link>
              <Link className="navbar-item" activeStyle={active} to="/about">
                About
              </Link>
              <Link className="navbar-item" activeStyle={active} to="/contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
