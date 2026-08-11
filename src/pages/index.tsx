import { graphql } from 'gatsby'
import React from 'react'

import Header from '../components/header'
import Layout from '../components/layout'
import Seo from '../components/seo'
import seoKeywords from '../data/keywords.json'

export const query = graphql`
  query IndexPage {
    datoCmsHomePage {
      roleTitle
    }
  }
`

type IndexPageProps = {
  data: {
    datoCmsHomePage: {
      roleTitle: string
    }
  }
}

const IndexPage = () => (
  <Layout>
    <Header />
  </Layout>
)

export const Head = ({
  location,
  data,
}: {
  location: { pathname: string }
  data: IndexPageProps['data']
}) => (
  <Seo
    title="Nic Murphy"
    keywords={seoKeywords}
    description={`Nic Murphy - ${data.datoCmsHomePage.roleTitle}`}
    pathname={location.pathname}
  />
)

export default IndexPage
