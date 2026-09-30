
import type { MoneyValueInput } from './MoneyValueInput.js';

export type CreateCreditNoteRefundRequestInput = { "amount_money"?: MoneyValueInput; /** Use an exact numeric string, not a floating-point number. Format: int64. minimum: 1. */ "expected_version"?: string; "reason": "duplicate" | "fraudulent" | "requested_by_customer" | "defective_product" | "wrong_item_shipped" | "never_received" | "not_as_described" | "arrived_too_late" | "customer_changed_mind" | "better_price_found" | "accidental_order" | "other"; "reason_message"?: string; };
