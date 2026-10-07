
import type { MoneyValue } from './MoneyValue.js';
import type { RefundAdjustmentReason } from './RefundAdjustmentReason.js';

export type RefundLineItemAdjustment = { "adjustment_type": "restocking_fee" | "withheld_amount" | "refund_adjustment" | "tax_adjustment" | (string & {}); "amount_money": MoneyValue; "applies_to": string; "reason": RefundAdjustmentReason; "refund_line_item_adjustment_id": string; /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */ "refunded_money": MoneyValue; /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */ "remaining_money": MoneyValue; };
