import { createBaseAdapter } from "./base";
import type { PlatformAdapter, PlatformConfig } from "./types";

const config: PlatformConfig = {
  name: "Threads",
  platform: "threads",
  maxCharacters: 500,
  maxMediaAttachments: 10,
  supportedMediaTypes: [
    "image/jpeg",
    "image/png",
    "image/gif",
    "image/webp",
    "video/mp4",
    "video/quicktime",
  ],
  maxImageSizeBytes: 8 * 1024 * 1024,
  maxVideoSizeBytes: 1024 * 1024 * 1024,
  requiredScopes: [
    "threads_basic",
    "threads_content_publish",
    "threads_manage_replies",
  ],
  rateLimits: {
    postsPerDay: 250,
    requestsPerMinute: 200,
  },
};

export const threadsAdapter: PlatformAdapter = createBaseAdapter(config);
