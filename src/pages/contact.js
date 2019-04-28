import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const ContactPage = () => {
    return (
        <Layout>
            <SEO title="Contact me" />
            <div className="container">
                <h1>Contact</h1>
                <p>The best way to reach me is via email.</p>
            </div>
        </Layout>
    )
}

export default ContactPage