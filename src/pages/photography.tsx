import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'

import BackLink from '../components/back-link'
import Layout from '../components/layout'
import Link from '../components/link'
import { BackRow, SubTagline, Tagline, Title } from '../components/page-header'
import Seo from '../components/seo'
import seoKeywords from '../data/keywords.json'
import { pageContentStyles, vwCap } from '../utils/scale'

// Category-to-folder order is inferred positionally, not confirmed — check with Nic before launch.
const categories = [
  {
    label: 'Set BTS',
    href: 'https://www.dropbox.com/scl/fo/zfi07ahw0vny43wm8s2l3/APQ7ZF_-XhHXJrPei62gPGc?rlkey=ocv95kaeuz2a8ivcm6hmziqz9&st=hbdtxv56&dl=0',
  },
  {
    label: 'Live Events & Theater',
    href: 'https://www.dropbox.com/scl/fo/jqjma07ut2o34hn11cy4v/AFXkp1uctVZ7K-gnfTyz_5U?rlkey=2dcbuc9jzp7p4s7g5fu8hspvm&st=4qlwm16s&dl=0',
  },
  {
    label: 'Key Art',
    href: 'https://www.dropbox.com/scl/fo/p6m6j2f0uyhnvhyyuqyl1/ACi9dj-r2RBgWfZKcun4gtk?rlkey=qymzb0vinc1sue2jw10oqgewg&st=mf9suar4&dl=0',
  },
  {
    label: 'Portrait',
    href: 'https://www.dropbox.com/scl/fo/iivg8l13xrt5baoey3qh6/AChU3QtkTz5eEshVnifBrG8?rlkey=ekrvo5darjpib8ahy9h5z5l02&st=dhz1yd6k&dl=0',
  },
  {
    label: 'Corporate & Merchandise',
    href: 'https://www.dropbox.com/scl/fo/6kqjq9fytnanpz6x8ez4t/AFmbbdc3vEBKJdbEwtbwGaA?rlkey=q943j8tgtr2og3cj4d4534cd6&st=mna7ralc&dl=0',
  },
]

const PhotographyPage = () => (
  <Layout>
    <Content>
      <Title>Photography</Title>
      <BackRow>
        <BackLink />
      </BackRow>

      <Tagline>
        Warm&nbsp;&nbsp;Unique&nbsp;&nbsp;Reliable&nbsp;&nbsp;Easy to Work With
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

      <HeroImageWrapper>
        <StaticImage
          src="../images/photography-hero.jpg"
          alt="Selected photography by Nic Murphy"
          layout="fullWidth"
        />
      </HeroImageWrapper>
    </Content>
  </Layout>
)

export const Head = () => (
  <Seo
    title="Nic Murphy - Photography"
    keywords={seoKeywords}
    description="Nic Murphy - Photography, warm and reliable capturing the beautiful, ethnographic essence in still form"
  />
)

const Content = styled.div`
  ${pageContentStyles}
  padding: 0 ${vwCap(5)};
`

const HeroImageWrapper = styled.div`
  margin: ${vwCap(5)} 0;
`

const PortfolioLabel = styled.h2`
  font-size: ${vwCap(3.5)};
  margin: 0 0 ${vwCap(2)} 0;
`

const CategoryList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const CategoryItem = styled.li`
  font-size: ${vwCap(3)};
  line-height: 1.7;
`

export default PhotographyPage
