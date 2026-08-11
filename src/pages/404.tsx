import { graphql } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import BackLink from '../components/back-link'
import Layout from '../components/layout'
import { PageContent, Title } from '../components/page-header'
import Seo from '../components/seo'
import seoKeywords from '../data/keywords.json'
import { vwCap } from '../utils/scale'

export const query = graphql`
  query NotFoundPage {
    datoCmsHomePage {
      roleTitle
    }
  }
`

type NotFoundPageProps = {
  data: {
    datoCmsHomePage: {
      roleTitle: string
    }
  }
}

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

export const Head = ({
  location,
  data,
}: {
  location: { pathname: string }
  data: NotFoundPageProps['data']
}) => (
  <Seo
    title="Nic Murphy - Page Not Found"
    keywords={seoKeywords}
    description={`Nic Murphy - ${data.datoCmsHomePage.roleTitle}`}
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
