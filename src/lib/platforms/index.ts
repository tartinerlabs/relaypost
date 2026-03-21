import { blueskyAdapter } from "./bluesky";
import { linkedinAdapter } from "./linkedin";
import { threadsAdapter } from "./threads";
import { twitterAdapter } from "./twitter";
import type { Platform, PlatformAdapter } from "./types";

const adapters: Record<Platform, PlatformAdapter> = {
  twitter: twitterAdapter,
  linkedin: linkedinAdapter,
  bluesky: blueskyAdapter,
  threads: threadsAdapter,
};

export function getAdapter(platform: Platform): PlatformAdapter {
  const adapter = adapters[platform];
  if (!adapter) {
    throw new Error(`No adapter found for platform: ${platform}`);
  }
  return adapter;
}

export { adapters };
export {
  AuthError,
  ContentValidationError,
  PlatformError,
  RateLimitError,
} from "./errors";
export type {
  MediaAttachment,
  OAuthCredentials,
  Platform,
  PlatformAdapter,
  PlatformConfig,
  PostMetrics,
  PublishPayload,
  PublishResult,
  SocialAccountInfo,
} from "./types";
