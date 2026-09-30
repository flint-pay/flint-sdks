


export type FulfillmentHold = { /** Time the hold became active. Format: date-time. */ "created_at": string; "display_reason"?: string; "held_by"?: string; "reason": "payment_review" | "inventory_issue" | "address_issue" | "customer_request" | "provider_issue" | "scheduling_issue" | "fraud_review" | "other" | (string & {}); "reason_notes"?: string; };
