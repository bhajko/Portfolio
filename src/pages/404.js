import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFound = () => {
    return (
        <Layout>
            <SEO title="404: Not found" />
            <div className="container">
                <h1>Page not found</h1>
                <p><Link to="/">Head home</Link></p>
            </div>
        </Layout>
    )
}

export default NotFound