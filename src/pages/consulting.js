import React from 'react'
import styled from 'styled-components'

import HeaderConsulting from '../components/header-consulting'
import Layout from '../components/layout'
import SEO from '../components/seo'
import seoKeywords from '../data/keywords'

const ConsultingPage = () => (
  <Layout>
    <SEO
      title="Nic Murphy - Consulting"
      keywords={seoKeywords}
      description="Nic Murphy - Writer, Multimedia Director"
    />

    <HeaderConsulting />

    <Content>
      <p>CONTENT COMING SOON</p>
    </Content>
  </Layout>
)

const Content = styled.div`
  padding: 0 5vw;
`

export default ConsultingPage
