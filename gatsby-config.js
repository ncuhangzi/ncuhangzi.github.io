module.exports = {
  siteMetadata: {
    title: "Colin Phillips",
    description: "Colin Phillips is an aspiring data scientist/PM based in Austin, TX interested in the intersection of humanitarianism and technology. He is currently studying Electrical and Computer Enigneering Honors and Mathematics at the University of Texas at Austin.",
    author: "Colin Phillips",
  },
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
