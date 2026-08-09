import React from 'react'
import styled from 'styled-components'
import creditsData from '../../content/credits.json'
import BackLink from '../components/back-link'
import Layout from '../components/layout'
import Link from '../components/link'
import { BackRow, PageContent, Title } from '../components/page-header'
import Seo from '../components/seo'
import VideoEmbed from '../components/video-embed'
import seoKeywords from '../data/keywords.json'
import { vwCap } from '../utils/scale'

const { credits } = creditsData

const featured = [
  { src: 'https://player.vimeo.com/video/370975104' },
  { src: 'https://player.vimeo.com/video/286266479' },
  {
    src: 'https://player.vimeo.com/video/1143973952?h=88d64c53c6',
  },
  { src: 'https://player.vimeo.com/video/1070896800' },
  { src: 'https://player.vimeo.com/video/932355557' },
]

const WorkPage = () => (
  <Layout>
    <PageContent>
      <BackRow>
        <BackLink />
      </BackRow>
      <Title>Multimedia Director, Editor, Producer, Writer</Title>

      {featured.map((item, index: number) => (
        <FeaturedBlock key={index.toString()}>
          <VideoEmbed src={item.src} />
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

export const Head = () => (
  <Seo
    title="Nic Murphy - Work"
    keywords={seoKeywords}
    description="Nic Murphy - Multimedia Director, Editor, Producer, Writer"
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
