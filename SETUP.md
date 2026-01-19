# Bloomfolio Template Setup Guide

This guide will help you set up and customize your Bloomfolio portfolio template.

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:4321` to see your portfolio.

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Access the Keystatic CMS:**
   ```
   http://localhost:4321/keystatic
   ```
   Start editing your content through the visual interface!

## 🎨 Content Management with Keystatic

Bloomfolio includes **Keystatic CMS** - a modern, Git-based content editor that makes managing your portfolio easy without touching code.

### What is Keystatic?

Keystatic is a visual content management system that:
- Provides a user-friendly editor at `/keystatic` when you run `npm run dev`
- Stores content as files in your repository (not in a database)
- Offers live preview of your content as you edit
- Works seamlessly with Git workflows (commit, push, deploy)
- Generates type-safe TypeScript schemas automatically

**Why Keystatic?**
- No database setup required
- Content lives in your Git repository
- Visual editing without sacrificing developer control
- Perfect for portfolio sites with structured content

### Accessing the Editor

1. Start development server: `npm run dev`
2. Open browser to: `http://localhost:4321/keystatic`
3. You'll see the admin dashboard with all your content types

### Content Structure

Keystatic organizes content into **Singletons** (single items) and **Collections** (multiple entries):

**Singletons:**
- **Hero** - Your name, title, avatar, and social links
- **About** - Personal bio with photo

**Collections:**
- **Blog** - Blog posts with rich media support
- **Projects** - Portfolio projects with images and tech stacks
- **Work** - Work experience timeline
- **Education** - Academic history
- **Hackathons** - Hackathon participation

### Editing Content

1. **Navigate** - Click on any singleton or collection
2. **Create/Edit** - Use the "Create entry" button or select existing items
3. **Fill Fields** - Keystatic provides form fields for all content properties
4. **Rich Text** - Use the Markdown editor with live preview
5. **Images** - Upload images directly through the interface
6. **Media Embeds** - Add Spotify, YouTube, Twitter embeds in blog posts (requires `.mdoc` file extension)
7. **Save** - Changes save to files in `src/content/`

### Where Content is Stored

All Keystatic content is saved as files in your repository:

```
src/content/
├── hero/index.yaml          # Hero singleton
├── about/about.md           # About singleton
├── blog/*.md                # Blog posts
├── projects/*.md            # Project entries
├── work/*.md                # Work experience
├── education/*.md           # Education entries
└── hackathons/*.md          # Hackathon entries
```

This means you can:
- Edit content in Keystatic OR directly in your code editor
- Commit content changes with Git
- Deploy content changes like any other code
- Use version control for your content history

### Learn More

