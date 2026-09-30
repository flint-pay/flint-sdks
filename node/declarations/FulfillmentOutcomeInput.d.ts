


export type FulfillmentOutcomeInput = { "notes"?: string; /** Time the terminal outcome occurred. Format: date-time. */ "occurred_at": string | globalThis.Date; "outcome_type": "no_show"; "reason": "customer_no_show" | "provider_no_show" | "location_unavailable" | "scheduling_error" | "other"; };
