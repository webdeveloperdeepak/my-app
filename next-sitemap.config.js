/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.webdeveloperdeepak.com', // Replace with your domain
  generateRobotsTxt: true,
  exclude: ['/secret', '/admin/*'],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' }],
  },
};
