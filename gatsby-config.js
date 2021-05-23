const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://monte.io',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === 'production';
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;


module.exports = {
  siteMetadata: {
    author: 'Monte Hayward',
    title: 'Monte Hayward',
    subtitle: 'is a Front-End Engineer. Product development from inception to launch. Software: Payments Systems, Search. Excited about FinTech, Blockchain, HealthTech',
    description: 'Monte Hayward: front-end leader in rapid go-to-markets',
    keywords: [`Front-end Engineer, Web app developer, Web, Developer, Engineer, CSS, HTML, JS, Javascript, Gatsby, CSS3, HTML5, Full-stack Developer`],
    email: `info@montehayward.com`,
    linkedin: `https://linkedin.com/in/monte`,
    angelco: `https://angel.co/monte-hayward`,
    twitter: 'https://twitter.com/monte_hayward',
    stackoverflow: `https://stackoverflow.com/users/738942/monte-hayward`,
    github: `https://github.com/monte-hayward`,
    medium: 'https://medium.com/@rulesetio',
    gatsby: 'https://www.gatsbyjs.org/',
    siteUrl,
    dateInception: `2014`,
  },
  plugins: [
    // sources of data

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`,
      }
    },

    //  Image processing
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    // SEO
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-tailwind`,
        short_name: `starter`,
        start_url: `/`,
        background_color: '#ffffff',
        theme_color: '#4dc0b5',
        display: `minimal-ui`,
        icon: `src/images/mh-icon-512.png`
      }
    },

    // Style processing
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        tailwind: true,
        purgeOnly: ["src/css/style.css"]
      }
    },

    // PWA - Progressive Web Application - offline
    `gatsby-plugin-offline`,

    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: '*' }],
          },
          'branch-deploy': { policy: [{ userAgent: '*', disallow: ['/'] }], sitemap: null, host: null },
          'deploy-preview': { policy: [{ userAgent: '*', disallow: ['/'] }], sitemap: null, host: null },
        },
      }
    },

  ],
};
