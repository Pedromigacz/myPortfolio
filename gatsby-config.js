module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.BACKEND_URL || `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`assets`, `skills`],
        //If using single types place them in this array.
        singleTypes: [`curriculum`, `contact`],
    },
  },
  ],
};
