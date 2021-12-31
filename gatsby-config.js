module.exports = {
  siteMetadata: {
    title: "Fan-Chi Yeh",
    description: "Fan-Chi Yeh is an aspiring data scientist and HCI enthusiastic currently studying Information Management at the National Central University.",
    author: "Fan-Chi Yeh",
  },
  //https://github.com/ncuhangzi/ncuhangzi.github.io.git
  
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/favicon-16x16.png`, // This path is relative to the root of the site.
      },
    }
  ],
}
