
import type { MoneyValue } from './MoneyValue.js';

export type GiftCardPurchaseRefundRecoveryDestination = { "gift_card_id": string; "gift_card_load_id": string; /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */ "value_money": MoneyValue; };
