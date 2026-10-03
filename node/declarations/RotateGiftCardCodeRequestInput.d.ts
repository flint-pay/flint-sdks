


export type RotateGiftCardCodeRequestInput = { /** Use an exact numeric string, not a floating-point number. Format: int64. minimum: 1. */ "expected_version"?: string; /** Explicitly send or schedule the replacement code through private recipient access. Requires commerce.gift_cards.recipients.write in addition to secret replacement authority. */ "notification"?: { /** Format: email. maxLength: 254. */ "email": string; /** maxLength: 200. */ "message"?: string; /** maxLength: 255. */ "name"?: string; /** Optional whole-second send time between now and 90 days from now. Format: date-time. */ "send_at"?: string | globalThis.Date; }; };
