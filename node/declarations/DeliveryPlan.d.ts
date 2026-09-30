


export type DeliveryPlan = { /** RFC3339 timestamp. Format: date-time. */ "complete_by_at"?: string; /** RFC3339 timestamp. Format: date-time. */ "first_arrival_at"?: string; "planned_delivery_count"?: number; "type": "single_delivery" | "multiple_deliveries" | (string & {}); };
