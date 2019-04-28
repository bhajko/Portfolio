import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => {
    return (
        <Layout>
            <SEO title="Home" />
            <div className="container">
                <h1>Hello.</h1>
                <h2>I'm Balázs, a Front-end developer living in Budapest.</h2>
                <p>Need a developer? <Link to="/contact">Contact me.</Link></p>
            </div>
        </Layout>
    )
}

export default IndexPage
