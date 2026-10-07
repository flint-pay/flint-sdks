
import type { MoneyValue } from './MoneyValue.js';

export type OrderReturnCreditSettlement = { /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */ "amount_money": MoneyValue; /** RFC3339 timestamp. Format: date-time. */ "created_at": string; "return_id": string; "return_resolution_id": string; };
