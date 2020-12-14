module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`skills`],
        //If using single types place them in this array.
        singleTypes: [`contact`],
        // Possibility to login with a strapi user, when content types are not publically available (optional).
    },
  },
  "gatsby-plugin-postcss",
  ],
};
