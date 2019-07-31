import React from "react"

import "../styles/index.scss"
import Header from "./header"
import Footer from "./footer"

const Layout = props => {
  return (
    <div className="site">
      <Header />
      <main className="site-content">{props.children}</main>
      <Footer />
    </div>
  )
}

export default Layout
