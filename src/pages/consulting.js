import React from 'react'
import styled from 'styled-components'

import HeaderConsulting from '../components/header-consulting'
import Layout from '../components/layout'
import SEO from '../components/seo'
import seoKeywords from '../data/keywords'

const ConsultingPage = () => (
  <Layout>
    <SEO
      title="Nic Murphy - Consulting"
      keywords={seoKeywords}
      description="Nic Murphy - Writer, Multimedia Director"
    />

    <HeaderConsulting />

    <Content>
      <Title>WHAT I DO</Title>
      <List>
        <ListItem>
          Develop and edit{' '}
          <Link href="#where">scripts, art books, and novels</Link>
        </ListItem>
        <ListItem>
          Produce and edit <Link href="#films">films</Link> of all lengths, both
          documentary and narrative
        </ListItem>
        <ListItem>
          Strategize and manage <Link href="#brands">brands</Link>
        </ListItem>
        <ListItem>
          Produce content:{' '}
          <Link
            href="https://instagram.com/nharrisonmurphy"
            target="_blank"
            rel="noopener noreferrer"
          >
            photo, video, social media, headshots, copy, design
          </Link>
        </ListItem>
        <ListItem>
          Develop, produce, and audio-edit{' '}
          <Link
            href="http://curiousaud.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            podcasts
          </Link>
        </ListItem>
        <ListItem>
          Develop{' '}
          <Link
            href="https://docs.google.com/presentation/d/1juUj6jPxAnqQ638P2ngplQ0IGK_T0owmfGtB-NVux7U/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            pitches and pitch decks
          </Link>
        </ListItem>
        <ListItem>
          Consult on <Link href="#apps">apps</Link>
        </ListItem>
        <ListItem>
          Develop and produce{' '}
          <Link href="#live">
            live theater, streaming, and immersive events
          </Link>
        </ListItem>
        <ListItem>
          Cast, direct and maintain{' '}
          <Link href="Actors.png" target="blank" rel="noopener noreferrer">
            actors
          </Link>
        </ListItem>
        <ListItem>
          Lead{' '}
          <Link
            href="Lead Large Teams.png"
            target="blank"
            rel="noopener noreferrer"
          >
            large creative departments
          </Link>{' '}
          (creative, tech, props, wardrobe, hair makeup, music, stage
          management, front of house)
        </ListItem>
      </List>

      <Title id="where">WHERE I DO IT (selected)</Title>
      <Paragraph>Film Scripts</Paragraph>
      <ParagraphLoose>
        DEEPER CREATURES&nbsp;&nbsp;-&nbsp;&nbsp;Feature Film Script, Written by{' '}
        <Link
          href="https://www.imdb.com/name/nm3171185/"
          target="blank"
          rel="noopener noreferrer"
        >
          Sonny Valicenti
        </Link>
        <br />
        OF ROYAL DESCENT&nbsp;&nbsp;-&nbsp;&nbsp;Feature Film Script, Written by
        Lucas Murphy
        <br />
        <span>
          <Link
            href="https://austinfilmfestival.com/submit/screenplay-and-teleplay-submissions-2/2019-script-competition-semifinalists-second-rounders-2/"
            target="blank"
            rel="noopener noreferrer"
          >
            Top 20% @ Austin Film Fest 2019
          </Link>
        </span>
        <br />
        MAYFAIR&nbsp;&nbsp;-&nbsp;&nbsp;1hr Pilot Script, Written by{' '}
        <Link
          href="https://www.imdb.com/name/nm8775807/"
          target="blank"
          rel="noopener noreferrer"
        >
          Allie Romano
        </Link>
        <br />
        THE UNBOUND&nbsp;&nbsp;-&nbsp;&nbsp;Feature Film Script, Written by Sam
        Williams
        <br />
        <span>
          <Link
            href="https://deadline.com/2021/12/the-black-list-2021-screenplays-list-scripts-1234890009/"
            target="blank"
            rel="noopener noreferrer"
          >
            Received a 7 on the Black List, in development
          </Link>
        </span>
        <br />
        <Link
          href="https://www.dropbox.com/s/s45a4dtmqoy0nds/Synth1.mp4?dl=0"
          target="blank"
          rel="noopener noreferrer"
        >
          SYNTHESIZER
        </Link>
        &nbsp;&nbsp;-&nbsp;&nbsp;1hr Pilot Script, Written by Lucas Murphy
        <br />
        <Link
          href="https://www.dropbox.com/s/jqlourz82y31nns/CabanaBoy1.mp4?dl=0"
          target="blank"
          rel="noopener noreferrer"
        >
          CABANA BOY
        </Link>
        &nbsp;&nbsp;-&nbsp;&nbsp;Feature Film Script, Written by Joseph Sacks
        <br />
        <Link
          href="https://www.dropbox.com/s/sztxcujjba1to6z/AfterHours1.mp4?dl=0"
          target="blank"
          rel="noopener noreferrer"
        >
          AFTERHOURS
        </Link>
        &nbsp;&nbsp;-&nbsp;&nbsp;Short Film Script, Written by Emily Faris
        <br />
        <Link
          href="https://www.dropbox.com/s/o6p0ffqjpgyo6mo/PeriodShit1.mp4?dl=0"
          target="blank"
          rel="noopener noreferrer"
        >
          PERIOD SHIT
        </Link>
        &nbsp;&nbsp;-&nbsp;&nbsp;Short Film Script, Written by Michaela Fraboni
        <br />
        <Link href="Antietam.jpg" target="blank" rel="noopener noreferrer">
          ANTIETAM
        </Link>
        &nbsp;&nbsp;-&nbsp;&nbsp;Feature Film Script, Written by Matt Lacombe
        <br />
        SYMPOSIUM&nbsp;&nbsp;-&nbsp;&nbsp;Short Film Script, Written by{' '}
        <Link
          href="https://www.imdb.com/name/nm2346101/"
          target="blank"
          rel="noopener noreferrer"
        >
          {' '}
          Erica Dasher
        </Link>
      </ParagraphLoose>

      <Paragraph marginTop id="films">
        Produced Films
      </Paragraph>
      <ParagraphLoose>
        <Link
          href="https://www.gregberman.com/she-used-to-laugh"
          target="blank"
          rel="noopener noreferrer"
        >
          SHE USED TO LAUGH
        </Link>
        &nbsp;&nbsp;-&nbsp;&nbsp;Short Film, Dir. Greg Berman
        <br />
        CAPTAIN PHENOMENAL&nbsp;&nbsp;-&nbsp;&nbsp;Short Film, Dir.{' '}
        <Link
          href="https://www.imdb.com/name/nm5909671/"
          target="blank"
          rel="noopener noreferrer"
        >
          Jamie Lewis
        </Link>
        <br />
        <Link
          href="https://vimeo.com/567328530"
          target="blank"
          rel="noopener noreferrer"
        >
          THE MASK IN OUR HANDS
        </Link>
        &nbsp;&nbsp;-&nbsp;&nbsp;Short Film, Dir. Joseph Sacks
        <br />
        <Link
          href="https://www.kickstarter.com/projects/jordanalilly/psychic-school-finishing-funds"
          target="blank"
          rel="noopener noreferrer"
        >
          PSYCHIC SCHOOL
        </Link>
        &nbsp;&nbsp;-&nbsp;&nbsp;30m Pilot Script, Written by Jordana Lilly
        <br />
        <Link
          href="https://fromtheintercom.com/my-boyfriends-daughter-kathy-meng-review/"
          target="blank"
          rel="noopener noreferrer"
        >
          MY BOYFRIEND'S DAUGHTER
        </Link>
        &nbsp;&nbsp;-&nbsp;&nbsp;Short Film, Dir. Kathy Meng
        <br />
        <Link
          href="https://vimeo.com/192295707"
          target="blank"
          rel="noopener noreferrer"
        >
          NANNY
        </Link>
        &nbsp;&nbsp;-&nbsp;&nbsp;Short Film, Dir. Kathy Meng
        <br />
        <Link
          href="https://www.robertmaisano.com/spirits/"
          target="blank"
          rel="noopener noreferrer"
        >
          SPIRITS
        </Link>
        &nbsp;&nbsp;-&nbsp;&nbsp;Short Film, Dir. Robert Maisano
        <br />
        <Link
          href="https://www.imdb.com/title/tt15514116/"
          target="blank"
          rel="noopener noreferrer"
        >
          ELITE MATCH
        </Link>
        &nbsp;&nbsp;-&nbsp;&nbsp;Short Film, Dir. by Kathy Meng
        <br />
        <Link href="LARPERS.pdf" target="blank" rel="noopener noreferrer">
          LARPERS
        </Link>
        &nbsp;&nbsp;-&nbsp;&nbsp;Spec Commercial, Dir. by Jessica Garrison
      </ParagraphLoose>

      <Paragraph marginTop id="live">
        Live Experiences
      </Paragraph>
      <ParagraphLoose>
        <Link
          href="https://www.youtube.com/watch?v=SDeuJSRg1sE"
          target="blank"
          rel="noopener noreferrer"
        >
          GHOST COMMANDER
        </Link>
        &nbsp;&nbsp;-&nbsp;&nbsp;Streaming Interactive Experience, Dir. Lauren
        Liedel
        <br />
        <Link
          href="https://noproscenium.com/the-joy-of-waking-up-bar-of-dreams-los-angeles-review-ff4fc8637fa9"
          target="blank"
          rel="noopener noreferrer"
        >
          BAR OF DREAMS
        </Link>
        &nbsp;&nbsp;-&nbsp;&nbsp;Live Interactive Experience, Dir. Jon Pedigo
        and Alex Leff
        <br />
        <Link
          href="https://humannatureodyssey.ticketleap.com/human-nature-odyssey-part-1/"
          target="blank"
          rel="noopener noreferrer"
        >
          HUMAN NATURE ODYSSEY
        </Link>
        &nbsp;&nbsp;-&nbsp;&nbsp;Live Interactive Experience, Dir. Alex Leff
      </ParagraphLoose>

      <Paragraph marginTop>Art Books</Paragraph>
      <ParagraphLoose>
        <Link
          href="https://deadbeatclubpress.com/products/kovi-konowiecki-and-in-its-place-another"
          target="blank"
          rel="noopener noreferrer"
        >
          AND IN IT'S PLACE ANOTHER
        </Link>
        &nbsp;&nbsp;-&nbsp;&nbsp;Photography Book, By Kovi Konowieksi
      </ParagraphLoose>

      <Paragraph marginTop indented id="brands">
        Brands
      </Paragraph>
      <ParagraphLoose>
        <Link
          href="http://Curiousaud.io"
          target="blank"
          rel="noopener noreferrer"
        >
          CURIOUS AUDIO
        </Link>
        &nbsp;&nbsp;-&nbsp;&nbsp;Podcast Brand, Owned by Ari Andersen
        <br />
        <Link
          href="https://www.etsy.com/shop/TheCuriousJewelerCo"
          target="blank"
          rel="noopener noreferrer"
        >
          CURIOUS JEWELER
        </Link>
        &nbsp;&nbsp;-&nbsp;&nbsp;Esty Brand, Owned by Amanda Kaschak
        <br />
        <Link
          href="https://en.wikipedia.org/wiki/Live_Action_Set"
          target="blank"
          rel="noopener noreferrer"
        >
          LIVE ACTION SET
        </Link>
        &nbsp;&nbsp;-&nbsp;&nbsp;Interactive Theater Company, Owned by Joanna
        Harmon and Noah Bremer
        <br />
        <Link
          href="http://www.newguardla.org/"
          target="blank"
          rel="noopener noreferrer"
        >
          NEW GUARD
        </Link>
        &nbsp;&nbsp;-&nbsp;&nbsp;Theater Company, Owned by Matt Little and Nick
        Thurston
        <br />
        <Link
          href="https://www.publicassembly.us/"
          target="blank"
          rel="noopener noreferrer"
        >
          PUBLIC ASSEMBLY
        </Link>
        &nbsp;&nbsp;-&nbsp;&nbsp;Theater Company, Owned by Clara Aranovich,
        Satya Bhbha, Alex Mirecki, and Lindsey Garrett
        <br />
        <Link
          href="http://cbmurphy.net"
          target="blank"
          rel="noopener noreferrer"
        >
          ZOOGRAPHICO PRESS
        </Link>
        &nbsp;&nbsp;-&nbsp;&nbsp;Creative Brand, Owned by CB Murphy
        <br />
        <Link
          href="https://www.hollywoodreporter.com/tv/tv-news/ed-helms-launches-production-company-629239/"
          target="blank"
          rel="noopener noreferrer"
        >
          PACIFIC ELECTRIC PICTURE COMPANY
        </Link>
        &nbsp;&nbsp;-&nbsp;&nbsp;Production Company, Owned by{' '}
        <Link
          href="https://en.wikipedia.org/wiki/Ed_Helms"
          target="blank"
          rel="noopener noreferrer"
        >
          Ed Helms
        </Link>
        <br />
        <Link
          href="https://www.gb-dm.com/"
          target="blank"
          rel="noopener noreferrer"
        >
          GOD AND BEAUTY DIGITAL MANAGEMENT
        </Link>
        &nbsp;&nbsp;-&nbsp;&nbsp;Influencer Talent Agency, Owned by Kyle
        Hjelmeseth
      </ParagraphLoose>

      <Paragraph marginTop id="apps">
        Apps
      </Paragraph>
      <ParagraphLoose>
        <Link
          href="https://www.pairplayapp.com/about"
          target="blank"
          rel="noopener noreferrer"
        >
          PAIRPLAY
        </Link>
        &nbsp;&nbsp;-&nbsp;&nbsp;Audio Experience App, Owned by Jonathan Wegener
        <br />
        VENTFUL&nbsp;&nbsp;-&nbsp;&nbsp;Calendar App, Owned by{' '}
        <Link
          href="https://www.linkedin.com/in/petertsimpson"
          target="blank"
          rel="noopener noreferrer"
        >
          Peter Simpson
        </Link>
        <br />
        <br />
      </ParagraphLoose>
    </Content>
  </Layout>
)

const Content = styled.div`
  padding: 0 4vw;
`

const Title = styled.h2`
  font-size: 3.5vw;
  margin: 5vw 0 0 0;
`

const Paragraph = styled.p`
  font-size: 2.5vw;
  line-height: 1.7;
  margin-top: ${({ marginTop }) => (marginTop ? '6vw' : 0)};
  margin-left: ${({ indented }) => (indented ? '6vw' : 0)};

  > span {
    color: var(--blue);
  }
`

const List = styled.ul`
  padding-left: 6vw;
`

const ListItem = styled.li`
  font-size: 2.5vw;
  line-height: 1.7;

  > span {
    color: var(--blue);
  }
`

const Link = styled.a`
  background: transparent;
  border: 0;
  color: var(--blue);
  cursor: pointer;
  display: inline-block;
  font-size: 2.5vw;
  padding: 0;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`

const ParagraphLoose = styled(Paragraph)`
  line-height: 2;
  margin: 2.5vw 0 0 6.5vw;

  > span {
    margin-left: 8vw;
  }
`

export default ConsultingPage
