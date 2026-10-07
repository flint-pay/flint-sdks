
import type { MoneyValue } from './MoneyValue.js';

export type RefundLineItemAdjustmentRefund = { /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */ "amount_money": MoneyValue; "original_refund_line_item_adjustment_id": string; "refund_line_item_adjustment_refund_id": string; };
