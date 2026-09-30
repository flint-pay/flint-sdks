
import type { MoneyValue } from './MoneyValue.js';

export type ExpandedPayoutSummary = { "amount_money": MoneyValue; /** RFC3339 timestamp. Format: date-time. */ "arrival_at"?: string; "balance_source_type"?: "card" | "bank_account" | "fpx" | (string & {}); /** RFC3339 timestamp. Format: date-time. */ "created_at"?: string; /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */ "currency": string; "method": "standard" | (string & {}); "payout_destination_id"?: string; "payout_id": string; "reversal_status": "none" | "reversing" | "reversed" | (string & {}); "status": "pending" | "in_transit" | "paid" | "failed" | "canceled" | (string & {}); /** RFC3339 timestamp. Format: date-time. */ "updated_at"?: string; };
