import { graphql } from 'gatsby'
import { GatsbyImage, getImage, type ImageDataLike } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import photographyData from '../../content/photography.json'
import BackLink from '../components/back-link'
import Layout from '../components/layout'
import Link from '../components/link'
import {
  BackRow,
  PageContent,
  SubTagline,
  Tagline,
  Title,
} from '../components/page-header'
import Seo from '../components/seo'
import seoKeywords from '../data/keywords.json'
import { vwCap } from '../utils/scale'

const { categories, heroImage } = photographyData
const heroImageFileName = heroImage.split('/').pop()

export const query = graphql`
  query PhotographyHeroImage {
    allFile(filter: { sourceInstanceName: { eq: "uploads" } }) {
      nodes {
        base
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  }
`

type PhotographyPageProps = {
  data: {
    allFile: {
      nodes: (ImageDataLike & { base: string })[]
    }
  }
}

const PhotographyPage = ({ data }: PhotographyPageProps) => {
  const heroImageNode = data.allFile.nodes.find(
    (node) => node.base === heroImageFileName
  )
  const heroImageData = heroImageNode && getImage(heroImageNode)

  return (
    <Layout>
      <PageContent>
        <BackRow>
          <BackLink />
        </BackRow>
        <Title>Photography</Title>

        <Tagline>
          Warm&nbsp;&nbsp;Unique&nbsp;&nbsp;Reliable&nbsp;&nbsp;Easy to Work
          With
        </Tagline>
        <SubTagline>
          Capturing the beautiful, ethnographic essence in still form
        </SubTagline>

        <PortfolioLabel>Selected Portfolio:</PortfolioLabel>
        <CategoryList>
          {categories.map((category) => (
            <CategoryItem key={category.label}>
              <Link
                href={category.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {category.label}
              </Link>
            </CategoryItem>
          ))}
        </CategoryList>

        {heroImageData && (
          <HeroImageWrapper>
            <GatsbyImage
              image={heroImageData}
              alt="Selected photography by Nic Murphy"
            />
          </HeroImageWrapper>
        )}
      </PageContent>
    </Layout>
  )
}

export const Head = () => (
  <Seo
    title="Nic Murphy - Photography"
    keywords={seoKeywords}
    description="Nic Murphy - Photography, warm and reliable capturing the beautiful, ethnographic essence in still form"
  />
)

const HeroImageWrapper = styled.div`
  margin: ${vwCap(5)} 0;
`

const PortfolioLabel = styled.h2`
  font-size: ${vwCap(2.5)};
  margin: 0 0 ${vwCap(1)} 0;
  text-transform: uppercase;
  text-align: center;
`

const CategoryList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: center;
`

const CategoryItem = styled.li`
  font-size: ${vwCap(3)};
  line-height: 1.7;
  text-transform: uppercase;
`

export default PhotographyPage
