import { createBaseAdapter } from "./base";
import type { PlatformAdapter, PlatformConfig } from "./types";

const config: PlatformConfig = {
  name: "Twitter / X",
  platform: "twitter",
  maxCharacters: 280,
  maxMediaAttachments: 4,
  supportedMediaTypes: [
    "image/jpeg",
    "image/png",
    "image/gif",
    "image/webp",
    "video/mp4",
  ],
  maxImageSizeBytes: 5 * 1024 * 1024,
  maxVideoSizeBytes: 512 * 1024 * 1024,
  requiredScopes: ["tweet.read", "tweet.write", "users.read", "offline.access"],
  rateLimits: {
    postsPerDay: 2400,
    requestsPerMinute: 300,
  },
};

export const twitterAdapter: PlatformAdapter = createBaseAdapter(config);
