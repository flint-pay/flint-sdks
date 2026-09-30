
import type { MoneyValue } from './MoneyValue.js';

export type CreatePayoutRequest = { "amount_money": MoneyValue; "balance_source_type"?: "card" | "bank_account" | "fpx" | (string & {}); "description"?: string; /** Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255. */ "external_reference_id"?: string; "metadata"?: Record<string, string>; "method"?: "standard" | (string & {}); "payout_destination_id"?: string; "statement_descriptor"?: string; };
