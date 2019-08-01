import React from "react"
import Helmet from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

const SEO = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          lang
          author
        }
      }
    }
  `)

  return (
    <Helmet title={`${title} | ${data.site.siteMetadata.title}`}>
      <meta charSet="utf-8" />
      <meta
        name="description"
        content={`${data.site.siteMetadata.description}`}
      />
      <link rel="canonical" href="https://bhajko.dev/" />
      <html lang="en" />
    </Helmet>
  )
}

export default SEO
