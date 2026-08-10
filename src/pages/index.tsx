import React from 'react'

import Header from '../components/header'
import Layout from '../components/layout'
import Seo from '../components/seo'
import seoKeywords from '../data/keywords.json'

const IndexPage = () => (
  <Layout>
    <Header />
  </Layout>
)

export const Head = ({ location }: { location: { pathname: string } }) => (
  <Seo
    title="Nic Murphy"
    keywords={seoKeywords}
    description="Nic Murphy - Multimedia Director, Editor, Producer, Writer"
    pathname={location.pathname}
  />
)

export default IndexPage
