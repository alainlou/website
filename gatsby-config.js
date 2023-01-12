module.exports = {
  siteMetadata: {
    title: 'Alain Lou',
    author: 'Alain Lou',
    description: 'Alain Lou is an ECE Student at the University of Waterloo',
    url: 'alainlou.com',
    image: 'static/favicon.ico'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: "UA-180677040-1",
        head: false,
        anonymize: true,
        respectDNT: true,
        pageTransitionDelay: 0,
        defer: true
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
