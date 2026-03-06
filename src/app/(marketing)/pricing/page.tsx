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
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Pricing - Relaypost",
  description:
    "Simple, transparent pricing. Start with a 7-day free trial. Plans from $19/mo.",
};

const plans = [
  {
    name: "Starter",
    price: 19,
    annualPrice: 16,
    description: "For solo creators and founders getting started.",
    features: [
      "3 social accounts",
      "50 scheduled posts/month",
      "Basic scheduling calendar",
      "Per-platform customization",
      "Email support",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Growth",
    price: 49,
    annualPrice: 41,
    description: "For growing teams managing multiple brands.",
    features: [
      "10 social accounts",
      "Unlimited scheduled posts",
      "Visual scheduling calendar",
      "Per-platform customization",
      "Team collaboration (3 members)",
      "Priority support",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Premium",
    price: 99,
    annualPrice: 82,
    description: "For agencies and teams who need it all.",
    features: [
      "Unlimited social accounts",
      "Unlimited scheduled posts",
      "Visual scheduling calendar",
      "Per-platform customization",
      "Unlimited team members",
      "Analytics dashboard",
      "Approval workflows",
      "Dedicated support",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
];

const faqs = [
  {
    question: "How does the free trial work?",
    answer:
      "Every plan includes a 7-day free trial. No credit card required. You get full access to all features in your chosen plan during the trial.",
  },
  {
    question: "Can I switch plans later?",
    answer:
      "Yes, you can upgrade or downgrade at any time. Changes take effect at your next billing cycle. Upgrades are prorated.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards via Stripe. Annual plans are billed upfront.",
  },
  {
    question: "What's your cancellation policy?",
    answer:
      "You can cancel anytime from your account settings. Your plan stays active until the end of the billing period. No hidden fees.",
  },
  {
    question: "Do you offer custom plans?",
    answer:
      "Yes! If you need a custom setup for your agency or enterprise, reach out to our sales team and we'll put together a plan that works for you.",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Header */}
      <section className="mx-auto max-w-6xl px-6 pt-24 pb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Simple, transparent pricing
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Start free for 7 days. No credit card required.
        </p>
      </section>

      {/* Plans */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={plan.popular ? "relative ring-2 ring-primary" : ""}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge>Most Popular</Badge>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-muted-foreground">/mo</span>
                  <p className="mt-1 text-xs text-muted-foreground">
                    ${plan.annualPrice}/mo billed annually (save ~17%)
                  </p>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm"
                    >
                      <svg
                        aria-hidden="true"
                        className="mt-0.5 size-4 shrink-0 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                  render={<Link href="/sign-up" />}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="border-y border-border/50 bg-muted/30 py-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-2xl font-bold tracking-tight">
            Need a custom plan?
          </h2>
          <p className="mt-3 text-muted-foreground">
            For agencies and enterprises with specific requirements.
          </p>
          <div className="mt-6">
            <Button
              variant="outline"
              size="lg"
              render={<Link href="/contact" />}
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight">
            Billing FAQ
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
    </>
  );
}
