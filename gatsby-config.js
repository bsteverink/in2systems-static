module.exports = {
  siteMetadata: {
    title: 'IN2SYSTEMS',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'IN2SYSTEMS',
        short_name: 'IN2SYSTEMS',
        start_url: '/',
        background_color: '#062340',
        theme_color: '#062340',
        display: 'minimal-ui',
        icon: 'src/assets/images/micron-logo.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass'
  ],
}
