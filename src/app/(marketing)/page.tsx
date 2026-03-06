import type { Metadata } from "next";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Relaypost - Cross-Platform Social Media Scheduling",
  description:
    "Compose once, publish everywhere. Schedule and publish to Twitter/X, LinkedIn, Bluesky, and Threads from a single dashboard.",
};

const platforms = [
  { name: "Twitter / X", initial: "X" },
  { name: "LinkedIn", initial: "Li" },
  { name: "Bluesky", initial: "Bs" },
  { name: "Threads", initial: "Th" },
];

const features = [
  {
    title: "Cross-Platform Publishing",
    description:
      "Compose once and publish to Twitter/X, LinkedIn, Bluesky, and Threads simultaneously.",
  },
  {
    title: "Per-Platform Customization",
    description:
      "Tailor your message for each platform. Different text, media, and formatting per network.",
  },
  {
    title: "Visual Scheduling Calendar",
    description:
      "Plan your content with a drag-and-drop calendar. See your entire publishing schedule at a glance.",
  },
  {
    title: "Team Collaboration",
    description:
      "Invite your team, assign roles, and manage multiple brands from one workspace.",
  },
];

const steps = [
  {
    step: "1",
    title: "Connect",
    description: "Link your social accounts with a few clicks via OAuth.",
  },
  {
    step: "2",
    title: "Compose",
    description: "Write your post and customize it for each platform.",
  },
  {
    step: "3",
    title: "Publish",
    description: "Schedule or publish instantly. We handle the rest.",
  },
];

const faqs = [
  {
    question: "Which platforms are supported?",
    answer:
      "We currently support Twitter/X, LinkedIn, Bluesky, and Threads. Instagram, Facebook, TikTok, YouTube, and Pinterest are coming soon.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes! Every plan includes a 7-day free trial. No credit card required to get started.",
  },
  {
    question: "Can I customize posts per platform?",
    answer:
      "Absolutely. You can write a single post and then tweak the text, media, and formatting for each platform individually.",
  },
  {
    question: "Do you support teams?",
    answer:
      "Yes. Invite team members, assign roles, and manage multiple client accounts from a single workspace.",
  },
  {
    question: "What happens if a post fails to publish?",
    answer:
      "We automatically retry failed posts with exponential backoff. You'll be notified if a post can't be published after multiple attempts.",
  },
];

export default function LandingPage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-24 pb-20 text-center md:pt-32 md:pb-28">
        <Badge variant="outline" className="mb-6">
          Now in Beta
        </Badge>
        <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
          Publish to every platform from one place
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
          Compose once, customize per platform, and schedule your content across
          Twitter/X, LinkedIn, Bluesky, and Threads.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <Button size="lg" render={<Link href="/sign-up" />}>
            Start Free Trial
          </Button>
          <Button
            size="lg"
            variant="outline"
            render={<Link href="/features" />}
          >
            See Features
          </Button>
        </div>
      </section>

      {/* Platforms */}
      <section className="border-y border-border/50 bg-muted/30 py-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="mb-8 text-sm font-medium text-muted-foreground">
            Publish to all major platforms
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {platforms.map((p) => (
              <div
                key={p.name}
                className="flex items-center gap-3 text-muted-foreground"
              >
                <span className="flex size-10 items-center justify-center rounded-lg bg-foreground/10 text-sm font-bold">
                  {p.initial}
                </span>
                <span className="text-sm font-medium">{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Everything you need to manage social
          </h2>
          <p className="mt-4 text-muted-foreground">
            Powerful features to help you publish smarter, not harder.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-border/50 bg-card p-8"
            >
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="border-y border-border/50 bg-muted/30 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">How it works</h2>
            <p className="mt-4 text-muted-foreground">
              Get started in minutes. No complicated setup.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.step} className="text-center">
                <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  {s.step}
                </span>
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing preview */}
      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <h2 className="text-3xl font-bold tracking-tight">
          Simple, transparent pricing
        </h2>
        <p className="mt-4 text-muted-foreground">
          Start free for 7 days. Plans from $19/mo.
        </p>
        <div className="mt-8">
          <Button size="lg" render={<Link href="/pricing" />}>
            View Pricing
          </Button>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border/50 bg-muted/30 py-24">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight">
            Frequently asked questions
          </h2>
          <Accordion>
            {faqs.map((faq) => (
              <AccordionItem key={faq.question} value={faq.question}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>
                  <p>{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <h2 className="text-3xl font-bold tracking-tight">
          Ready to streamline your social media?
        </h2>
        <p className="mt-4 text-muted-foreground">
          Join teams who save hours every week with Relaypost.
        </p>
        <div className="mt-8">
          <Button size="lg" render={<Link href="/sign-up" />}>
            Start Free Trial
          </Button>
        </div>
      </section>
    </>
  );
}
