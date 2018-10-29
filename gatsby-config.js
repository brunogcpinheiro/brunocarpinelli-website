module.exports = {
  siteMetadata: {
    title: 'Bruno Carpinelli | Developer and Designer',
    description: 'Website Bruno Carpinelli. Desenvolvimento de Apps, Sites, Ecommerce, Sistemas e designer de mídias socias'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/avatar.jpg', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}
