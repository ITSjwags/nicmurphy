import React from 'react'
import styled from 'styled-components'

import BackLink from '../components/back-link'
import Layout from '../components/layout'
import Link from '../components/link'
import { BackRow, Title } from '../components/page-header'
import Seo from '../components/seo'
import VideoEmbed from '../components/video-embed'
import credits from '../data/credits'
import seoKeywords from '../data/keywords.json'
import { pageContentStyles, vwCap } from '../utils/scale'

const featured = [
  { title: 'Cages Teaser 2', src: 'https://player.vimeo.com/video/370975104' },
  { title: 'Spice Islands', src: 'https://player.vimeo.com/video/286266479' },
  {
    title: 'InCharacter Teaser',
    src: 'https://player.vimeo.com/video/1143973952?h=88d64c53c6',
  },
  {
    title: 'Misfit Haus SXSW',
    src: 'https://player.vimeo.com/video/1070896800',
  },
  { title: 'Bearflag', src: 'https://player.vimeo.com/video/932355557' },
]

const WorkPage = () => (
  <Layout>
    <Content>
      <Title $align="left">Multimedia Director, Editor, Producer, Writer</Title>
      <BackRow>
        <BackLink />
      </BackRow>

      {featured.map((item) => (
        <FeaturedBlock key={item.title}>
          <FeaturedTitle>{item.title}</FeaturedTitle>
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
    </Content>
  </Layout>
)

export const Head = () => (
  <Seo
    title="Nic Murphy - Work"
    keywords={seoKeywords}
    description="Nic Murphy - Multimedia Director, Editor, Producer, Writer"
  />
)

const Content = styled.div`
  ${pageContentStyles}
  padding: 0 ${vwCap(5)};
`

const FeaturedBlock = styled.div`
  margin-bottom: ${vwCap(5)};
`

const FeaturedTitle = styled.h2`
  font-size: ${vwCap(4)};
  margin: 0 0 ${vwCap(0.5)} 0;
`

const CreditList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0 0 ${vwCap(5)} 0;
`

const CreditItem = styled.li`
  font-size: ${vwCap(2.5)};
  line-height: 1.7;
`

export default WorkPage
