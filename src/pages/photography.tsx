import { graphql } from 'gatsby'
import { GatsbyImage, type IGatsbyImageData } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
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

export const query = graphql`
  query PhotographyPage {
    datoCmsPhotographyPage {
      heroImage {
        alt
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    allDatoCmsPhotographyCategory(sort: [{ position: ASC }]) {
      nodes {
        label
        href
      }
    }
  }
`

type PhotographyPageProps = {
  data: {
    datoCmsPhotographyPage: {
      heroImage: {
        alt: string | null
        gatsbyImageData: IGatsbyImageData
      }
    }
    allDatoCmsPhotographyCategory: {
      nodes: { label: string; href: string }[]
    }
  }
}

const PhotographyPage = ({ data }: PhotographyPageProps) => {
  const { heroImage } = data.datoCmsPhotographyPage
  const categories = data.allDatoCmsPhotographyCategory.nodes

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

        {heroImage && (
          <HeroImageWrapper>
            <GatsbyImage
              image={heroImage.gatsbyImageData}
              alt={heroImage.alt ?? 'Selected photography by Nic Murphy'}
            />
          </HeroImageWrapper>
        )}
      </PageContent>
    </Layout>
  )
}

export const Head = ({ location }: { location: { pathname: string } }) => (
  <Seo
    title="Nic Murphy - Photography"
    keywords={seoKeywords}
    description="Nic Murphy - Photography, warm and reliable capturing the beautiful, ethnographic essence in still form"
    pathname={location.pathname}
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
