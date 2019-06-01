import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { Normalize } from 'styled-normalize'
import TrumpMediaEval from '../fonts/trumpmediaeval-bold-webfont.woff'
import TrumpMediaEval2 from '../fonts/trumpmediaeval-bold-webfont.woff2'
import TrumpMediaEvalItalic from '../fonts/trumpmediaeval-bolditalic-webfont.woff'
import TrumpMediaEvalItalic2 from '../fonts/trumpmediaeval-bolditalic-webfont.woff2'

const Styles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  @font-face {
    font-family: 'trump_mediaevalbold';
    src: url(${TrumpMediaEval2}) format('woff2'),
          url(${TrumpMediaEval}) format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'trump_mediaevalbold_italic';
    src: url(${TrumpMediaEvalItalic2}) format('woff2'),
          url(${TrumpMediaEvalItalic}) format('woff');
    font-weight: normal;
    font-style: normal;
  }

  body {
    background-color: #fff;
    color: #000;
    font-family: 'trump_mediaevalbold';
    font-weight: bold;
  }
`

const GlobalStyles = () => (
  <>
    <Normalize />
    <Styles />
  </>
)

export default GlobalStyles
