import { graphql } from 'gatsby'
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

export const query = graphql`
  query VideographyPage {
    allDatoCmsVideographyCategory(sort: [{ position: ASC }]) {
      nodes {
        name
      }
    }
    allDatoCmsVideographyWork(sort: [{ position: ASC }]) {
      nodes {
        id
        title
        src
      }
    }
  }
`

type Work = {
  id: string
  title: string
  src: string
}

type VideographyPageProps = {
  data: {
    allDatoCmsVideographyCategory: {
      nodes: { name: string }[]
    }
    allDatoCmsVideographyWork: {
      nodes: Work[]
    }
  }
}

const VideographyPage = ({ data }: VideographyPageProps) => {
  const categories = data.allDatoCmsVideographyCategory.nodes.map(
    (node) => node.name
  )
  const works = data.allDatoCmsVideographyWork.nodes

  return (
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
          {works.map((work) => (
            <div key={work.id}>
              <VideoEmbed src={work.src} label={work.title} />
            </div>
          ))}
        </WorksGrid>
      </PageContent>
    </Layout>
  )
}

export const Head = ({ location }: { location: { pathname: string } }) => (
  <Seo
    title="Nic Murphy - Videography"
    keywords={seoKeywords}
    description="Nic Murphy - Videography, warm and reliable doc style capturing the beautiful, ethnographic essence in moving form"
    pathname={location.pathname}
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
