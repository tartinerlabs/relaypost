import { PlatformError } from "./errors";
import type {
  OAuthCredentials,
  PlatformAdapter,
  PlatformConfig,
  PostMetrics,
  PublishPayload,
  PublishResult,
  SocialAccountInfo,
} from "./types";

function notImplemented(method: string, platform: string): never {
  throw new PlatformError(`Not implemented: ${method}`, platform);
}

export function createBaseAdapter(config: PlatformConfig): PlatformAdapter {
  return {
    config,

    getAuthUrl(_redirectUri: string, _state: string): Promise<string> {
      throw notImplemented("getAuthUrl", config.platform);
    },

    exchangeCodeForTokens(
      _code: string,
      _redirectUri: string,
    ): Promise<OAuthCredentials> {
      throw notImplemented("exchangeCodeForTokens", config.platform);
    },

    refreshTokens(_credentials: OAuthCredentials): Promise<OAuthCredentials> {
      throw notImplemented("refreshTokens", config.platform);
    },

    getAccountInfo(_credentials: OAuthCredentials): Promise<SocialAccountInfo> {
      throw notImplemented("getAccountInfo", config.platform);
    },

    publish(
      _credentials: OAuthCredentials,
      _payload: PublishPayload,
    ): Promise<PublishResult> {
      throw notImplemented("publish", config.platform);
    },

    deletePost(
      _credentials: OAuthCredentials,
      _platformPostId: string,
    ): Promise<void> {
      throw notImplemented("deletePost", config.platform);
    },

    getMetrics(
      _credentials: OAuthCredentials,
      _platformPostId: string,
    ): Promise<PostMetrics> {
      throw notImplemented("getMetrics", config.platform);
    },

    validateContent(payload: PublishPayload): {
      valid: boolean;
      errors: string[];
    } {
      const errors: string[] = [];

      if (payload.content.length > config.maxCharacters) {
        errors.push(
          `Content exceeds ${config.maxCharacters} character limit (${payload.content.length} characters)`,
        );
      }

      if (payload.media && payload.media.length > config.maxMediaAttachments) {
        errors.push(
          `Too many media attachments: ${payload.media.length} (max ${config.maxMediaAttachments})`,
        );
      }

      if (payload.media) {
        for (const attachment of payload.media) {
          if (
            attachment.mimeType &&
            !config.supportedMediaTypes.includes(attachment.mimeType)
          ) {
            errors.push(`Unsupported media type: ${attachment.mimeType}`);
          }
        }
      }

      return { valid: errors.length === 0, errors };
    },
  };
}
