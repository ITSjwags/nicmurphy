import React from 'react'
import styled from 'styled-components'

import Header from '../components/header'
import Layout from '../components/layout'
import SEO from '../components/seo'
import seoKeywords from '../data/keywords'

import spiceSrc from '../images/spice-islands.jpg'
import bardoSrc from '../images/BardoFullCover_1.3.png'
import publicSrc from '../images/public-assembly.png'
import everyoneAgreesSrc from '../images/EVERYONE AGREES POSTER WIDE v1.2.jpg'
import inCharacterSrc from '../images/InCharacterPhoto.jpg'

const IndexPage = () => (
  <Layout>
    <SEO
      title="Nic Murphy"
      keywords={seoKeywords}
      description="Nic Murphy - Producer, Multimedia Director"
    />

    <Header />

    <Content>
      <WorkBlock>
        <VideoWrapper>
          <Video
            src="https://player.vimeo.com/video/338476814"
            width="640"
            height="360"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        </VideoWrapper>
        <VideoWrapper>
          <Video
            src="https://player.vimeo.com/video/370975104"
            width="640"
            height="360"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        </VideoWrapper>
        <Link
          href="http://cagesdtla.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          WOOLF AND THE WONDERSHOW PRESENTS: CAGES
        </Link>
        <Description>
          Live Experience, 2019+
          <br />
          Live Director, Stage Manager
        </Description>
        <SemiIndentedRow>
          <LinkSmall
            href="https://www.latimes.com/entertainment-arts/story/2020-02-27/cages-show-los-angeles"
            target="_blank"
            rel="noopener noreferrer"
          >
            LA TIMES REVIEW
          </LinkSmall>
        </SemiIndentedRow>
        <SemiIndentedRow>
          <LinkSmall
            href="https://noproscenium.com/theres-nothing-quite-like-cages-nopro-notes-afac8c17074d"
            target="_blank"
            rel="noopener noreferrer"
          >
            NO PROSCENIUM REVIEW
          </LinkSmall>
        </SemiIndentedRow>
        <SemiIndentedRow>
          <LinkSmall
            href="https://www.haunting.net/cages-review/"
            target="_blank"
            rel="noopener noreferrer"
          >
            HAUNTING REVIEW
          </LinkSmall>
        </SemiIndentedRow>
      </WorkBlock>

      <WorkBlock>
        <Image src={spiceSrc} alt="Spice Islands" />
        <Link
          href="https://spiceislandsfilm.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          SPICE ISLANDS
        </Link>
        <Description>
          Short Film, 2019
          <br />
          Writer, Director, Editor
        </Description>
        <SemiIndentedRow>
          <DescriptionSmall>
            Premiered and Best of Fest at{' '}
            <LinkSmall
              href="https://videoart.net/this-fabulous-fucking-life/"
              target="_blank"
              rel="noopener noreferrer"
            >
              THE VIDEO ART AND EXPERIMENTAL FILM FESTIVAL
            </LinkSmall>{' '}
            NYC November 2019
          </DescriptionSmall>
        </SemiIndentedRow>
        <SemiIndentedRow>
          <DescriptionSmall>
            Digital Premiere on{' '}
            <LinkSmall
              href="https://www.nobudge.com/videos/spice-islands"
              target="_blank"
              rel="noopener noreferrer"
            >
              NOBUDGE.COM
            </LinkSmall>{' '}
            January 8th 2020
          </DescriptionSmall>
        </SemiIndentedRow>
      </WorkBlock>

      <WorkBlock>
        <Image src={inCharacterSrc} alt="CLOAK OF FICTION'S INCHARACTER" />
        <Row>
          <Link
            href="http://cloakoffiction.com/incharacter"
            rel="noopener noreferrer"
            target="_blank"
            smaller
          >
            CLOAK OF FICTION'S INCHARACTER
          </Link>
        </Row>
        <Description>
          TV Show, 2021+
          <br />
          Co-Creator, Film Director, Camera, Editor
        </Description>
      </WorkBlock>

      <WorkBlock>
        <VideoWrapper>
          <Video
            src="https://player.vimeo.com/video/296100637"
            width="640"
            height="360"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        </VideoWrapper>
        <SmallTitle>USUALLY I'M VERY SUPPORTIVE OF DELUSION</SmallTitle>
        <Description>
          Short Film, 2019
          <br />
          Director, Editor
        </Description>
        <SemiIndentedRow>
          <DescriptionSmall>
            Digital Premiere on{' '}
            <LinkSmall
              href="https://www.nobudge.com/videos/usually-im-very-supportive-of-delusion"
              target="_blank"
              rel="noopener noreferrer"
            >
              NOBUDGE.COM
            </LinkSmall>{' '}
            February 18th 2020
          </DescriptionSmall>
        </SemiIndentedRow>
      </WorkBlock>

      <WorkBlock>
        <VideoWrapper>
          <Video
            src="https://player.vimeo.com/video/183558848"
            width="640"
            height="360"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        </VideoWrapper>
        <Title>BEAUTIFUL LOVE</Title>
        <Description>
          Music Documentary, 2017
          <br />
          Director, Camera, Editor
        </Description>
      </WorkBlock>

      <WorkBlock>
        <Image
          src={everyoneAgreesSrc}
          alt="EVERYONE AGREES IT'S ABOUT TO EXPLODE"
        />
        <Row>
          <Link
            href="https://cloakoffiction.com/everyoneagrees"
            rel="noopener noreferrer"
            target="_blank"
          >
            EVERYONE AGREES IT'S ABOUT TO EXPLODE
          </Link>
        </Row>
        <Description>
          Theater Documentary, 2021
          <br />
          Director, Camera, Editor
        </Description>
      </WorkBlock>

      <WorkBlock>
        <VideoWrapper>
          <Video
            src="https://player.vimeo.com/video/363409664"
            width="640"
            height="360"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        </VideoWrapper>
        <Link
          href="https://cycleofmemory.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          CYCLE OF MEMORY
        </Link>
        <Description>
          Feature, Documentary, 2021
          <br />
          Co-Editor, Co-Producer
        </Description>
      </WorkBlock>

      <WorkBlock>
        <Image src={bardoSrc} alt="BARDO ZSA ZSA" />
        <Row>
          <Title>BARDO ZSA ZSA</Title>
          <Link href="Bardo Zsa Zsa First Chapter.pdf">FIRST CHAPTER</Link>
        </Row>
        <Description>
          Novel, 2018
          <br />
          Co-Author
        </Description>
      </WorkBlock>

      <WorkBlock>
        <Image src={publicSrc} alt="PUBLIC ASSEMBLY THEATER COMPANY" />
        <Link href="https://www.publicassembly.us/">
          PUBLIC ASSEMBLY
          <br />
          THEATER COMPANY
        </Link>
        <Description>Founding Member, Photographer</Description>
        <IndentedRow>
          <Subtitle marginBottom="0">
            THE ECO-SLOTH SLEEP SYSTEM BY GAIATECH
          </Subtitle>
          <Row>
            <Description>
              Radio Play, 2020
              <br />
              Writer, Director, Sound Editor
            </Description>
            <AlteredLink
              href="PA Radio 1 - Interstitials Full.mp3"
              target="_blank"
            >
              AUDIO
            </AlteredLink>
          </Row>
          <SemiIndentedRow>
            <DescriptionSmall>
              Three segments from Public Assembly's first ever radio program
              (created during quarantine)
            </DescriptionSmall>
          </SemiIndentedRow>
        </IndentedRow>
        <IndentedRow>
          <Subtitle marginBottom="0">
            A TALE OF TWO FATHERS, WRITTEN WITH MY FATHER
          </Subtitle>
          <Row>
            <Description>
              Play, 2019
              <br />
              Writer, Director
            </Description>
            <AlteredLink href="A Tale of Two Fathers, Written With My Father.pdf">
              SCRIPT
            </AlteredLink>
          </Row>
          <SemiIndentedRow>
            <DescriptionSmall>
              Remounted by popular demand at Public Assembly's first ever Encore
              Show, December 13th 2019
            </DescriptionSmall>
          </SemiIndentedRow>
        </IndentedRow>
        <IndentedRow>
          <Subtitle marginBottom="0">LOIS LANE AND THE MEN OF STEEL</Subtitle>
          <Row>
            <Description>
              Play, 2018
              <br />
              Writer, Director
            </Description>
            <Link href="LOIS LANE and the Men of Steel.pdf">SCRIPT</Link>
          </Row>
        </IndentedRow>
        <IndentedRow>
          <Subtitle>
            THE DAY AFTER TOMORROW
            <br />
            STARRING DENNIS QUAID
          </Subtitle>
          <Description>
            Play, 2017
            <br />
            Writer, Director
          </Description>
        </IndentedRow>
        <IndentedRow>
          <Subtitle>THE BODHI TREE</Subtitle>
          <Description>
            Play, 2017
            <br />
            Writer, Director
          </Description>
        </IndentedRow>
      </WorkBlock>
    </Content>
  </Layout>
)

