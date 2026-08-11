import type { GatsbyConfig } from 'gatsby'

require('dotenv').config()

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: 'https://nicmurphy.com',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sharp',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-source-datocms',
      options: {
        apiToken: process.env.DATOCMS_API_TOKEN,
      },
    },
    'gatsby-plugin-sitemap',
  ],
}

export default config
