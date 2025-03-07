# Portfolio Website

My personal portfolio website built with React and Vite.

## Live Site
Visit my portfolio at: https://ynadell.github.io/portfolio/

## Local Development

1. Clone the repository:
```bash
git clone https://github.com/ynadell/ynadell.github.io.git
cd ynadell.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Deployment
Make your changes and commit to github and then to deploy changes to GitHub Pages:

```bash
npm run deploy
```

This will:
1. Build the production version
2. Deploy to the gh-pages branch
3. Make your site available at https://ynadell.github.io/portfolio/

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run deploy` - Deploy to GitHub Pages

## Project Structure

```
ynadell.github.io/
├── src/
│   ├── components/     # React components
│   ├── App.jsx        # Main application component
│   ├── App.css        # Main styles
│   └── main.jsx       # Application entry point
├── public/            # Static assets
├── index.html         # HTML template
└── vite.config.js     # Vite configuration
```

## Technologies Used

- React
- Vite
- CSS3
- GitHub Pages

## Configuration

The site is configured to be served from the `/portfolio/` path on GitHub Pages. This is set in:
- `vite.config.js`: `base: '/portfolio/'`
- `package.json`: `homepage: "https://ynadell.github.io/portfolio"`
