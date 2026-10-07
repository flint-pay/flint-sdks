
import type { MoneyValue } from './MoneyValue.js';

export type OrderGiftCardSettlement = { /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */ "amount_money": MoneyValue; /** RFC3339 timestamp. Format: date-time. */ "created_at": string; "gift_card_id": string; "gift_card_redemption_id": string; "last_characters": string; /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */ "tip_money": MoneyValue; };
