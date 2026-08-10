import React from 'react'
import styled from 'styled-components'
import BackLink from '../components/back-link'
import Layout from '../components/layout'
import { PageContent, Title } from '../components/page-header'
import Seo from '../components/seo'
import seoKeywords from '../data/keywords.json'
import { vwCap } from '../utils/scale'

const NotFoundPage = () => (
  <Layout>
    <PageContent>
      <Title>Page Not Found</Title>
      <Message>
        The page you're looking for doesn't exist or may have moved.
      </Message>
      <BackLinkRow>
        <BackLink />
      </BackLinkRow>
    </PageContent>
  </Layout>
)

export const Head = ({ location }: { location: { pathname: string } }) => (
  <Seo
    title="Nic Murphy - Page Not Found"
    keywords={seoKeywords}
    description="Nic Murphy - Multimedia Director, Editor, Producer, Writer"
    pathname={location.pathname}
  />
)

const Message = styled.p`
  font-size: ${vwCap(3)};
  margin: 0 0 ${vwCap(4)} 0;
  text-align: center;
`

const BackLinkRow = styled.div`
  text-align: center;
`

export default NotFoundPage
