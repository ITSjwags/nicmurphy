import React from 'react'
import PropTypes from 'prop-types'

import GlobalStyles from './global-styles'

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <main>{children}</main>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
