import React from 'react'
import styled from 'styled-components'

import BackLink from '../components/back-link'
import Layout from '../components/layout'
import {
  BackRow,
  PageContent,
  SubTagline,
  Tagline,
  Title,
} from '../components/page-header'
import Seo from '../components/seo'
import VideoEmbed from '../components/video-embed'
import seoKeywords from '../data/keywords.json'
import { vwCap } from '../utils/scale'

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
    src: 'https://player.vimeo.com/video/1188692154?h=8190e903f3',
  },
  {
    src: 'https://player.vimeo.com/video/955313324',
  },
  { src: 'https://player.vimeo.com/video/932355557' },
  { src: 'https://player.vimeo.com/video/1069388085' },
  { src: 'https://player.vimeo.com/video/1174155985?h=0368281ba8' },
  { src: 'https://player.vimeo.com/video/890146386' },
  { src: 'https://player.vimeo.com/video/210398140' },
  { src: 'https://player.vimeo.com/video/750766072' },
]

const VideographyPage = () => (
  <Layout>
    <PageContent>
      <BackRow>
        <BackLink />
      </BackRow>
      <Title>Videography</Title>

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
        {works.map((work, index) => (
          <div key={index.toString()}>
            <VideoEmbed src={work.src} />
          </div>
        ))}
      </WorksGrid>
    </PageContent>
  </Layout>
)

export const Head = () => (
  <Seo
    title="Nic Murphy - Videography"
    keywords={seoKeywords}
    description="Nic Murphy - Videography, warm and reliable doc style capturing the beautiful, ethnographic essence in moving form"
  />
)

const CategoryGrid = styled.div`
  display: flex;
  gap: ${vwCap(0.5)} ${vwCap(3.5)};
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: ${vwCap(5)};
`

const Category = styled.p`
  font-size: ${vwCap(3)};
  margin: 0;
  text-transform: uppercase;
`

const WorksGrid = styled.div`
  padding-bottom: ${vwCap(5)};
  margin: 0 auto;
  max-width: ${vwCap(71)};

  > div {
    margin-bottom: ${vwCap(5)};
  }
`

export default VideographyPage
