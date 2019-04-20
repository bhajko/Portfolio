import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import headerStyles from '../styles/header.module.scss'

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

    return (
        <header className={headerStyles.header}>
            <h1>
                <Link
                    className={headerStyles.title} to="/">
                    {data.site.siteMetadata.author}
                </Link>
            </h1>
            <nav>
                <ul className={headerStyles.navbar}>
                    <li>
                        <Link
                            className={headerStyles.navLink}
                            activeClassName={headerStyles.navLinkActive} to="/">Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={headerStyles.navLink}
                            activeClassName={headerStyles.navLinkActive} to="/about">About me
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={headerStyles.navLink}
                            activeClassName={headerStyles.navLinkActive} to="/work">My work
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={headerStyles.navLink}
                            activeClassName={headerStyles.navLinkActive} to="/contact">Contact me
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header