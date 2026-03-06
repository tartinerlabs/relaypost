export type Platform = "twitter" | "linkedin" | "bluesky" | "threads";

export interface OAuthCredentials {
  accessToken: string;
  refreshToken?: string;
  tokenExpiresAt?: Date;
}

export interface SocialAccountInfo {
  platformAccountId: string;
  platformUsername: string;
  displayName: string;
  avatarUrl?: string;
}

export interface MediaAttachment {
  url: string;
  type: "image" | "video" | "gif";
  altText?: string;
  mimeType?: string;
}

export interface PublishPayload {
  content: string;
  media?: MediaAttachment[];
  replyToId?: string;
  metadata?: Record<string, unknown>;
}

export interface PublishResult {
  platformPostId: string;
  url: string;
  publishedAt: Date;
}

export interface PostMetrics {
  likes: number;
  reposts: number;
  replies: number;
  impressions?: number;
  clicks?: number;
  retrievedAt: Date;
}

export interface PlatformConfig {
  name: string;
  platform: Platform;
  maxCharacters: number;
  maxMediaAttachments: number;
  supportedMediaTypes: string[];
  maxVideoSizeBytes?: number;
  maxImageSizeBytes?: number;
  requiredScopes: string[];
  rateLimits: {
    postsPerHour?: number;
    postsPerDay?: number;
    requestsPerMinute?: number;
  };
}

export interface PlatformAdapter {
  readonly config: PlatformConfig;

  getAuthUrl(redirectUri: string, state: string): Promise<string>;
  exchangeCodeForTokens(
    code: string,
    redirectUri: string,
  ): Promise<OAuthCredentials>;
  refreshTokens(credentials: OAuthCredentials): Promise<OAuthCredentials>;

  getAccountInfo(credentials: OAuthCredentials): Promise<SocialAccountInfo>;

  publish(
    credentials: OAuthCredentials,
    payload: PublishPayload,
  ): Promise<PublishResult>;
  deletePost(
    credentials: OAuthCredentials,
    platformPostId: string,
  ): Promise<void>;

  getMetrics(
    credentials: OAuthCredentials,
    platformPostId: string,
  ): Promise<PostMetrics>;

  validateContent(payload: PublishPayload): {
    valid: boolean;
    errors: string[];
  };
}
