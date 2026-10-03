


export type GiftCardNotificationProviderOutcome = { "delivery_attempt_id": string; "kind": "processed" | "delivered" | "bounce" | "dropped" | (string & {}); /** RFC3339 timestamp. Format: date-time. */ "occurred_at": string; /** RFC3339 timestamp. Format: date-time. */ "received_at": string; };
