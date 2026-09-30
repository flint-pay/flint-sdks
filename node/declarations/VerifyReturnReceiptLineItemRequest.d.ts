


export type VerifyReturnReceiptLineItemRequest = { /** Use an exact numeric string, not a floating-point number. Format: int64. minimum: 1. */ "expected_version"?: string; "return_line_item_id": string; "verification_reason": "order_match_confirmed" | "sku_match_confirmed" | "inspection_confirmed" | "merchant_review" | "other" | (string & {}); "verification_reason_message"?: string; };
