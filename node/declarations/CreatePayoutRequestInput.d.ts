
import type { MoneyValueInput } from './MoneyValueInput.js';

export type CreatePayoutRequestInput = { "amount_money": MoneyValueInput; "balance_source_type"?: "card" | "bank_account" | "fpx"; "description"?: string; /** Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255. */ "external_reference_id"?: string; "metadata"?: Record<string, string>; "method"?: "standard"; "payout_destination_id"?: string; "statement_descriptor"?: string; };
