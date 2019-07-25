const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: "Balázs Hajkó",
    author: "Balázs Hajkó",
    email: "bhajko@gmail.com",
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
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Muli", "Montserrat"],
        },
      },
    },
  ],
}
