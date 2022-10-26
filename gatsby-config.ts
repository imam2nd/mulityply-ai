import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Multiply`,
    siteUrl: `https://b2b.multiply.ai`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-root-import",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Multiply AI`,
        short_name: `Multiply`,
        start_url: `/`,
        icon: `src/images/icon-96x96.png`,
      },
    },
  ],
};

export default config;
