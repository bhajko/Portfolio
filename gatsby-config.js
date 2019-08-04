const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: "Balázs Hajkó",
    author: "Balázs Hajkó",
    email: "bhajko@gmail.com",
    description: "Balázs Hajkó Web Developer Portfolio",
    url: "https://www.bhajko.dev",
    lang: "en",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Muli`,
          },
          {
            family: `Montserrat`,
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Balázs Hajkó Portfolio`,
        short_name: `Portfolio`,
        start_url: `/`,
        background_color: `#ffdd57`,
        theme_color: `#ffdd57`,
        display: `standalone`,
        icon: `src/images/favicon.png`,
      },
    },
    "gatsby-plugin-offline",
  ],
}
