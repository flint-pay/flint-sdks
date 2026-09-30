


export type PaymentFulfillmentHoldInput = { "reason": "external_payment_hold" | "external_payment_hold_released"; /** RFC3339 timestamp. Format: date-time. */ "released_at"?: string | globalThis.Date; /** RFC3339 timestamp. Format: date-time. */ "requested_at": string | globalThis.Date; "required_action": "pause_fulfillment" | "reevaluate_fulfillment"; "status": "active" | "released"; /** RFC3339 timestamp. Format: date-time. */ "updated_at": string | globalThis.Date; };
