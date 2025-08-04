// next-sitemap.config.js
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://tramgiay.vn/',
  generateRobotsTxt: true,
  // Không cần sitemapSize vì chỉ có 1 trang
  changefreq: 'weekly', // Có thể đổi thành 'monthly' nếu nội dung ít thay đổi
  priority: 1.0, // Ưu tiên cao nhất vì chỉ có 1 trang
  exclude: ['/404', '/500'], //  '/server-sitemap.xml'
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/404', '/500'],
      },
    ],
  },
  // Đơn giản hóa transform vì chỉ có trang chủ
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: 'weekly',
      priority: 1.0,
      lastmod: new Date().toISOString(),
    };
  },
};
