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
        }
      }
    }
  `)

  return (
    <Helmet
      title={`${title} | ${data.site.siteMetadata.title}`}
      description={data.site.siteMetadata.description}
      lang={data.site.siteMetadata.lang}
    />
  )
}

export default SEO
