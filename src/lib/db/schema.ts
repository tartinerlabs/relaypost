import {
  boolean,
  pgEnum,
  pgTable,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

// --- Enums ---

export const memberRoleEnum = pgEnum("member_role", [
  "owner",
  "admin",
  "member",
]);

export const platformEnum = pgEnum("platform", [
  "twitter",
  "linkedin",
  "bluesky",
  "threads",
]);

export const postStatusEnum = pgEnum("post_status", [
  "draft",
  "scheduled",
  "publishing",
  "published",
  "failed",
]);

// --- Users ---

export const users = pgTable("users", {
  id: uuid().primaryKey().defaultRandom(),
  name: text().notNull(),
  email: text().notNull().unique(),
  emailVerified: boolean().default(false),
  image: text(),
  createdAt: timestamp({ withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp({ withTimezone: true }).notNull().defaultNow(),
});

// --- Organizations ---

export const organizations = pgTable("organizations", {
  id: uuid().primaryKey().defaultRandom(),
  name: text().notNull(),
  slug: text().notNull().unique(),
  logo: text(),
  createdAt: timestamp({ withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp({ withTimezone: true }).notNull().defaultNow(),
});

export const members = pgTable("members", {
  id: uuid().primaryKey().defaultRandom(),
  userId: uuid()
    .notNull()
    .references(() => users.id),
  organizationId: uuid()
    .notNull()
    .references(() => organizations.id),
  role: memberRoleEnum().notNull().default("member"),
  createdAt: timestamp({ withTimezone: true }).notNull().defaultNow(),
});

// --- Social Accounts ---

export const socialAccounts = pgTable("social_accounts", {
  id: uuid().primaryKey().defaultRandom(),
  organizationId: uuid()
    .notNull()
    .references(() => organizations.id),
  platform: platformEnum().notNull(),
  platformAccountId: text().notNull(),
  platformUsername: text(),
  displayName: text(),
  accessToken: text().notNull(),
  refreshToken: text(),
  tokenExpiresAt: timestamp({ withTimezone: true }),
  avatarUrl: text(),
  createdAt: timestamp({ withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp({ withTimezone: true }).notNull().defaultNow(),
});

// --- Posts ---

export const posts = pgTable("posts", {
  id: uuid().primaryKey().defaultRandom(),
  organizationId: uuid()
    .notNull()
    .references(() => organizations.id),
  authorId: uuid()
    .notNull()
    .references(() => users.id),
  content: text(),
  status: postStatusEnum().notNull().default("draft"),
  scheduledAt: timestamp({ withTimezone: true }),
  publishedAt: timestamp({ withTimezone: true }),
  createdAt: timestamp({ withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp({ withTimezone: true }).notNull().defaultNow(),
});

export const postTargets = pgTable("post_targets", {
  id: uuid().primaryKey().defaultRandom(),
  postId: uuid()
    .notNull()
    .references(() => posts.id),
  socialAccountId: uuid()
    .notNull()
    .references(() => socialAccounts.id),
  platformPostId: text(),
  customContent: text(),
  status: postStatusEnum().notNull().default("draft"),
  publishedAt: timestamp({ withTimezone: true }),
  errorMessage: text(),
  createdAt: timestamp({ withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp({ withTimezone: true }).notNull().defaultNow(),
});
