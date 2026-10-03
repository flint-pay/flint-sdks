


export type GiftCardNotificationRecipient = { /** Format: email. maxLength: 254. */ "email": string; /** maxLength: 200. */ "message"?: string; /** maxLength: 255. */ "name"?: string; /** Optional whole-second send time between now and 90 days from now. Format: date-time. */ "send_at"?: string; };
