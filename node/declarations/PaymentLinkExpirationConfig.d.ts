


export type PaymentLinkExpirationConfig = { /** Optional URL to send buyers to after the checkout session expires. maxLength: 2048. */ "expiration_url"?: string; /** Duration in seconds before the checkout session expires after creation. Use an exact numeric string, not a floating-point number. Format: int64. minimum: 60. maximum: 86400. */ "expires_in_seconds"?: string; };
