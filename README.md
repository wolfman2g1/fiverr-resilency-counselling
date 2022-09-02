# Resiliency Counseling Group LLC

```
minimum hugo version 0.92.2
tailwindcss version 3.1.5
```

# Setup dev env

Run "npm install" (first time only)

Then configure `config.toml`

# Run hugo server

1. run hugo server

```
hugo server
```

2. run tailwindcss server (if you edit some style with tailwindcss)

```
npm run tailwind-dev
```

Tailwind CSS file located at `./tailwindcss`.
Generated Tailwind CSS located at `./static/css/main.css`.

# Build hugo site

```
hugo --ignoreCache --minify
```

# To create new page

```
hugo new content/page.md
```

and then edit file located at `./content/page.md`, setup frontmatter, add your thumbnail image and lets write your content
