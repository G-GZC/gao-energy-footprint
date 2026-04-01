import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'GAO Energy Footprint',
  description: 'Dr. Gao Zuchang – Clean Energy Research',
  lang: 'en-US',

  // GitHub Pages base path — change to '/' if using custom domain
  base: '/gao-energy-footprint/',

  // Block search engines
  head: [
    ['meta', { name: 'robots', content: 'noindex, nofollow' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/gao-energy-footprint/logo.svg' }],
  ],

  // Clean URLs (no .html suffix)
  cleanUrls: true,

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'GAO Energy Footprint',

    // ──────────────────────────────────────
    // Top Navigation
    // ──────────────────────────────────────
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      {
        text: 'Research',
        items: [
          { text: 'All Projects', link: '/research/projects' },
          { text: 'Commercialized Projects', link: '/research/products' },
          // {
          //   text: 'Commercialized Projects',
          //   items: [
          //     { text: 'All Products', link: '/research/products' },
          //     { text: 'DUROXO Smart Battery', link: '/research/projects/duroxo' },
          //     // { text: 'Fuel Cell Drone', link: '/research/projects/fc-drone' },
          //     { text: 'H₂ Tower Light', link: '/research/projects/h2-tower-light' },
          //     { text: 'Energy Telemetry Platform', link: '/research/projects/telemetry' },
          //   ],
          // },
          { text: 'Publications', link: '/research/publications' },
          { text: 'Patents', link: '/research/patents' },
        ],
      },
      { text: 'Collaborations', link: '/collaborations' },
      { text: 'Awards', link: '/awards' },
      { text: 'Teaching', link: '/teaching' },
      { text: 'Contact', link: '/contact' },
    ],

    // ──────────────────────────────────────
    // Sidebar for Research section
    // ──────────────────────────────────────
    sidebar: {
      '/research/': [
        {
          text: 'Research',
          items: [
            { text: 'All Projects', link: '/research/projects' },
            // { text: 'Commercialized Projects', link: '/research/products' },
            {
              text: 'Commercialized Projects',
              collapsed: true,
              items: [
                { text: 'Product Overview', link: '/research/products' },
                { text: 'DUROXO Smart Battery', link: '/research/projects/duroxo' },
                // { text: 'Fuel Cell Drone', link: '/research/projects/fc-drone' },
                { text: 'H₂ Tower Light', link: '/research/projects/h2-tower-light' },
                { text: 'Energy Telemetry Platform', link: '/research/projects/telemetry' },
              ],
            },            
            { text: 'Publications', link: '/research/publications' },
            { text: 'Patents', link: '/research/patents' },
          ],
        },
        // {
        //   text: 'Featured Projects',
        //   items: [
        //     { text: 'DUROXO Smart Battery', link: '/research/projects/duroxo' },
        //     { text: 'Fuel Cell Drone', link: '/research/projects/fc-drone' },
        //     { text: 'H₂ Tower Light', link: '/research/projects/h2-tower-light' },
        //     { text: 'Universal Telemetry', link: '/research/projects/telemetry' },
        //   ],
        // },
      ],
    },

    // ──────────────────────────────────────
    // Footer & Social
    // ──────────────────────────────────────
    socialLinks: [
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm-1.5 19.5h-3v-9h3v9zm-1.5-10.2c-.97 0-1.75-.79-1.75-1.75S8.03 5.8 9 5.8s1.75.79 1.75 1.75S9.97 9.3 9 9.3zm10.5 10.2h-3v-4.5c0-1.12-.02-2.56-1.56-2.56-1.56 0-1.8 1.22-1.8 2.48v4.58h-3v-9h2.88v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6v4.73z"/></svg>'
        },
        link: 'https://scholar.google.com/citations?user=7OKQSiIAAAAJ',
        ariaLabel: 'Google Scholar'
      },
    ],

    footer: {
      message: 'GAO Energy Footprint',
      copyright: '© 2026 Dr. Gao Zuchang. All rights reserved.',
    },

    // Disable search (private site)
    search: {
      provider: 'local',
    },
  },
})
