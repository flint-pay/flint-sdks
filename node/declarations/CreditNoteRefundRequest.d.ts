
import type { MoneyValue } from './MoneyValue.js';

export type CreditNoteRefundRequest = { "amount_money"?: MoneyValue; "reason": "duplicate" | "fraudulent" | "requested_by_customer" | "defective_product" | "wrong_item_shipped" | "never_received" | "not_as_described" | "arrived_too_late" | "customer_changed_mind" | "better_price_found" | "accidental_order" | "other" | (string & {}); "reason_message"?: string; };
