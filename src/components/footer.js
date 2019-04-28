import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

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
                <p>Created by {data.site.siteMetadata.author}, © {new Date().getFullYear()}</p>
            </div>
        </footer>
    )
}

export default Footer