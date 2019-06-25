module.exports = {
  siteMetadata: {
    author: 'Monte Hayward',
    title: 'Monte Hayward',
    subtitle: 'is a Front-End Engineer. Product development from inception to launch. Software: Payments Systems, Search. Excited about FinTech, Blockchain, HealthTech',
    description: 'Monte Hayward: front-end leader in rapid go-to-markets',
    // imageUrl: 'https://i.imgur.com/Vz81GEl.png',	//TODO: replace imageUrl preview of page
    keywords: [`Front-end Engineer, Web app developer, Web, Developer, Engineer, CSS, HTML, JS, Javascript, Gatsby, CSS3, HTML5, Full-stack Developer`],
    email: `info@montehayward.com`,
    linkedin: `https://linkedin.com/in/monte`,
    angelco: `https://angel.co/monte-hayward`,
    twitter: 'https://twitter.com/monte_hayward',
    stackoverflow: `https://stackoverflow.com/users/738942/monte-hayward`,
    github: `https://github.com/monte-hayward`,
    medium: 'https://medium.com/@rulesetio',
    gatsby: 'https://www.gatsbyjs.org/',
    siteUrl: `https://www.montehayward.com`,
    dateInception: `2014`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-tailwind`,
        short_name: `starter`,
        start_url: `/`,
        background_color: 'rgba(255,0,0,1)',
        theme_color: 'rgba(0,255,0,1)',
        display: `minimal-ui`,
        icon: `src/images/tailwind-icon.png`
      }
    },
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        tailwind: true,
        purgeOnly: ["src/css/style.css"]
      }
    }
  ]
};
