# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `npm run dev` (runs on localhost:3000)
- **Build for production**: `npm run build`
- **Preview production build**: `npm run preview`
- **Install dependencies**: `npm install`

## Project Architecture

This is a React single-page application for a social insurance labor consultant office (社会保険労務士事務所) built with:

- **Frontend**: React 19.1.1 with TypeScript
- **Routing**: React Router DOM (HashRouter for static deployment)
- **Styling**: Tailwind CSS (CDN version configured in index.html)
- **Build Tool**: Vite 6.2.0
- **Deployment**: Vercel (https://sharoushi-sample.vercel.app/)

### Key Architecture Features

**Routing Configuration**: Uses HashRouter for static hosting compatibility with these routes:
- `/` → Home page (single-page with multiple sections)
- `/tos` → Terms of Service
- `/privacy` → Privacy Policy
- `/sct` → Specified Commercial Transactions

**Styling System**:
- Tailwind CSS loaded via CDN with custom theme in index.html
- Custom colors: primary (#0284c7), primary-dark (#0369a1), secondary (#f0f9ff), accent (#fbbf24)
- Japanese typography: Noto Sans JP font
- Responsive design with mobile-first approach

**Section Structure**: Homepage consists of full-screen sections:
- Hero section with call-to-action
- About section (office introduction + office details)
- Services section (6 services in 2×3 grid with image placeholders)
- Pricing section (3-tier pricing structure)
- FAQ section (collapsible accordion with Q&A format)
- Contact section (contact form with mock submission)

### Component Architecture

**Layout Components**:
- `Header.tsx`: Navigation with smooth scroll to sections, mobile hamburger menu
- `Footer.tsx`: Legal links with specific styling (small text, spaced layout)
- `ScrollToTop.tsx`: Utility for route change scroll reset

**Section Components**:
- `Hero.tsx`: Main landing section
- `About.tsx`: Office introduction with image placeholder for office photo
- `Services.tsx`: Business services with image support (6 services total)
- `FAQ.tsx`: Accordion-style FAQ with toggle functionality
- `Pricing.tsx`: Three pricing tiers
- `Contact.tsx`: Contact information and form (mock submission)

**Service Content Structure**: Services are ordered as:
1. Payroll calculation (給与計算)
2. Social insurance procedures (社会保険・労働保険の手続き)
3. Work rules creation (就業規則の作成・見直し)
4. Subsidy application support (助成金の申請サポート)
5. HR consultation (人事・労務相談)
6. Startup support (創業支援)

### Content Management

**Placeholder Content**: The site uses placeholder content with `◯◯` for office name and `X-X-X` for addresses. Key placeholders to replace:
- Office name: `◯◯社会保険労務士事務所`
- Representative name: `◯◯ ◯◯`
- Address: `東京都◯◯区◯◯ X-X-X`
- Registration info: `第XXXXXX号`

**Image Structure**:
- Office photo: `/images/office/office-main.jpg` (About section)
- Service images: `/images/services/[service-name].jpg` (6 service cards)
- OGP image: `/images/ogp/ogp-image.jpg` (social media sharing)

**OGP Configuration**: Full Open Graph and Twitter Cards setup in index.html with Japanese content optimized for social sharing.

### Development Notes

- Contact form shows placeholder alert (no backend integration)
- All sections use `min-h-screen flex items-start` for consistent layout
- FAQ uses Set-based state management for multi-expand accordion
- Header navigation includes smooth scroll with offset calculations
- Image components include error fallback to text placeholders
- Vercel deployment configured with alias management

### Build Requirements

After making significant changes, always run `npm run build` to verify TypeScript compilation and catch any build errors before deployment.

## Conversation Guidelines

Always communicate in Japanese (常に日本語で会話する) when working with this project.