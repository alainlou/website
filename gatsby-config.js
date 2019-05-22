module.exports = {
  siteMetadata: {
    title: 'Alain Lou',
    author: 'Alain Lou',
    description: 'Alain Lou is an ECE Student at the University of Waterloo',
    url: 'alainlou.com',
    image: 'static/favicon.ico'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/static`
      }
    },
    'gatsby-transformer-json',
    'gatsby-transformer-remark'
  ]
}
