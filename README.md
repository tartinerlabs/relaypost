# Relaypost

B2B cross-platform social media scheduling and publishing tool. Compose once, publish to multiple platforms from a single dashboard.

## Getting Started

```bash
bun install
bun run skills:install   # Restore agent skills
bun run dev              # Start dev server at http://localhost:3000
```

## Commands

```bash
bun run dev              # Start dev server
bun run build            # Production build
bun run lint             # Lint with Biome
bun run format           # Format with Biome
bun run skills:install   # Restore skills from skills-lock.json
```

## Tech Stack

- **Framework**: Next.js 16 (App Router) + TypeScript + React Compiler
- **Styling**: Tailwind CSS v4 + HeroUI v3
- **Database**: PostgreSQL via Neon + Drizzle ORM
- **Auth**: Better Auth (teams/orgs)
- **Job Queue**: BullMQ via Upstash Redis
- **Payments**: Stripe
- **Hosting**: Vercel

## Supported Platforms (V1)

Twitter/X, LinkedIn, Bluesky, Threads
