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

export const Head = () => (
  <Seo
    title="Nic Murphy"
    keywords={seoKeywords}
    description="Nic Murphy - Multimedia Director, Editor, Producer, Writer"
  />
)

export default IndexPage
