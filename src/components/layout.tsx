import React from 'react'

import GlobalStyles from './global-styles'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <GlobalStyles />
    <main>{children}</main>
  </>
)

export default Layout
