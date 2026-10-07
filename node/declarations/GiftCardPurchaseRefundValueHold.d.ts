
import type { MoneyValue } from './MoneyValue.js';

export type GiftCardPurchaseRefundValueHold = { "purchase_refund_allocation_id": string; "refund_id": string; "root_gift_card_id": string; "root_gift_card_load_id": string; /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */ "value_money": MoneyValue; };
