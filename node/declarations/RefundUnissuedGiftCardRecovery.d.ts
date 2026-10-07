
import type { MoneyValue } from './MoneyValue.js';

export type RefundUnissuedGiftCardRecovery = { "order_id": string; "order_line_item_id": string; "payment_intent_id": string; "purchase_refund_allocation_id": string; /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */ "returned_amount_money": MoneyValue; "settlement_allocation_id": string; /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */ "source_pending_amount_money": MoneyValue; /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */ "source_remaining_amount_money": MoneyValue; };
