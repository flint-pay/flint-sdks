


export type DeliveryPlanInput = { /** RFC3339 timestamp. Format: date-time. */ "complete_by_at"?: string | globalThis.Date; /** RFC3339 timestamp. Format: date-time. */ "first_arrival_at"?: string | globalThis.Date; "planned_delivery_count"?: number; "type": "single_delivery" | "multiple_deliveries"; };
