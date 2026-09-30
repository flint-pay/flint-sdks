
import type { MoneyValueInput } from './MoneyValueInput.js';

export type UpdatePaymentIntentRequestInput = { "amount_money"?: MoneyValueInput; "customer_id"?: string; /** Caller-owned identifier for this resource in an external system. maxLength: 255. */ "external_reference_id"?: string; /** Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all metadata. An empty object makes no change. Empty strings are stored. Keys starting with flint_ are reserved and cannot be written through the public API. */ "metadata"?: Record<string, string | null> | null; "receipt_email"?: string; "tip_money"?: MoneyValueInput; };
