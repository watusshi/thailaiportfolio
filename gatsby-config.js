module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://thailaidevport.netlify.app/`,
    // Your Name
    name: 'Nhu Chenh',
    // Main Site Title
    title: `Nhu Chenh | Full-Time Social Media Influencer`,
    // Description that goes under your name in main bio
    description: ``, 
    //location: `Located in Dallas/Fort-Worth Metroplex`,
    // Optional: Twitter account handle
    author: `https://stackoverflow.com/users/14517192/watusshi`,
    // Optional: Github account URL
    github: `https://github.com/watusshi`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/thai-lai/`,
    //Resume section
    resume: `https://cdn.discordapp.com/attachments/991834196349816957/1002282141016666232/Thai_Lai_Resume.pdf`,
    // Content of the About Me section
    about: `Greetings! My name is Thai Lai, an Information Technology student at the University of Texas at Arlington, due to graduate May 2025. My primary interest lies within technologies and coding. I am enthusiastic about advancing my pursuits in this field, both academically and professionally. I have proven the ability to leverage full-stack Software Engineer as well as experienced in design and building any graphics software from ground up.`,
    /**test: [
      {
        name: 'Introduction',
        description:
          'Greetings! My name is Thai Lai. Im a Software Engineering student at the University of Texas at Arlington, due to graduate May 2022. Ive loved computers and coding from an early age, and Im excited to pursue it as a field both academically and professionally.',
      },
    ],**/
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Java and Donut Express (JADE)',
        description:
          'An application which allows business to run more effectively (Client and Server restaurant management tool)',
        link: '',
      },
      {
        name: 'RoundedTB',
        description:
          'A customization tool for windows devices (add margins, segments, and rounded corners to your taskbar',
        link: 'https://github.com/torchgm/RoundedTB',
      },
      /**{ 
        name: 'Another Cool Project',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit ducimus perferendis',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },**/
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Cyber Security at UTA',
        description: 'Active member, September 2021 - Present',
        link: 'https://mavorgs.campuslabs.com/engage/organization/csec',
      },
      {
        name: 'Mobi',
        description: 'Active developer, September 2021 - Present',
        link: 'https://utamobi.com/#about',
      },
      {
        name: 'Dallas Fort-Worth International Airport',
        description: 'Customer Service Ambassador, May 2018 - April 2019',
        link: 'https://www.dfwairport.com/explore/plan/assist/ambassadors/',
      }
      /**{
        name: 'Hooli',
        description: 'Full-Stack Developer, May 2015 - December 2017',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },**/
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Programming Languages & Frameworks',
        description:
          'JavaScript (ES6+), Flutter, HTML, C, C++, C#, Java, Python (Numpy, Pandas), SwiftUI, GatsbyJS',
      },
      {
        name: 'Databases',
        description: 'MongoDB, PostreSQL, MySQL',
      },
      {
        name: 'Other',
        description:
          'Docker, Amazon Web Services (AWS), Linux/Unix, MacOS, Microsoft Offices, Microcontrollers, , Agile / Scrum',
      },
    ],
    //others section to add self interest and stuff
    others: [
      {
        name: 'Human Languages',
        description:
          'English, Vietnamese, Cantonese & TeoChew',
      },
    ],
  },
  plugins: [`gatsby-plugin-netlify`,
    /**`gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },**/
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-dark-mode`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `thailaidevport`,
        short_name: `thailaidevport`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
