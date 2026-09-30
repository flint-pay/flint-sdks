
import type { MoneyValueInput } from './MoneyValueInput.js';

export type ExpandedPayoutSummaryInput = { "amount_money": MoneyValueInput; /** RFC3339 timestamp. Format: date-time. */ "arrival_at"?: string | globalThis.Date; "balance_source_type"?: "card" | "bank_account" | "fpx"; /** RFC3339 timestamp. Format: date-time. */ "created_at"?: string | globalThis.Date; /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */ "currency": string; "method": "standard"; "payout_destination_id"?: string; "payout_id": string; "reversal_status": "none" | "reversing" | "reversed"; "status": "pending" | "in_transit" | "paid" | "failed" | "canceled"; /** RFC3339 timestamp. Format: date-time. */ "updated_at"?: string | globalThis.Date; };
