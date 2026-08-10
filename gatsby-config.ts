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
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'nicmurphy',
        short_name: 'nicmurphy',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#000000',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png',
      },
    },
    'gatsby-plugin-sitemap',
  ],
}

export default config
