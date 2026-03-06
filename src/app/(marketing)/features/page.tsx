import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Features - Relaypost",
  description:
    "Cross-platform publishing, per-platform customization, visual scheduling, and team collaboration. Everything you need in one tool.",
};

const categories = [
  {
    title: "Publishing",
    features: [
      {
        title: "Cross-Platform Publishing",
        description:
          "Write once and publish to Twitter/X, LinkedIn, Bluesky, and Threads simultaneously. No more copy-pasting between apps.",
      },
      {
        title: "Per-Platform Customization",
        description:
          "Tailor each post per platform. Adjust text length, hashtags, mentions, and media to fit each network's best practices.",
      },
      {
        title: "Draft & Preview",
        description:
          "Preview how your post will look on each platform before publishing. Save drafts to come back to later.",
      },
    ],
  },
  {
    title: "Scheduling",
    features: [
      {
        title: "Visual Calendar",
        description:
          "See your entire publishing schedule in a calendar view. Drag and drop to reschedule posts effortlessly.",
      },
      {
        title: "Timezone Support",
        description:
          "Schedule posts in any timezone. We convert and publish at exactly the right time for your audience.",
      },
      {
        title: "Auto-Retry on Failure",
        description:
          "If a post fails to publish, we automatically retry with exponential backoff and notify you if it still can't go through.",
      },
    ],
  },
  {
    title: "Collaboration",
    features: [
      {
        title: "Team Workspaces",
        description:
          "Invite team members and manage multiple brands from a single workspace with role-based permissions.",
      },
      {
        title: "Multi-Account Management",
        description:
          "Connect and manage multiple social accounts per platform. Perfect for agencies handling several clients.",
      },
      {
        title: "Organization Support",
        description:
          "Built for B2B from the ground up. Create organizations, manage billing centrally, and keep everything organized.",
      },
    ],
  },
  {
    title: "Platforms",
    features: [
      {
        title: "Twitter / X",
        description:
          "Full support for tweets, threads, and media attachments. Character count validation included.",
      },
      {
        title: "LinkedIn",
        description:
          "Publish to personal profiles and company pages. Support for articles, images, and documents.",
      },
      {
        title: "Bluesky",
        description:
          "Native AT Protocol integration. Publish posts with rich text, links, and images.",
      },
      {
        title: "Threads",
        description:
          "Publish to Meta's Threads platform. Support for text, images, and reply threads.",
      },
    ],
  },
];

export default function FeaturesPage() {
  return (
    <>
      {/* Header */}
      <section className="mx-auto max-w-6xl px-6 pt-24 pb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Built for modern social teams
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Everything you need to publish, schedule, and collaborate across
          platforms.
        </p>
      </section>

      {/* Feature categories */}
      {categories.map((category) => (
        <section
          key={category.title}
          className="border-t border-border/50 py-20"
        >
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="mb-12 text-2xl font-bold tracking-tight">
              {category.title}
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {category.features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-border/50 bg-card p-8"
                >
                  <h3 className="text-base font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="border-t border-border/50 bg-muted/30 py-24 text-center">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold tracking-tight">
            Ready to get started?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Try Relaypost free for 7 days. No credit card required.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Button size="lg" render={<Link href="/sign-up" />}>
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              render={<Link href="/pricing" />}
            >
              View Pricing
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
