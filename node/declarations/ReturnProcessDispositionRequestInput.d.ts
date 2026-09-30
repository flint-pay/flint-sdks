


export type ReturnProcessDispositionRequestInput = { "disposition_type": "sellable" | "quality_control" | "damaged" | "quarantined" | "repair" | "refurbish" | "liquidate" | "donate" | "discard" | "return_to_buyer" | "lost"; /** Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255. */ "external_reference_id"?: string; "inventory_location_id"?: string; "metadata"?: Record<string, string>; /** RFC3339 timestamp. Format: date-time. */ "occurred_at": string | globalThis.Date; "reason": "inspection_result" | "return_policy" | "warehouse_override" | "safety_requirement" | "other"; "reason_message"?: string; };
