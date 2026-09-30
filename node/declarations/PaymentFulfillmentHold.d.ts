


export type PaymentFulfillmentHold = { "reason": "external_payment_hold" | "external_payment_hold_released" | (string & {}); /** RFC3339 timestamp. Format: date-time. */ "released_at"?: string; /** RFC3339 timestamp. Format: date-time. */ "requested_at": string; "required_action": "pause_fulfillment" | "reevaluate_fulfillment" | (string & {}); "status": "active" | "released" | (string & {}); /** RFC3339 timestamp. Format: date-time. */ "updated_at": string; };
