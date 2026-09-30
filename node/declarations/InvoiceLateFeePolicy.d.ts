
import type { MoneyValue } from './MoneyValue.js';

export type InvoiceLateFeePolicy = ({ "amount_money"?: MoneyValue; /** Whether Flint applies the one-time fee automatically after the grace period. Omission defaults to manual. Frozen when the invoice is issued. */ "application_mode"?: "manual" | "automatic" | (string & {}); /** Format: int32. */ "grace_period_days": number; /** multipleOf: 0.0001. */ "percent"?: number; "type": "fixed" | "percentage" | (string & {}); }) & ((({ "type": "fixed"; "grace_period_days": unknown; "amount_money": unknown; })) | (({ "type": "percentage"; "grace_period_days": unknown; "percent": unknown; })) | (object));
