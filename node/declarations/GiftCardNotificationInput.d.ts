


export type GiftCardNotificationInput = { /** RFC3339 timestamp. Format: date-time. */ "created_at"?: never; /** Included on notification retrieval. Contains the most recent sending attempts and signed provider outcomes, newest first. A failed attempt describes the send call; use notification.status to determine whether acceptance remains unconfirmed. */ "delivery"?: never; "gift_card_id"?: never; "gift_card_notification_id"?: never; "recipient"?: never; "resend_of_notification_id"?: never; /** RFC3339 timestamp. Format: date-time. */ "sent_at"?: never; "status"?: never; /** RFC3339 timestamp. Format: date-time. */ "updated_at"?: never; /** Use an exact numeric string, not a floating-point number. Format: int64. */ "version"?: never; };
