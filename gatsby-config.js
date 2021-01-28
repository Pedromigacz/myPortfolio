module.exports = {
  siteMetadata: {
    title: "Site e portfolio de Pedro Migacz",
    description: "Um site desenvolvido com intuito de ser um portfolio, aqui você encontra meu currículo, minhas habilidades, meus trabalho e uma maneira fácil de me contatar",
    url: "https://pedromigacz.com",
    image: "https://api.pedromigacz.com/uploads/meta_Image_d4aa6f50eb.png"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.GATSBY_BACKEND_URL || `https://api.pedromigacz.com`,
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
