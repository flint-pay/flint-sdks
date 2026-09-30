


export type ReturnLineItemRequestInput = { "buyer_note"?: string; "fulfillment_id"?: string; "order_line_item_id": string; /** Whole-number quantity; fractional quantities are not supported. Use an exact numeric string, not a floating-point number. Format: int64. */ "requested_quantity": string; "requested_resolution_type"?: "refund" | "exchange" | "replacement" | "no_monetary_action"; "return_reason_id": string; };