const Content = styled.div`
  padding: 0 5vw;
`

const WorkBlock = styled.div`
  margin-bottom: 5vw;
`

const VideoWrapper = styled.div`
  height: 0;
  margin-bottom: 3vw;
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
`

const Video = styled.iframe`
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`

const Image = styled.img`
  display: block;
  margin-bottom: 3vw;
  width: 100%;
`

const Link = styled.a`
  color: var(--blue);
  cursor: pointer;
  display: inline-block;
  font-size: ${(props) => (props.smaller ? '4.6vw' : '4.8vw')};
  margin-bottom: 1.5vw;
`

const LinkSmall = styled.a`
  color: var(--blue);
  cursor: pointer;
  font-size: 3vw;
`

const AlteredLink = styled(Link)`
  position: relative;
  top: -5vw;
`

const Title = styled.h2`
  font-size: 4.8vw;
  margin: 0 0 ${({ marginBottom }) => marginBottom || '1.5vw'} 0;
`

const SmallTitle = styled.h2`
  font-size: 4.7vw;
  margin: 0 0 ${({ marginBottom }) => marginBottom || '1.5vw'} 0;
`

const Subtitle = styled.h3`
  font-size: 4.4vw;
  margin: 0 0 ${({ marginBottom }) => marginBottom || '1vw'} 0;
`

const Description = styled.p`
  font-size: 3.6vw;
  margin: 0;
`

const DescriptionSmall = styled.p`
  font-size: 3vw;
  margin: 0;
`

const IndentedRow = styled.div`
  padding: 5vw 2.5vw 0 2.5vw;
`

const SemiIndentedRow = styled.div`
  padding: 1.5vw 5vw 0;
`

const Row = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
`

export default IndexPage
