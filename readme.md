# Portfolio Website

My personal portfolio website, built with React. It showcases my background, skills, projects, work experience, and education, and includes a way to get in touch.

🔗 **Live site:** https://dignesh1207.github.io/Portfolio-Website

## Sections

- **Hero** — intro / landing section
- **About** — background and summary
- **Skills** — technical skills
- **Projects** — featured projects
- **Experience** — work experience
- **Education** — academic background
- **Contact** — ways to reach me
- **Resume** — downloadable PDF resume included in the site

## Tech Stack

- [React](https://react.dev/) 19
- [Create React App](https://create-react-app.dev/) (`react-scripts`)
- CSS (component-scoped stylesheets)
- [gh-pages](https://www.npmjs.com/package/gh-pages) for deployment

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) and npm installed

### Installation

```bash
git clone https://github.com/dignesh1207/Portfolio-Website.git
cd Portfolio-Website
npm install
```

### Run locally

```bash
npm start
```

Opens the app at [http://localhost:3000](http://localhost:3000). The page reloads automatically on changes.

### Build for production

```bash
npm run build
```

Builds an optimized production bundle into the `build/` folder.

## Deployment

This site is deployed to GitHub Pages via the `gh-pages` package:

```bash
npm run deploy
```

This runs `npm run build` first (via the `predeploy` script), then publishes the contents of `build/` to the `gh-pages` branch, which serves the site at the homepage URL configured in `package.json`.

## Project Structure

```
Portfolio-Website/
├── public/              # Static assets (favicon, resume, index.html)
├── src/
│   ├── components/      # Navbar, Hero, About, Skills, Projects,
│   │                     Experience, Education, Contact, Footer
│   ├── App.js            # Main app component / section layout
│   ├── index.js          # Entry point
│   └── index.css / App.css
├── package.json
└── README.md
```

## Contact

Feel free to reach out through the Contact section on the live site.