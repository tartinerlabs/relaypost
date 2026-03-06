# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start dev server (Next.js on localhost:3000)
pnpm build        # Production build
pnpm lint         # Lint with Biome (biome check)
pnpm format       # Format with Biome (biome format --write)
```

No test framework is configured yet.

## Product

Relaypost is a B2B cross-platform social media scheduling and publishing tool. Users connect their social accounts and publish content to multiple platforms from a single dashboard.

### Target Audience

- Marketing teams at startups and SMBs
- Agencies managing multiple client accounts
- Founders and solo marketers

### Pricing Benchmarks

- Entry: $19-29/mo (3-15 accounts)
- Mid: $49/mo (10+ accounts, unlimited posts)
- Premium: $99/mo (unlimited everything, analytics, teams)

## Features (Priority Order)

### V1 — MVP

- Multi-platform publishing (compose once, publish to many)
- Platform-specific content customization (per-platform text/media tweaks)
- Post scheduling with calendar view
- Supported platforms: Twitter/X, LinkedIn, Bluesky, Threads (open APIs first)
- User authentication with team/org support
- Connected social accounts management (OAuth flows)

### V2

- Add Instagram, Facebook, TikTok, YouTube, Pinterest
- Analytics dashboard, AI captions, bulk scheduling, approval workflows

### V3

- REST API, webhooks, white-label/agency mode, advanced analytics

## Tech Stack

- **Framework**: Next.js 16 (App Router) + TypeScript + React Compiler
- **Styling**: Tailwind CSS v4
- **Components**: HeroUI v3
- **Database**: PostgreSQL via Neon, Drizzle ORM
- **Auth**: Better Auth (teams/orgs support)
- **Job Queue**: BullMQ (via Upstash Redis)
- **Media Storage**: Cloudflare R2 or AWS S3
- **Payments**: Stripe (subscriptions)
- **Hosting**: Vercel
- **Linting/Formatting**: Biome 2 (2-space indent, recommended rules, import organizing)
- **Package Manager**: pnpm

## Architecture

### Data Model (Core Entities)

- **User** — account, email, role
- **Organization** — team/company (B2B multi-tenancy)
- **SocialAccount** — connected platform accounts (OAuth tokens)
- **Post** — content, media, status (draft/scheduled/published/failed)
- **PostTarget** — per-platform variant of a post (custom text, platform-specific fields)
- **Schedule** — when to publish (datetime, timezone, recurrence)

### Key Flows

1. **Connect Account**: User OAuth flow -> store tokens in SocialAccount
2. **Create Post**: Compose content -> customize per platform -> save as draft or schedule
3. **Publish Post**: BullMQ picks up scheduled job -> calls platform APIs -> updates status
4. **Retry on Failure**: Failed posts auto-retry with exponential backoff

### Project Structure

```
src/
  app/                    # Next.js App Router pages
    (marketing)/          # Landing page, pricing, docs
    (dashboard)/          # Authenticated app
      posts/              # Post composer, list, calendar
      accounts/           # Connected social accounts
      settings/           # Team, billing, profile
    api/                  # API routes
  components/             # Shared UI components
  lib/
    auth/                 # Better Auth config
    db/                   # Drizzle schema, migrations, queries
    platforms/            # Platform-specific API adapters
      twitter.ts
      linkedin.ts
      bluesky.ts
      threads.ts
    queue/                # BullMQ job definitions
    stripe/               # Stripe billing helpers
  types/                  # Shared TypeScript types
```

Path alias: `@/*` maps to `./src/*`

## Conventions

- Use Server Components by default; add `"use client"` only when needed
- Colocate components with their routes when route-specific
- Use Drizzle for all database access (no raw SQL)
- Platform API adapters must implement a common interface (`connect`, `publish`, `delete`, `getMetrics`)
- All dates stored as UTC; convert to user timezone in the UI
- Conventional commits (`feat:`, `fix:`, `chore:`, etc.)
- Biome handles both linting and formatting — no ESLint/Prettier