- **[Keystatic Docs](https://keystatic.com/docs)** - Official documentation
- **[Content Components](https://keystatic.com/docs/content-components)** - Custom component guide
- **[GitHub Mode](https://keystatic.com/docs/github-mode)** - Enable GitHub-based editing

### Enabling GitHub Mode (Optional)

To enable remote content editing through GitHub:

1. **Create GitHub OAuth App:**
   - Go to [GitHub Developer Settings](https://github.com/settings/developers)
   - Create new OAuth App
   - Callback URL: `http://localhost:4321/api/keystatic/github/oauth/callback`

2. **Configure Environment Variables:**
   ```bash
   cp .env.example .env
   # Edit .env with your GitHub credentials
   ```

3. **Required Variables:**
   - `KEYSTATIC_GITHUB_CLIENT_ID` - From GitHub OAuth App
   - `KEYSTATIC_GITHUB_CLIENT_SECRET` - From GitHub OAuth App
   - `KEYSTATIC_SECRET` - Random secret (`openssl rand -base64 32`)
   - `PUBLIC_KEYSTATIC_REPO_OWNER` - Your GitHub username
   - `PUBLIC_KEYSTATIC_REPO_NAME` - Repository name
   - `PUBLIC_KEYSTATIC_GITHUB_APP_SLUG` - GitHub App slug (set any value to enable GitHub mode)

4. **Restart and Authenticate:**
   ```bash
   npm run dev
   ```
   Visit `/keystatic` and sign in with GitHub

**Full guide:** https://keystatic.com/docs/github-mode

## 📝 Customization

### Choosing Your Workflow

You can customize Bloomfolio content in two ways:

1. **Via Keystatic CMS** (Recommended for non-developers)
   - Visual editor at `http://localhost:4321/keystatic`
   - Form-based content editing
   - Live preview and validation

2. **Direct File Editing** (For developers)
   - Edit files in `src/content/` directory
   - Full control over content structure
   - Faster for bulk changes

Both approaches work together - edit content files directly, and they'll appear in Keystatic!

### 1. Personal Information

Edit `src/pages/index.astro` to update your personal information:

```javascript
const portfolioData = {
  name: "Your Name",
  title: "Your Title",
  description: "Your description",
  avatarUrl: "/avatar.png",
  location: "Your Location",
  email: "your.email@example.com",
  socialLinks: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
  },
  about: {
    title: "About Me",
    description: "Your about text",
  },
};
```

### 2. Add Your Avatar

Add your profile picture as `public/avatar.png` (recommended size: 512x512px)

### 3. Add Content

> **Tip:** You can create this content through the [Keystatic CMS](#-content-management-with-keystatic) at `/keystatic` or by creating files manually as shown below.

#### Work Experience

Create markdown files in `src/content/work/`:

```markdown
---
company: "Company Name"
position: "Your Position"
description: "What you did here"
startDate: "2021-06-01"
endDate: "2024-01-01"
link: "https://company.com"
logo: "/images/company-logo.png" # Optional
---
```

#### Education

Create markdown files in `src/content/education/`:

```markdown
---
institution: "University Name"
course: "Degree Name"
description: "What you studied"
startDate: "2015-09-01"
endDate: "2019-05-30"
link: "https://university.edu"
logo: "/images/university-logo.png" # Optional
---
```

#### Projects

Create markdown files in `src/content/projects/`:

```markdown
---
title: "Project Name"
description: "Project description"
image: "./project-image.png"
startDate: "2023-06-01"
endDate: "2023-12-01"
skills: ["React", "TypeScript", "Node.js"]
demoLink: "https://demo.example.com"
sourceLink: "https://github.com/yourusername/project"
---
```

Add project images in the same directory as the markdown file.

#### Hackathons

Create markdown files in `src/content/hackathons/`:

```markdown
---
title: "Hackathon Name"
location: "City, State"
description: "What you built"
startDate: "2023-11-23"
endDate: "2023-11-25"
sourceLink: "https://github.com/yourusername/hackathon-project"
logo: "/images/hackathon-logo.png" # Optional
---
```

#### Blog Posts

Create markdown files in `src/content/blog/`:

```markdown
---
title: "Post Title"
description: "Post description"
image: "./post-cover.png"
publishDate: "2024-01-15"
updatedDate: "2024-01-20" # Optional
tags: ["Web Development", "TypeScript"] # Optional
---

# Your Blog Content

Write your blog post content here using markdown.

## Subheading

More content...
```

Add blog post cover images in the same directory as the markdown file.

## 🎨 Theming

The template supports light and dark themes. Users can toggle between themes using the theme switcher in the top-right corner.

To customize DaisyUI themes, you can modify the theme configuration in your `astro.config.mjs` or add custom CSS variables in `src/styles/global.css`.

## 📁 Project Structure

```
bloomfolio/
├── public/              # Static assets
│   ├── avatar.png       # Your profile picture
│   └── favicon.svg
├── src/
│   ├── components/      # Reusable components
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── WorkExperience.astro
│   │   ├── Education.astro
│   │   ├── Projects.astro
│   │   ├── Hackathons.astro
│   │   ├── Contact.astro
│   │   ├── ThemeToggle.astro
│   │   └── SkillBadge.astro
│   ├── content/         # Content collections
│   │   ├── work/        # Work experience entries
│   │   ├── education/   # Education entries
│   │   ├── projects/    # Project entries
│   │   ├── hackathons/  # Hackathon entries
│   │   └── blog/        # Blog posts
│   ├── layouts/
│   │   ├── Layout.astro      # Base layout
│   │   └── BlogLayout.astro  # Blog post layout
│   ├── pages/
│   │   ├── index.astro           # Homepage
│   │   ├── blog/
│   │   │   ├── index.astro       # Blog listing
│   │   │   └── [...slug].astro  # Blog post pages
│   ├── styles/
│   │   └── global.css       # Global styles
│   └── content.config.ts    # Content collections config
└── package.json
```

## 🛠 Tech Stack

- **Astro 5.x** - Static site generator
- **Tailwind CSS 4.x** - Utility-first CSS framework
- **DaisyUI** - Component library for Tailwind
- **TypeScript** - Type safety
- **Content Collections** - Type-safe content management

## 📦 Available Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run astro        # Run Astro CLI commands
```

## 🎯 Next Steps

1. Replace placeholder content with your own information
2. Add your actual project screenshots and blog images
3. Customize the color scheme (optional)
4. Deploy to your favorite hosting platform (Vercel, Netlify, etc.)

## 📚 Resources

- [Keystatic Documentation](https://keystatic.com/docs)
- [Astro Documentation](https://docs.astro.build)
- [DaisyUI Documentation](https://daisyui.com)
- [Tailwind CSS Documentation](https://tailwindcss.com)

## 🤝 Need Help?

Check the `CLAUDE.md` file for detailed architecture information and development guidelines.
