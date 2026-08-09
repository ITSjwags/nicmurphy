import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sharp',
    'gatsby-plugin-image',
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
  ],
}

export default config
