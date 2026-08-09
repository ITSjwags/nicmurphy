import { Link as GatsbyLink } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { pageContentStyles, vwCap } from '../utils/scale'
import BioModal from './bio-modal'
import Link, { linkStyles } from './link'

const Header = () => (
  <Container>
    <Headline>Nic Murphy</Headline>
    <RoleLink to="/work">
      Multimedia Director, Editor, Producer, Writer
    </RoleLink>
    <Genres>
      Theater, Film, Photos, Documentary, Podcast, Live Events, Immersive
      Activations
    </Genres>
    <Tagline>
      Leadership&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Creativity&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Organization&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Execution&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Enthusiasm
    </Tagline>

    <Row>
      <NavLink to="/photography">Photography</NavLink>
      <NavLink to="/videography">Videography</NavLink>
    </Row>

    <CurrentRoles>
      <strong>Artistic Director</strong> at{' '}
      <Link
        href="https://www.instagram.com/thepublicassembly/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Public Assembly Theater Co.
      </Link>
      <br />
      <strong>Head of Production</strong> at{' '}
      <Link href="https://misfit.co/" target="_blank" rel="noopener noreferrer">
        Misfit
      </Link>
    </CurrentRoles>

    <Row>
      <div>
        <RowLink href="https://www.instagram.com/nharrisonmurphy/">
          Instagram
        </RowLink>
        <br />
        <RowLink
          href="https://vimeo.com/nicmurphy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vimeo
        </RowLink>
      </div>
      <div>
        <BioModal label="Bio">
          I am based in Los Angeles, where I've spent the last 9 years full time
          directing, producing, writing, editing, podcasting, taking photos, and
          creative consulting.
          <br />
          <br />
          In late 2022, I joined Misfit as Head of Production (Film, Theater,
          Commerce) and as of 2026, I am the Artistic Director of Public
          Assembly Theater Company.
          <br />
          <br />I believe in leading large & complicated teams with honesty,
          organization, enthusiasm, and creativity.
        </BioModal>
        <br />
        <RowLink href="mailto:nic@nicmurphy.com">nic@nicmurphy.com</RowLink>
      </div>
    </Row>
  </Container>
)

const Container = styled.header`
  ${pageContentStyles}
  padding: ${vwCap(2)} ${vwCap(4)};
`

const Headline = styled.h1`
  font-size: ${vwCap(14)};
  line-height: 1;
  margin: 0;
  text-align: center;
  text-transform: uppercase;
`

const RoleLink = styled(GatsbyLink)`
  ${linkStyles}
  display: block;
  font-size: ${vwCap(4)};
  margin: 0;
  text-align: center;
`

const Genres = styled.p`
  font-size: ${vwCap(2.9)};
  font-weight: bold;
  margin: ${vwCap(1)} 0 0 0;
  text-align: center;
`

const Tagline = styled.p`
  font-size: ${vwCap(2.9)};
  font-style: italic;
  margin: 3px 0 0 0;
  text-align: center;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${vwCap(5)};
`

const NavLink = styled(GatsbyLink)`
  ${linkStyles}
  display: inline-block;
  font-size: ${vwCap(4)};
`

const CurrentRoles = styled.p`
  font-size: ${vwCap(2.5)};
  margin: ${vwCap(3)} 0 0 0;
  text-align: center;
`

const RowLink = styled(Link)`
  background: transparent;
  border: 0;
  display: inline-block;
  font-size: ${vwCap(4)};
  margin-bottom: 10px;
  padding: 0;
`

export default Header
