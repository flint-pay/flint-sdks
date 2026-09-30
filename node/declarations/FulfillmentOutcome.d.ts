


export type FulfillmentOutcome = { "notes"?: string; /** Time the terminal outcome occurred. Format: date-time. */ "occurred_at": string; "outcome_type": "no_show" | (string & {}); "reason": "customer_no_show" | "provider_no_show" | "location_unavailable" | "scheduling_error" | "other" | (string & {}); };
