import React from 'react'
import styled from 'styled-components'

import BackLink from '../components/back-link'
import Layout from '../components/layout'
import { BackRow, SubTagline, Tagline, Title } from '../components/page-header'
import Seo from '../components/seo'
import VideoEmbed from '../components/video-embed'
import seoKeywords from '../data/keywords.json'
import { pageContentStyles, vwCap } from '../utils/scale'

const categories = [
  'Live Event',
  'Live Theater',
  'Promo Video',
  'Live Music',
  'Brand Video',
  'Doc Style Music Video',
]

const works = [
  {
    title: 'Star Trek',
    src: 'https://player.vimeo.com/video/1188692154?h=8190e903f3',
  },
  {
    title: 'Misfit Haus (Cannes 24)',
    src: 'https://player.vimeo.com/video/955313324',
  },
  { title: 'Bear Flag', src: 'https://player.vimeo.com/video/932355557' },
  { title: 'ERC Long', src: 'https://player.vimeo.com/video/1069388085' },
  {
    title: 'Mansion Magic',
    src: 'https://player.vimeo.com/video/1174155985?h=0368281ba8',
  },
  { title: 'Your Move', src: 'https://player.vimeo.com/video/890146386' },
  { title: 'Waves', src: 'https://player.vimeo.com/video/210398140' },
  { title: 'JE55IE', src: 'https://player.vimeo.com/video/750766072' },
]

const VideographyPage = () => (
  <Layout>
    <Content>
      <Title>Videography</Title>
      <BackRow>
        <BackLink />
      </BackRow>

      <Tagline>
        Warm&nbsp;&nbsp;Unique&nbsp;&nbsp;Reliable&nbsp;&nbsp;Low Impact Doc
        Style
      </Tagline>
      <SubTagline>
        Capturing the beautiful, ethnographic essence in moving form
      </SubTagline>

      <CategoryGrid>
        {categories.map((category) => (
          <Category key={category}>{category}</Category>
        ))}
      </CategoryGrid>

      <WorksGrid>
        {works.map((work) => (
          <div key={work.title}>
            <WorkTitle>{work.title}</WorkTitle>
            <VideoEmbed src={work.src} />
          </div>
        ))}
      </WorksGrid>
    </Content>
  </Layout>
)

export const Head = () => (
  <Seo
    title="Nic Murphy - Videography"
    keywords={seoKeywords}
    description="Nic Murphy - Videography, warm and reliable doc style capturing the beautiful, ethnographic essence in moving form"
  />
)

const Content = styled.div`
  ${pageContentStyles}
  padding: 0 ${vwCap(5)};
`

const CategoryGrid = styled.div`
  display: grid;
  gap: ${vwCap(2)};
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: ${vwCap(5)};
`

const Category = styled.p`
  font-size: ${vwCap(2.5)};
  margin: 0;
  text-transform: uppercase;
`

const WorksGrid = styled.div`
  padding-bottom: ${vwCap(5)};

  > div {
    margin-bottom: ${vwCap(5)};
  }
`

const WorkTitle = styled.h2`
  font-size: ${vwCap(3)};
  margin: 0 0 ${vwCap(1)} 0;
  text-decoration: underline;
`

export default VideographyPage
