import { createBaseAdapter } from "./base";
import type { PlatformAdapter, PlatformConfig } from "./types";

const config: PlatformConfig = {
  name: "LinkedIn",
  platform: "linkedin",
  maxCharacters: 3000,
  maxMediaAttachments: 9,
  supportedMediaTypes: [
    "image/jpeg",
    "image/png",
    "image/gif",
    "video/mp4",
    "video/quicktime",
  ],
  maxImageSizeBytes: 10 * 1024 * 1024,
  maxVideoSizeBytes: 200 * 1024 * 1024,
  requiredScopes: ["openid", "profile", "w_member_social"],
  rateLimits: {
    postsPerDay: 100,
    requestsPerMinute: 100,
  },
};

export const linkedinAdapter: PlatformAdapter = createBaseAdapter(config);
