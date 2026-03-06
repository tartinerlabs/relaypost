export class PlatformError extends Error {
  constructor(
    message: string,
    public readonly platform: string,
    public readonly statusCode?: number,
    public readonly originalError?: unknown,
  ) {
    super(message);
    this.name = "PlatformError";
  }
}

export class RateLimitError extends PlatformError {
  constructor(
    platform: string,
    public readonly retryAfterSeconds?: number,
  ) {
    super(`Rate limit exceeded for ${platform}`, platform, 429);
    this.name = "RateLimitError";
  }
}

export class AuthError extends PlatformError {
  constructor(platform: string, message = "Authentication failed") {
    super(message, platform, 401);
    this.name = "AuthError";
  }
}

export class ContentValidationError extends PlatformError {
  constructor(
    platform: string,
    public readonly errors: string[],
  ) {
    super(`Content validation failed: ${errors.join(", ")}`, platform);
    this.name = "ContentValidationError";
  }
}
