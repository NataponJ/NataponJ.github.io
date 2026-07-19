# Portfolio

This is a static portfolio website built with HTML, CSS, and JavaScript.

## Local preview

Open index.html in a browser, or run a simple local server:

- Python 3: `python3 -m http.server 8080`
- Then open: http://localhost:8080

## GitHub Pages deployment (automatic)

This repository is configured with a GitHub Actions workflow:

- File: .github/workflows/deploy-pages.yml
- Trigger: push to main branch
- Output: GitHub Pages site

### One-time GitHub setup

1. Push this project to a GitHub repository.
2. Open repository Settings -> Pages.
3. Under Build and deployment, choose Source: GitHub Actions.
4. Ensure your default branch is main.
5. Push commits to main to publish updates automatically.

After deployment completes, your site URL will be shown in the Actions run summary.
