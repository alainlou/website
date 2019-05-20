module.exports = {
  siteMetadata: {
    title: 'Alain Lou',
    author: 'Alain Lou'
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-transformer-remark'
  ]
}
