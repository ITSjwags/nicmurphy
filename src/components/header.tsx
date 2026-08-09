import { Link as GatsbyLink } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import bioData from '../../content/bio.json'
import { pageContentStyles, vwCap } from '../utils/scale'
import BioModal from './bio-modal'
import Link, { linkStyles } from './link'

const { bio } = bioData

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
      <strong>Artistic Director</strong> <Lowercase>at</Lowercase>{' '}
      <RoleAnchor
        href="https://www.instagram.com/thepublicassembly/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Public Assembly Theater Co.
      </RoleAnchor>
      <br />
      <strong>Head of Production</strong> <Lowercase>at</Lowercase>{' '}
      <RoleAnchor
        href="https://misfit.co/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Misfit
      </RoleAnchor>
    </CurrentRoles>

    <Row>
      <div>
        <RowLink
          href="https://www.instagram.com/nharrisonmurphy/"
          target="_blank"
          rel="noopener noreferrer"
        >
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
      <RightColumn>
        <BioModal label="Bio">
          {bio.map((paragraph, index) => (
            <React.Fragment key={paragraph}>
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
        <RowLink href="mailto:nic@nicmurphy.com">Email</RowLink>
      </RightColumn>
    </Row>
  </Container>
)

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
  font-size: ${vwCap(3.3)};
  margin: 0;
  text-align: center;
  text-transform: uppercase;
`

const Genres = styled.p`
  font-size: ${vwCap(2.5)};
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
