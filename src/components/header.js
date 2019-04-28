import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

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
        document.querySelector('.navbar-menu').classList.toggle('is-active')
        document.querySelector('.navbar-burger').classList.toggle('is-active')
    }

    return (
        <header>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link className="navbar-item" to="/">{data.site.siteMetadata.author}</Link>

                    <div className="navbar-burger burger" onClick={toggleNavbar} aria-label="menu" aria-expanded="false" data-target="navbarBasic">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </div>
                </div>
                <div id="navbarBasic" className="navbar-menu">
                    <div className="navbar-end">
                        <Link className="navbar-item" to="/">Home</Link>
                        <Link className="navbar-item" to="/about">About</Link>
                        <Link className="navbar-item" to="/work">Work</Link>
                        <Link className="navbar-item" to="/contact">Contact</Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header