# react-template

React template with Vite, Vitest, and React Testing Library

Vitest + RTL setup guides:

- https://www.theodinproject.com/lessons/node-path-react-new-introduction-to-react-testing
- https://www.robinwieruch.de/vitest-react-testing-library/

## Getting Started

1. Run `npm install` to install all dependencies.
2. Start the development server with `npm run dev`.
3. Open your browser and navigate to the designated web address assigned to Local, e.g. `➜  Local:   http://localhost:5173/`.
4. After verifying the default template page loads, open a second terminal in the same project directory and run `npm run test` to confirm React testing with Vitest and RTL works. You are then free to clear out the sample test code inside `App.test.jsx` and add your own tests as you build your application.
5. Finally, you can clear the sample content code within the App function in `App.jsx`. Code inside `App.css` and `index.css` are default styles that can be modified or added to.

## Create a Production Build

To create a production build, run `npm run build`.

## Deployment Options

To deploy a production build to a PaaS (Platform as a Service), follow these steps provided by https://www.theodinproject.com/lessons/node-path-react-new-cv-application#deploying-a-react-app :

### Netlify

While there are many ways to deploy to Netlify, like uploading your dist directly or using netlify-cli, the most convenient way would be to directly import your GitHub repository to Netlify.

1. Push your React application to GitHub.
2. Import your project to Netlify by logging in, and selecting your repository.
3. Select the branch to deploy from (the default setting, from main, works) and hit “Deploy site”!
4. You can access more settings here if you need to!

### Vercel

Similar to Netlify, Vercel also offers a few ways to deploy, and we will also be importing our GitHub repository to get benefits like deploy-on-push.

1. Again, push your React application to GitHub.
2. Import your project to Vercel.
3. Vercel will automatically detect that you are using Vite. Set your name as you like, and hit “Deploy”!

### Cloudflare Pages

Cloudflare Pages has a similar process and benefits to the other two options: import your GitHub repository and set the right build command and output directory.

1. Yes, push your React application to GitHub.
2. Import your project to Cloudflare Pages. Make sure when creating an application that you create with Pages instead of creating a Worker.
3. Hit “Save and Deploy” and watch it come to life!

##### See https://vitejs.dev/guide/static-deploy.html for additional deployment options.

##

### Additional Deployment Configuration for SPA Routing

As noted at the end of https://www.theodinproject.com/lessons/node-path-react-new-shopping-cart :

Depending on what hosting solution you’re using, you may need some additional configuration so that your routing is handled correctly as a single page application (SPA).

### Netlify

You need to add a `_redirects` file to the `public/` directory of your project. Copy the following to redirect all routes to the index page and let `react-router-dom` handle the rest. You can read more about this at the Netlify documentation on redirects.

```
1| /* /index.html 200
2|
```

### Vercel

You need to add a `vercel.json` file at the root of your project and copy the following configuration. Similar to Netlify, this redirects all routes to the index page and lets `react-router-dom handle` the rest. More information can be found here at the Vercel documentation for SPAs and Vite.

```
1|{
2|  "rewrites": [
3|    {
4|      "source": "/(.*)",
5|      "destination": "/index.html"
6|    }
7|  ]
8|}
```

### Cloudflare Pages

As of the time of writing, unlike Netlify and Vercel, no additional steps are required as the default behavior will allow `react-router-dom` to correctly handle redirects for SPAs. You can learn more about this at the Cloudflare documentation on serving pages.
