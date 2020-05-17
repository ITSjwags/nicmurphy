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
      <Title>What I Do:</Title>
      <Paragraph>
        Develop and edit structure, content and logistics of{' '}
        <i>
          feature film scripts, TV scripts, short film scripts, art books and
          novels
        </i>
      </Paragraph>
      <Paragraph>
        Produce and edit structure, content and logistics of realized{' '}
        <i>feature films</i> and <i>short films</i>, both documentary and
        narrative
      </Paragraph>
      <Paragraph>
        Strategize and manage <i>creative and personal brands</i> (with
        realistic accountability and organization)
      </Paragraph>
      <Paragraph>
        Produce <i>photo, video, social media, copy</i> and <i>design</i>{' '}
        content for creative and personal brands
      </Paragraph>
      <Paragraph>
        Develop, produce, and audio-edit <i>podcasts</i>
      </Paragraph>
      <Paragraph>
        Consult on <i>apps</i> in development
      </Paragraph>
      <Paragraph>
        Develop structure, content and logistics of{' '}
        <i>live theater, streaming,</i> and <i>immersive events</i>
      </Paragraph>
      <Paragraph>
        <i>Cast, direct</i> and maintain actors
      </Paragraph>
      <Paragraph>
        Lead, manage and maintain <i>large creative departments</i> (creative,
        tech, props, wardrobe, hair makeup, music, stage management, front of
        house)
      </Paragraph>

      <Title>Where I've Done It:</Title>
      <ParagraphLoose>
        <i>Film Scripts</i>
        <br />
        DEEPER CREATURES - Feature Film Script, Written by Sonny Valicenti
        <br />
        LIBERTY - Feature Film Script, Written by Lucas Murphy
        <br />
        OF ROYAL DESCENT - Feature Film Script, Written by Lucas Murphy
        <br />
        ANTIETAM - Feature Film Script, Written by Matt Lacombe
        <br />
        DEADBOLT - Feature Film Scripts, Written by Matt Lacombe
        <br />
        CHICKS DIG SCARS - Feature Film Script, Written by Joseph Sacks
        <br />
        ESCAPE - Feature Film Script, Written by Sam Williams
      </ParagraphLoose>
      <ParagraphLoose>
        DENOUEMENT - 1hr Pilot Script, Written by Lucas Murphy
        <br />
        SYNTHESIZER - 1hr Pilot Script, Written by Lucas Murphy
        <br />
        BARDO ZSA ZSA - 1hr Pilot Script, Written by CB Murphy and myself
        <br />
        PSYCHIC SCHOOL - 30m Pilot Script, Written by Jordana Lilly
      </ParagraphLoose>
      <ParagraphLoose>
        DICEY WANG - Short Film Script, Written by Kathy Meng
        <br />
        A LETTER - Short Film Script, Written by Greg Berman
        <br />
        PICTURES OF ME - Short Film Script, Written by Greg Berman
        <br />
        LUCID A - Short Film Script, Written by Greg Berman
      </ParagraphLoose>

      <ParagraphLoose>
        <i>Produced Features</i>
        <br />
        NOW AND AGAIN - Feature Documentary, Dir. Alex Leff
      </ParagraphLoose>
      <ParagraphLoose>
        <i>Produced Short Films</i>
        <br />
        SHE USED TO LAUGH - Short Film, Dir. Greg Berman
        <br />
        CAPTAIN PHENOMENAL - Short Film, Dir. Jamie Lewis
        <br />
        THE MASK IN OUR HANDS - Short Film, Dir. Joseph Sacks
        <br />
        MY BOYFRIEND'S DAUGHTER - Short Film, Dir. Kathy Meng
        <br />
        NANNY - Short Film, Dir. Kathy Meng
        <br />
        SPIRITS - Short Film, Dir. Robert Maisano
        <br />
        IMPERMANENT COLLECTION - Short Film, Dir. Stefanie Toftey
        <br />
        DAKOTA - Short Documentary, Dir. Derek Spencer
      </ParagraphLoose>
      <ParagraphLoose>
        <i>Live Experiences</i>
        <br />
        CAGES - Live Immersive Musical Experience, Dir. Ben Romans, CJ Barans,
        <br />
        <Right>David Richardson, and myself</Right>
        <br />
        GHOST COMMANDER - Streaming Interactive Experience, Dir. Lauren Liedel
        <br />
        ONE BRIEF MOMENT OF JOY - Live Interactive Experience, Dir. Lauren
        Liedel <br />
        BAR OF DREAMS - Live Interactive Experience, Dir. Jon Pedigo and Alex
        Leff
        <br />
        FIGMENT - Live Interactive Experience, Dir. Joanna Harmon
        <br />
        NARCISSUS - Live Immersive Dance Experience , Dir. Sophia Stoller
        <br />
        THE SHOW ABOUT YOU - Live Comedy Experience, Dir. Greg Berman
      </ParagraphLoose>
      <ParagraphLoose>
        <i>Novels</i>
        <br />
        BARDO ZSA ZSA - Novel, Written by CB Murphy and myself
        <br />
        BARDO JANE JANE - Novel, Written by CB Murphy
        <br />
        BARDO III - Novel, Written by CB Murphy
        <br />
        THE NINE LOVES OF KAT WERNER - Novel, Written by Lucas Murphy
      </ParagraphLoose>
      <ParagraphLoose>
        <i>Art Books</i>
        <br />
        AND IN IT'S PLACE ANOTHER - Photography Book, By Kovi Konowieksi
        <br />
        EVERYDAY ALCHEMY - Visual Art Book, By Zoographico Press
      </ParagraphLoose>
      <ParagraphLoose>
        <i>Brands</i>
        <br />
        CURIOUS AUDIO - Podcast Brand, Owned by Ari Andersen
        <br />
        LIFETIME VIRTUAL COACHING - Lifestyle Service, Owned by Aaron Briggs
        <br />
        CURIOUS JEWELER - Esty Brand, Owned by Amanda Kaschak
        <br />
        LIVE ACTION SET - Interactive Theater Company, Owned by Joanna Harmon
        <Right>and Noah Bremer</Right>
        <br />
        NEW GUARD - Theater Company, Owned by Matt Little and Nick Thurston
        <br />
        PUBLIC ASSEMBLY - Theater Company, Owned by Clara Aranovhich,
        <Right>Satya Bhbha, Alex Mirecki, and Lindsey Garrett</Right>
        <br />
        ZOOGRAPHICO PRESS - Creative Brand, Owned by CB Murphy
      </ParagraphLoose>
      <ParagraphLoose>
        BRAD CULVER ACTOR - Personal Brand
        <br />
        JESSICA GARRISON WRITER - Personal Brand
      </ParagraphLoose>
      <ParagraphLoose>
        <i>Apps</i>
        <br />
        PARTNER PLAY - Audio Experience App, Owned by Jonathan Wegener
        <br />
        VENTFUL - Calendar App, Owned by Peter Simpson
      </ParagraphLoose>
    </Content>
  </Layout>
)

const Content = styled.div`
  padding: 0 5vw;
`

const Title = styled.h2`
  font-size: 7vw;
  margin: 7vw 0 ${({ marginBottom }) => marginBottom || '0'} 0;
  text-decoration: underline;
`

const Paragraph = styled.p`
  font-size: 2.4vw;
  line-height: 1.7;
  margin: 0 0 4vw 0;
`

const ParagraphLoose = styled(Paragraph)`
  line-height: 2;
`

const Right = styled.span`
  display: inline-block;
  text-align: right;
  width: 100%;
`

export default ConsultingPage
