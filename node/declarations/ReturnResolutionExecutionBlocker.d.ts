


export type ReturnResolutionExecutionBlocker = { "code": "handoff_pending" | "receipt_pending" | "inspection_pending" | "manual_release_pending" | "buyer_payment_pending" | "refund_pending" | "replacement_order_pending" | "fulfillment_pending" | "credit_effect_pending" | (string & {}); "linked_resource_id"?: string; "linked_resource_type"?: "refund" | "payment_intent" | "order" | "fulfillment" | "credit_transaction" | (string & {}); "return_line_item_id"?: string; };
