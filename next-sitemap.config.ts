import type { IConfig } from 'next-sitemap';

const config: IConfig = {
  siteUrl: 'https://www.webdeveloperdeepak.com', // Replace with your domain
  generateRobotsTxt: true,
  exclude: ['/secret', '/admin/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};

export default config;
