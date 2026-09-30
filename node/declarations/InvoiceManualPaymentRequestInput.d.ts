
import type { MoneyValueInput } from './MoneyValueInput.js';

export type InvoiceManualPaymentRequestInput = { "amount_money": MoneyValueInput; /** Use an exact numeric string, not a floating-point number. Format: int64. minimum: 1. */ "expected_version"?: string; /** Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255. */ "external_reference_id"?: string; "note"?: string; /** RFC3339 timestamp. Format: date-time. */ "received_at"?: string | globalThis.Date; };
