module.exports = {
  siteMetadata: {
    title: 'Alain Lou',
    author: 'Alain Lou',
    description: 'Alain Lou is an FPGA engineer at Citadel Securities. He likes to enjoy life.',
    url: 'alainlou.com',
    image: 'static/favicon.ico'
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-L0S899EN4R",
        ],
        pluginConfig: {
          head: true
        },
      }
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/projects`
      }
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 2000
            }
          }
        ]
      }
    },
    'gatsby-transformer-sharp',
  ]
}
