import React from "react"
import PropTypes from "prop-types"
// import { StaticQuery, graphql } from "gatsby"

import Navbar from './globals/navbar';
// import "./layout.css"

const Layout = ({ children }) => {
  return (
  <React.Fragment>
    <Navbar />
    {children}
  </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
