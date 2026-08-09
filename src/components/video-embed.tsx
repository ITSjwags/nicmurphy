import React from 'react'
import styled from 'styled-components'

import { vwCap } from '../utils/scale'

type VideoEmbedProps = {
  src?: string
  label?: string
}

const VideoEmbed = ({ src, label }: VideoEmbedProps) => (
  <VideoWrapper>
    {src ? (
      <Video
        src={src}
        width="640"
        height="360"
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
        loading="lazy"
      />
    ) : (
      <Placeholder>{label || 'Video coming soon'}</Placeholder>
    )}
  </VideoWrapper>
)

const VideoWrapper = styled.div`
  height: 0;
  margin-bottom: ${vwCap(3)};
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

const Placeholder = styled.div`
  align-items: center;
  border: 1px dashed #999;
  color: #999;
  display: flex;
  font-size: ${vwCap(2.5)};
  height: 100%;
  justify-content: center;
  left: 0;
  position: absolute;
  text-align: center;
  text-transform: uppercase;
  top: 0;
  width: 100%;
`

export default VideoEmbed
