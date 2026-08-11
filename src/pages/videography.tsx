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
import { wideSpaced } from '../utils/text'

export const query = graphql`
  query VideographyPage {
    datoCmsVideographyPage {
      title
      tagline
      subtagline
    }
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
    datoCmsVideographyPage: {
      title: string
      tagline: string
      subtagline: string
    }
    allDatoCmsVideographyCategory: {
      nodes: { name: string }[]
    }
    allDatoCmsVideographyWork: {
      nodes: Work[]
    }
  }
}

const VideographyPage = ({ data }: VideographyPageProps) => {
  const { title, tagline, subtagline } = data.datoCmsVideographyPage
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
        <Title>{title}</Title>

        <Tagline>{wideSpaced(tagline)}</Tagline>
        <SubTagline>{subtagline}</SubTagline>

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

export const Head = ({
  location,
  data,
}: {
  location: { pathname: string }
  data: VideographyPageProps['data']
}) => (
  <Seo
    title="Nic Murphy - Videography"
    keywords={seoKeywords}
    description={`Nic Murphy - Videography, ${data.datoCmsVideographyPage.subtagline}`}
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
