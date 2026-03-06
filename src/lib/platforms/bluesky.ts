import { createBaseAdapter } from "./base";
import type { PlatformAdapter, PlatformConfig } from "./types";

const config: PlatformConfig = {
  name: "Bluesky",
  platform: "bluesky",
  maxCharacters: 300,
  maxMediaAttachments: 4,
  supportedMediaTypes: ["image/jpeg", "image/png", "image/gif", "image/webp"],
  maxImageSizeBytes: 1 * 1024 * 1024,
  requiredScopes: [],
  rateLimits: {
    postsPerHour: 1500,
    postsPerDay: 10000,
    requestsPerMinute: 300,
  },
};

export const blueskyAdapter: PlatformAdapter = createBaseAdapter(config);
