module.exports = {
  siteMetadata: {
    title: "Portfolio de Pedro H G Migacz",
    description: "Um site desenvolvido com intuito de ser meu portfolio (:",
    url: "https://pedromigacz.com",
    image: "https://pedromigacz.com/uploads/img_Metadata_4c95ce6862.bmp"
  },
  plugins: [
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.GATSBY_BACKEND_URL || `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`assets`, `skills`],
        //If using single types place them in this array.
        singleTypes: [`curriculum`, `contact`],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Oswald\:300,400`,
          `Roboto Mono\:300,400,500` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
  ],
};
