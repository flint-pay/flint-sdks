
import type { MoneyValueInput } from './MoneyValueInput.js';
import type { RefundAdjustmentReasonInput } from './RefundAdjustmentReasonInput.js';

export type RefundLineItemAdjustmentInput = { "adjustment_type": "restocking_fee" | "withheld_amount" | "refund_adjustment" | "tax_adjustment"; "amount_money": MoneyValueInput; "applies_to": string; "reason": RefundAdjustmentReasonInput; "refund_line_item_adjustment_id"?: never; /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */ "refunded_money"?: never; /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */ "remaining_money"?: never; };
