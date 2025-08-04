This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev  #recommend
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## svg webpack

- @svgr/webpack: next.config.js
  `
  webpack(config) {
  config.module.rules.push({
  test: /\.svg$/,
  use: ['@svgr/webpack'],
  });

      return config;

  },
  `

## Command pm2 on server:

- pm2 start "npm run start" --name "tram-giay"
- pm2 list check instance
- pm2 stop {id} stop instance by id

## Build Production - Auto

Build on main branch

- git checkout -b origin/main
- git add .
- git commit -m "refactor|feat|chore|fix: {message}"
- git push origin main
- github will be trigger and run pipeline on main branch to build production automatically

Build on other branch

- from main branch
- checkout -b {name} ex: checkout -b dev (if branch not exist) or checkout dev
- git add .
- git commit -m "refactor|feat|chore|fix: {message}"
- git push origin {name}
- login to github and create pull request from {name} branch to main branch
- waiting for approve and merge. It will be trigger and run pipeline on main branch to build production automatically

## Build Production - Manual:

New Committed

- cd /home/ubuntu/tram-giay-landing-page/store-station/
- git pull origin main - get lastest commit main branch
- npm run build
- pm2 list - show list intance
- pm2 reload {id} - reload instance by id - can reload by name when run mode cluster

## Nginx check log

- sudo tail -f /var/log/nginx/error.log

## Plugin

- https://yet-another-react-lightbox.com/
- https://swiperjs.com/react
