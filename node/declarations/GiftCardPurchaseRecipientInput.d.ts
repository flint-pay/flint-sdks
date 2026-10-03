


export type GiftCardPurchaseRecipientInput = { /** Format: email. minLength: 1. maxLength: 254. */ "email": string; /** maxLength: 200. */ "message"?: string; /** maxLength: 255. */ "name"?: string; /** Optional send time between now and 90 days from now. Omission requests immediate recipient notification after funding. Format: date-time. */ "send_at"?: string | globalThis.Date; };
