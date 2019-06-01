import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import seoKeywords from '../data/keywords'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={seoKeywords} />
  </Layout>
)

export default IndexPage
