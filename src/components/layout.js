import React from 'react'

import Header from './header'
import Footer from './footer'
import '../styles/index.scss'

const Layout = (props) => {
    return (
        <div>
            <div>
                <Header />
                <main>{props.children}</main>
            </div>
            <Footer />
        </div>
    )
}

export default Layout