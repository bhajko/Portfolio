import React from 'react'

import Header from './header'
import Footer from './footer'
import '../styles/index.scss'

const Layout = (props) => {
    return (
        <div className="site">
            <Header />
            <main className="site-content">{props.children}</main>
            <Footer />
        </div>
    )
}

export default Layout