import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import seoKeywords from '../data/keywords'
import spiceSrc from '../images/spice-islands.png'
import bardoSrc from '../images/BardoFullCover_1.3.png'
import publicSrc from '../images/public-assembly.png'
import ghostSrc from '../images/ghost-commander.png'

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={seoKeywords}
      description="Nic Murphy - Writer, Multimedia Director"
    />

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
        <Link
          href="http://cagesdtla.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          WOOLF AND THE WONDERSHOW PRESENTS: CAGES
        </Link>
        <Description>
          Live Experience, 2019
          <br />
          Theatrical Director
        </Description>
      </WorkBlock>

      <WorkBlock>
        <Image src={spiceSrc} alt="Spice Islands" />
        <Link
          href="https://spice-islands.netlify.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          SPICE ISLANDS
        </Link>
        <Description>
          Short Film, 2019
          <br />
          Writer, Director
        </Description>
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
          Director, Camera
        </Description>
      </WorkBlock>

      <WorkBlock>
        <VideoWrapper>
          <Video
            src="https://player.vimeo.com/video/210398140"
            width="640"
            height="360"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        </VideoWrapper>
        <Title>WAVES</Title>
        <Description>
          Music Video, 2017
          <br />
          Director, Camera
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
          <Subtitle marginBottom="0">LOIS LANE AND THE MEN OF STEEL</Subtitle>
          <Row>
            <Description>Writer, Director</Description>
            <Link href="LOIS LANE and the Men of Steel.pdf">SCRIPT</Link>
          </Row>
        </IndentedRow>
        <IndentedRow>
          <Subtitle>
            THE DAY AFTER TOMORROW
            <br />
            STARRING DENNIS QUAID
          </Subtitle>
          <Description>Writer, Director</Description>
        </IndentedRow>
        <IndentedRow>
          <Subtitle>THE BODHI TREE</Subtitle>
          <Description>Writer, Director</Description>
        </IndentedRow>
      </WorkBlock>

      <WorkBlock>
        <Image src={ghostSrc} alt="GHOST COMMANDER" />
        <Link
          href="https://www.youtube.com/watch?v=SDeuJSRg1sE"
          target="_blank"
          rel="noopener noreferrer"
        >
          GHOST COMMANDER
        </Link>
        <Description>
          Narrative Livestream, 2018
          <br />
          Assistant Director (dir. Lauren Liedel)
        </Description>
      </WorkBlock>

      <WorkBlock>
        <VideoWrapper>
          <Video
            src="https://player.vimeo.com/video/249440271"
            width="640"
            height="360"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        </VideoWrapper>
        <Subtitle>NEW GUARD THEATER COMPANY'S TARTUFFE</Subtitle>
        <Description>
          Proscenium Theater, 2017
          <br />
          Assistant Director (dir. Satya Bhabha)
        </Description>
      </WorkBlock>

      <WorkBlock>
        <VideoWrapper>
          <Video
            src="https://www.youtube.com/embed/Y6ueCFLkJdA"
            width="640"
            height="360"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        </VideoWrapper>
        <Title>RINGO - ATMOSPHERE</Title>
        <Description>
          Music Video, 2016
          <br />
          Assistant Director (dir. Ryan KRON Thompson)
        </Description>
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
  color: #0000ff;
  cursor: pointer;
  display: inline-block;
  font-size: 4.8vw;
  margin-bottom: 1.5vw;
`

const Title = styled.h2`
  font-size: 4.8vw;
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

const IndentedRow = styled.div`
  padding: 5vw 2.5vw 0 2.5vw;
`

const Row = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
`

export default IndexPage
