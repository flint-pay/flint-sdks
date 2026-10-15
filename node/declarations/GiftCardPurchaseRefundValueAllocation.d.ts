
import type { MoneyValue } from './MoneyValue.js';

export type GiftCardPurchaseRefundValueAllocation = { /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */ "amount_money": MoneyValue; "gift_card_id": string; "gift_card_load_id": string; };
