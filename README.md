# 🌻 Bloomfolio

<div align="center">

A modern, customizable portfolio template built with **Astro 5** and **DaisyUI 5**. A beautiful, fast, and highly customizable portfolio template for developers, designers, and creatives.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Astro](https://img.shields.io/badge/Astro-5.x-FF5D01?logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![DaisyUI](https://img.shields.io/badge/DaisyUI-5.x-5A0EF8?logo=daisyui&logoColor=white)](https://daisyui.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

</br>

<img width="1920" height="1080" alt="img1" src="https://github.com/user-attachments/assets/b882118c-2070-4b12-85f4-8491ea9517ee" />

</div>

## ✨ Features

- 🎨 **6 Built-in Themes** - Light, Dark, Synthwave, Retro, Valentine, and Dim
- 📝 **6 Content Collections** - Blog, Projects, Work, Education, Hackathons, and About
- 🎨 **Keystatic CMS** - Visual content editor with live preview and GitHub integration
- 🔒 **Type-Safe Content** - Full TypeScript support with validated schemas
- 📱 **Fully Responsive** - Mobile-first design with DaisyUI components
- ⚡ **Fast & Optimized** - Static site generation with automatic image optimization
- 🎭 **Smooth Transitions** - Page transitions using Astro's View Transitions API
- 📦 **MDX Support** - Enhanced markdown with component imports (Spotify, YouTube, Twitter)
- 🎯 **Configuration-Driven** - Customize everything through a central config file
- 🌸 **FAB Flower Menu** - Expandable floating action button for extra links
- 🎨 **Modern Stack** - Astro 5 + Tailwind CSS 4 + DaisyUI 5 + TypeScript
- 🔍 **SEO Optimized** - Meta tags, Open Graph, and semantic HTML
- ♿ **Accessible** - Built with accessibility in mind

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ or 20+
- pnpm, pnpm, or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/lauroguedes/bloomfolio.git

# Navigate to the project directory
cd bloomfolio

# Install dependencies
pnpm install

# Start the development server
pnpm dev
```

Visit `http://localhost:4321` to see your portfolio!

## 📋 Commands

All commands are run from the root of the project:

| Command | Action |
| :--- | :--- |
| `pnpm install` | Install dependencies |
| `pnpm dev` | Start dev server at `localhost:4321` |
| `pnpm build` | Build production site to `./dist/` |
| `pnpm preview` | Preview production build locally |
| `pnpm astro check` | Run TypeScript and Astro checks |
| `pnpm astro ...` | Run Astro CLI commands |

## ⚙️ Configuration

All site configuration is centralized in `src/config.ts`. Edit this file to customize your portfolio.

### Basic Information

```typescript
export const siteConfig: SiteConfig = {
  name: "Your Name",
  title: "Your Professional Title",
  description: "Brief description of your portfolio",
  avatar: "../assets/your-avatar.png",
  location: "Your City, Country",
  email: "your@email.com",
  // ...
};
```

### Social Links

Add your social media profiles:

```typescript
socialLinks: {
  github: "https://github.com/username",
  linkedin: "https://linkedin.com/in/username",
  twitter: "https://twitter.com/username",
  bluesky: "https://bsky.app/profile/username",
  instagram: "https://instagram.com/username",
  youTube: "https://youtube.com/@username",
  codetips: "https://codetips.cloud/u/username",
}
```

### Section Visibility

Control which sections appear on your homepage:

```typescript
sections: {
  about: true,      // About section
  projects: true,   // Projects showcase
  blog: true,       // Latest blog posts (shows 3 most recent)
  work: true,       // Work experience timeline
  education: true,  // Education history
  hackathons: true, // Hackathon participation
  contact: true,    // Contact section
}
```

Set any section to `false` to hide it. The Hero section is always visible.

### Theme Settings

Choose between a theme selector dropdown or a simple light/dark toggle:

```typescript
enableThemeSelector: true  // true = dropdown with 6 themes, false = toggle
```

**Available Themes**: light, dark, synthwave, retro, valentine, dim

### Extra Links (FAB Flower)

Configure the floating action button menu:

```typescript
extraLinks: {
  enable: true,
  links: [
    { link: "/blog/guide", icon: BookOpen, label: "Guide" },
    { link: "/resume.pdf", icon: FileUser, label: "Resume" },
    // Add more links...
  ],
}
```

## 📂 Project Structure

```
bloomfolio/
├── public/              # Static assets
│   └── favicon.svg
├── src/
│   ├── assets/         # Images and media
│   │   └── bloomfolio.png
│   ├── components/     # Reusable components
│   │   ├── About.astro
│   │   ├── Blog.astro
│   │   ├── BlogCard.astro
│   │   ├── Contact.astro
│   │   ├── FabFlower.astro
│   │   ├── Hackathons.astro
│   │   ├── Hero.astro
│   │   ├── ProjectCard.astro
│   │   ├── Projects.astro
│   │   ├── SkillBadge.astro
│   │   ├── Spotify.astro
│   │   ├── ThemeSelector.astro
│   │   ├── ThemeToggle.astro
│   │   ├── Timeline.astro
│   │   ├── Twitter.astro
│   │   └── YouTube.astro
│   ├── content/        # Content collections
│   │   ├── about/     # About section (1 file)
│   │   ├── blog/      # Blog posts (.md or .mdx)
│   │   ├── education/ # Education history
│   │   ├── hackathons/# Hackathon entries
│   │   ├── projects/  # Portfolio projects
│   │   └── work/      # Work experience
│   ├── layouts/       # Page layouts
│   │   ├── Layout.astro
│   │   ├── BlogLayout.astro
│   │   └── ProjectLayout.astro
│   ├── pages/         # File-based routing
│   │   ├── index.astro
│   │   ├── blog/
│   │   │   ├── index.astro
│   │   │   └── [...slug].astro
│   │   └── projects/
│   │       ├── index.astro
│   │       └── [...slug].astro
│   ├── styles/
│   │   └── global.css # Tailwind + DaisyUI
│   ├── config.ts      # Site configuration
│   └── content.config.ts # Content schemas
├── astro.config.mjs   # Astro configuration
├── package.json
├── tsconfig.json
└── README.md
```

## 📝 Content Management

Bloomfolio offers two powerful ways to manage your content: the **Keystatic CMS** for a visual editing experience, or **direct file editing** for developers who prefer working with code.

### Option 1: Keystatic CMS (Recommended)

Keystatic is a modern, Git-based headless CMS that provides a user-friendly interface for managing your content without touching code.

#### Accessing the Editor

1. Start the development server:
   ```bash
   pnpm dev
   ```

2. Navigate to the admin panel:
   ```
   http://localhost:4321/keystatic
   ```

3. Start creating and editing content through the visual interface!

#### What is Keystatic?

Keystatic is a **Git-based CMS** that:
- Stores content as files in your repository (not in a database)
- Provides a beautiful visual editor with live preview
- Works with local development and GitHub/GitLab workflows
- Generates type-safe content with full TypeScript support
- Integrates seamlessly with Astro's Content Collections

**Learn more:** [Keystatic Documentation](https://keystatic.com/docs)

#### Content Types in Keystatic

**Singletons** (one-per-site content):
- **Hero Section** - Your name, title, avatar, social links
- **About Section** - Personal bio with photo (supports Markdown)

**Collections** (multiple entries):
- **Blog Posts** - Articles with cover images, tags, and rich media embeds
- **Projects** - Portfolio items with screenshots, descriptions, and tech stacks
- **Work Experience** - Timeline of employment history
- **Education** - Academic background
- **Hackathons** - Competitive coding events and achievements

#### Using the Keystatic Editor

1. **Create New Entries**
   - Click "Create entry" in any collection
   - Fill out the form fields (Keystatic validates required fields)
   - Use the rich text editor for Markdown content
   - Upload images directly through the interface

2. **Edit Existing Content**
   - Select any entry from the collection list
   - Make changes in the visual editor
   - See live preview of your content

3. **Rich Media Embeds** (Blog posts only)
   - Click the "+" button in the content editor
   - Select from available components: Spotify, YouTube, Twitter
   - Paste the URL and Keystatic handles the rest

   > **⚠️ Important:** Media components (Spotify, YouTube, Twitter) are only available in blog posts. Files must use the `.mdoc` extension (not `.md`). To extend components to other collections, see the technical guide in [CLAUDE.md](CLAUDE.md).

4. **Save Changes**
   - All changes are saved as file edits in `src/content/`
   - Changes are automatically detected by Astro's dev server
   - Commit and push your changes like any other code

#### Deployment Modes

**Local Mode (Current Setup)**
- Content stored in `src/content/` directory
- Changes saved as file system edits
- Perfect for personal portfolios and single-user sites

**GitHub/Cloud Mode** (Future upgrade)
- Content synced with GitHub repository
- Enable collaboration with non-technical users
- Manage content from anywhere via hosted admin panel
- See [Keystatic Cloud documentation](https://keystatic.com/docs/cloud) for setup

### Option 2: Direct File Editing

If you prefer working directly with files, all content is stored in `src/content/` as Markdown, YAML, or Markdoc files.

#### Blog Posts

Create a new file in `src/content/blog/`:

```markdown
---
title: "Your Post Title"
description: "Brief description for SEO"
image: "./featured-image.png"
publishDate: "2024-01-25"
tags: ["Tag1", "Tag2"]
---

Your content here...
```

**File Extensions:**
- `.md` - Standard Markdown for regular blog posts
- `.mdoc` - Markdoc with component support (required for media embeds)

**Rich Media Embeds** (`.mdoc` files only):

> **Note:** Media components only work in blog collection currently.

```markdown
# Spotify Embed
{% Spotify url="https://open.spotify.com/track/..." /%}

# YouTube Video
{% YouTube url="https://youtube.com/watch?v=..." /%}

# Twitter/X Post
{% Twitter url="https://x.com/username/status/..." /%}
```

#### Projects

Create a new file in `src/content/projects/`:

```markdown
---
title: "Project Name"
description: "Brief description"
image: "./screenshot.png"
startDate: "2023-01-15"
endDate: "2023-06-30"  # Optional (omit for ongoing)
skills: ["React", "Node.js", "MongoDB"]
demoLink: "https://demo.example.com"  # Optional
sourceLink: "https://github.com/..."  # Optional
---

Detailed project description...
```

#### Work Experience

Create a new file in `src/content/work/`:

```markdown
---
title: "Company Name"
subtitle: "Job Title"
startDate: "2020-01-15"
endDate: "2023-06-30"  # Optional (omit for current position)
logo: "https://company-logo-url.com"  # Optional
link: "https://company-website.com"   # Optional
---

Job description and achievements...
```

#### Education

Create a new file in `src/content/education/`:

```markdown
---
title: "Institution Name"
subtitle: "Degree/Course"
startDate: "2015-09-01"
endDate: "2019-06-30"  # Optional
logo: "https://institution-logo-url.com"  # Optional
link: "https://institution.edu"  # Optional
---

Educational details and achievements...
```

#### Hackathons

Create a new file in `src/content/hackathons/`:

```markdown
---
title: "Hackathon Name"
location: "City, State or Virtual"
description: "Brief hackathon summary"
startDate: "2023-11-23"
endDate: "2023-11-25"  # Optional
logo: "https://hackathon-logo-url.com"  # Optional
sourceLink: "https://github.com/..."  # Optional
---

Detailed information about the hackathon and your project...
```

#### Singletons (Hero & About)

**Hero** (`src/content/hero/index.yaml`):
```yaml
name: Your Name
title: Your Professional Title
description: Brief description of your portfolio
avatar: "./avatar.png"
location: 🌍 Your Location
githubUrl: https://github.com/username
linkedinUrl: https://linkedin.com/in/username
# ... other social links
```

**About** (`src/content/about/about.md`):
```markdown
---
title: "About Me"
photo: "./photo.png"
---

Your about content with **Markdown** formatting...
```

### Content Tips

**Image Paths:**
- Use relative paths like `"./image.png"` for local images
- Images are automatically optimized by Astro
- Supported formats: PNG, JPG, WEBP, AVIF, SVG

**Dates:**
- Format: `YYYY-MM-DD` (e.g., "2024-01-15")
- Leave `endDate` empty for ongoing positions/projects

**Skills/Tags:**
- Arrays of strings: `["React", "TypeScript", "Node.js"]`
- Display as badges in the UI

### Resources

- **[Keystatic Documentation](https://keystatic.com/docs)** - Complete CMS guide
- **[Keystatic Content Components](https://keystatic.com/docs/content-components)** - Creating custom components
- **[Astro Content Collections](https://docs.astro.build/en/guides/content-collections/)** - Type-safe content schemas
- **[Markdoc Syntax](https://markdoc.dev/docs/syntax)** - Enhanced Markdown format

### Setting Up GitHub Mode (Optional)

For remote content editing from anywhere, you can enable Keystatic's GitHub mode:

#### Prerequisites
- GitHub account
- Repository hosted on GitHub

#### Steps

1. **Create GitHub OAuth App**

   Visit [GitHub Developer Settings](https://github.com/settings/apps) and create a new Github App:

   - **Application name:** Bloomfolio Keystatic
   - **Homepage URL:** `http://localhost:4321` (for local development)
   - **Authorization callback URL:** `http://localhost:4321/api/keystatic/github/oauth/callback`

   For production, use your deployed URL instead.

2. **Set Environment Variables**

   Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

   Fill in your values:
   ```bash
   KEYSTATIC_GITHUB_CLIENT_ID=your_client_id_here
   KEYSTATIC_GITHUB_CLIENT_SECRET=your_client_secret_here
   KEYSTATIC_SECRET=$(openssl rand -base64 32)
   PUBLIC_KEYSTATIC_REPO_OWNER=your-github-username
   PUBLIC_KEYSTATIC_REPO_NAME=bloomfolio
   PUBLIC_KEYSTATIC_GITHUB_APP_SLUG=your-github-app-slug
   ```

3. **Restart Development Server**
   ```bash
   pnpm dev
   ```

4. **Access Keystatic**

   Navigate to `http://localhost:4321/keystatic` and sign in with GitHub.

#### Production Setup

For production deployment (Vercel, Netlify, etc.):

1. Add all environment variables to your hosting platform's environment settings
2. Update OAuth App callback URL to your production domain
3. Set `PUBLIC_KEYSTATIC_GITHUB_APP_SLUG` (optional, for GitHub App mode)

**Learn more:** [Keystatic GitHub Mode Documentation](https://keystatic.com/docs/github-mode)

#### Switching Between Modes

- **GitHub Mode:** Set environment variables (content synced with GitHub)
- **Local Mode:** Remove/unset environment variables (content stored locally)

The configuration automatically detects which mode to use based on environment variables.

## 🎨 Customization

### Changing Themes

Edit `src/config.ts`:

```typescript
enableThemeSelector: true  // Dropdown with 6 themes
// OR
enableThemeSelector: false  // Simple light/dark toggle
```

### Adding Custom Styles

Add custom CSS in component `<style>` tags or extend `src/styles/global.css`:

```css
@import "tailwindcss";
@plugin "daisyui";

/* Your custom styles here */
```

### Creating New Sections

1. Create a new component in `src/components/`
2. Import and add to `src/pages/index.astro`
3. Optionally add a toggle in `src/config.ts`

## 🚀 Deployment

### Build for Production

```bash
pnpm build
```

Output is generated in `dist/` directory.

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/lauroguedes/bloomfolio)

1. Connect your GitHub repository
2. Vercel auto-detects Astro
3. Deploy!

### Deploy to Netlify

1. Connect your repository
2. Build command: `pnpm build`
3. Publish directory: `dist`

### Deploy to Cloudflare Pages

1. Connect your repository
2. Build command: `pnpm build`
3. Build output directory: `dist`

### Other Platforms

Bloomfolio works with any static hosting platform that supports Node.js builds:
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting
- Render
- Railway

## 🛠️ Tech Stack

- **[Astro 5](https://astro.build)** - Static site generator
- **[Tailwind CSS 4](https://tailwindcss.com)** - Utility-first CSS framework
- **[DaisyUI 5](https://daisyui.com)** - Component library for Tailwind
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[MDX](https://mdxjs.com/)** - Enhanced Markdown
- **[Keystatic](https://keystatic.com)** - Git-based CMS for content management
- **[Lucide Icons](https://lucide.dev/)** - Icon library

## 📚 Documentation

- **[Complete Guide](https://bloomfolio-astro.vercel.app/blog/guides/bloomfolio-complete-guide)** - Comprehensive setup and customization guide
- **[Content Collections Guide](https://bloomfolio-astro.vercel.app/blog/guides/content-collections-guide)** - Learn about Astro Content Collections
- **[Markdown Guide](https://bloomfolio-astro.vercel.app/blog/guides/markdown-guide)** - Master Markdown and MDX syntax
- **[Astro Docs](https://docs.astro.build)** - Official Astro documentation
- **[Tailwind CSS Docs](https://tailwindcss.com/docs)** - Tailwind CSS documentation
- **[DaisyUI Docs](https://daisyui.com/docs)** - DaisyUI component documentation

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Astro](https://astro.build)
- Styled with [Tailwind CSS](https://tailwindcss.com) and [DaisyUI](https://daisyui.com)
- Icons from [Lucide](https://lucide.dev)
- Inspired by modern portfolio designs and the developer community

## 💬 Support

- 📖 [Documentation](https://bloomfolio-astro.vercel.app/blog/guides/bloomfolio-complete-guide)
- 🐛 [Report Issues](https://github.com/lauroguedes/bloomfolio/issues)
- 💬 [Discussions](https://github.com/lauroguedes/bloomfolio/discussions)

---
Please if you find this project helpful, consider giving it a ⭐ on GitHub!

Crafted by an Artisan ⛏️ [Lauro Guedes](https://lauroguedes.dev)
