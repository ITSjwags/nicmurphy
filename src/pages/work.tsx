import { graphql } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import BackLink from '../components/back-link'
import Layout from '../components/layout'
import Link from '../components/link'
import { BackRow, PageContent, Title } from '../components/page-header'
import Seo from '../components/seo'
import VideoEmbed from '../components/video-embed'
import seoKeywords from '../data/keywords.json'
import { vwCap } from '../utils/scale'

export const query = graphql`
  query WorkCredits {
    allDatoCmsFeaturedWork(sort: [{ position: ASC }]) {
      nodes {
        id
        title
        src
      }
    }
    allDatoCmsCredit(sort: [{ position: ASC }]) {
      nodes {
        role
        title
        href
      }
    }
  }
`

type FeaturedWork = {
  id: string
  title: string
  src: string
}

type Credit = {
  role: string
  title: string
  href: string
}

type WorkPageProps = {
  data: {
    allDatoCmsFeaturedWork: {
      nodes: FeaturedWork[]
    }
    allDatoCmsCredit: {
      nodes: Credit[]
    }
  }
}

const WorkPage = ({ data }: WorkPageProps) => {
  const featured = data.allDatoCmsFeaturedWork.nodes
  const credits = data.allDatoCmsCredit.nodes

  return (
    <Layout>
      <PageContent>
        <BackRow>
          <BackLink />
        </BackRow>
        <Title>Multimedia Director, Editor, Producer, Writer</Title>

        {featured.map((item) => (
          <FeaturedBlock key={item.id}>
            <VideoEmbed src={item.src} label={item.title} />
          </FeaturedBlock>
        ))}

        <CreditList>
          {credits.map((credit) => (
            <CreditItem key={`${credit.role}-${credit.title}`}>
              <strong>{credit.role}</strong> -{' '}
              {credit.href ? (
                <Link
                  href={credit.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {credit.title}
                </Link>
              ) : (
                credit.title
              )}
            </CreditItem>
          ))}
        </CreditList>
      </PageContent>
    </Layout>
  )
}

export const Head = ({ location }: { location: { pathname: string } }) => (
  <Seo
    title="Nic Murphy - Work"
    keywords={seoKeywords}
    description="Nic Murphy - Multimedia Director, Editor, Producer, Writer"
    pathname={location.pathname}
  />
)

const FeaturedBlock = styled.div`
  margin: 0 auto ${vwCap(5)};
  max-width: ${vwCap(65)};
`

const CreditList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0 0 ${vwCap(5)} 0;
`

const CreditItem = styled.li`
  font-size: ${vwCap(3)};
  line-height: 1.2;
  margin: 0 0 ${vwCap(3)} 0;
`

export default WorkPage
