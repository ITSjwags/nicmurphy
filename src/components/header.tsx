import { Link as GatsbyLink, graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { pageContentStyles, vwCap } from '../utils/scale'
import { wideSpaced } from '../utils/text'
import BioModal from './bio-modal'
import Link, { linkStyles } from './link'

type HomePageQuery = {
  datoCmsHomePage: {
    headline: string
    roleTitle: string
    genres: string
    taglineWords: string
    instagramUrl: string | null
    vimeoUrl: string | null
    email: string
    bio: string
    currentRoles: {
      role: string
      organization: string
      url: string | null
    }[]
  }
}

const Header = () => {
  const data = useStaticQuery<HomePageQuery>(graphql`
    query HomePage {
      datoCmsHomePage {
        headline
        roleTitle
        genres
        taglineWords
        instagramUrl
        vimeoUrl
        email
        bio
        currentRoles {
          ... on DatoCmsCurrentRoleBlock {
            role
            organization
            url
          }
        }
      }
    }
  `)
  const homePage = data.datoCmsHomePage
  const bio = homePage.bio.split('\n\n')

  return (
    <Container>
      <Headline>{homePage.headline}</Headline>
      <RoleLink to="/work">{homePage.roleTitle}</RoleLink>
      <Genres>{homePage.genres}</Genres>
      <Tagline>{wideSpaced(homePage.taglineWords, 5)}</Tagline>

      <Row>
        <NavLink to="/photography">Photography</NavLink>
        <NavLink to="/videography">Videography</NavLink>
      </Row>

      <CurrentRoles>
        {homePage.currentRoles.map((role, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: roles come from one CMS field per render, never reordered client-side
          <React.Fragment key={index}>
            {index > 0 && <br />}
            <strong>{role.role}</strong> <Lowercase>at</Lowercase>{' '}
            {role.url ? (
              <RoleAnchor
                href={role.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {role.organization}
              </RoleAnchor>
            ) : (
              role.organization
            )}
          </React.Fragment>
        ))}
      </CurrentRoles>

      <Row>
        <div>
          {homePage.instagramUrl && (
            <>
              <RowLink
                href={homePage.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </RowLink>
              <br />
            </>
          )}
          {homePage.vimeoUrl && (
            <RowLink
              href={homePage.vimeoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Vimeo
            </RowLink>
          )}
        </div>
        <RightColumn>
          <BioModal label="Bio">
            {bio.map((paragraph, index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: paragraphs come from one deterministic split of a single CMS field, never reordered
              <React.Fragment key={index}>
                {index > 0 && (
                  <>
                    <br />
                    <br />
                  </>
                )}
                {paragraph}
              </React.Fragment>
            ))}
          </BioModal>
          <br />
          <RowLink href={`mailto:${homePage.email}`}>Email</RowLink>
        </RightColumn>
      </Row>
    </Container>
  )
}

const Container = styled.header`
  ${pageContentStyles}
  padding: ${vwCap(2)} ${vwCap(2)};
`

const Headline = styled.h1`
  font-size: ${vwCap(14)};
  line-height: 1;
  margin: 0;
  margin-bottom: ${vwCap(2)};
  text-align: center;
  text-transform: uppercase;
`

const RoleLink = styled(GatsbyLink)`
  ${linkStyles}
  display: block;
  font-size: ${vwCap(3.2)};
  margin: 0;
  text-align: center;
  text-transform: uppercase;
`

const Genres = styled.p`
  font-size: ${vwCap(2.3)};
  font-weight: bold;
  margin: ${vwCap(1)} 0 0 0;
  text-align: center;
`

const Tagline = styled.p`
  font-size: ${vwCap(2.2)};
  font-style: italic;
  margin: ${vwCap(1)} 0 0 0;
  text-align: center;
  text-transform: uppercase;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${vwCap(6)};
`

const NavLink = styled(GatsbyLink)`
  ${linkStyles}
  display: inline-block;
  font-size: ${vwCap(4)};
  text-transform: uppercase;
`

const CurrentRoles = styled.p`
  color: var(--red);
  font-size: ${vwCap(3.2)};
  margin: ${vwCap(6)} 0 0 0;
  text-align: center;
  text-transform: uppercase;
`

const Lowercase = styled.span`
  text-transform: lowercase;
`

const RoleAnchor = styled(Link)`
  color: var(--red);
`

const RightColumn = styled.div`
  text-align: right;
`

const RowLink = styled(Link)`
  background: transparent;
  border: 0;
  display: inline-block;
  font-size: ${vwCap(4)};
  margin-bottom: 10px;
  padding: 0;
  text-transform: uppercase;
`

export default Header
