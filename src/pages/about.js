import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const AboutPage = () => {
    return (
        <Layout>
            <SEO title="About me" />
            <h1>About Me</h1>
            <p>I currently work as a Front-end developer.</p>
            <p><Link to="/contact">Want to work with me? Reach out.</Link></p>
        </Layout>
    )
}

export default AboutPage