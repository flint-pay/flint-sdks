
import type { MoneyValue } from './MoneyValue.js';

export type RefundGiftCardDestination = { /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */ "amount_money": MoneyValue; "gift_card_id": string; };
