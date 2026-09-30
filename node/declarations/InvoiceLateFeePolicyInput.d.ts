
import type { MoneyValueInput } from './MoneyValueInput.js';

export type InvoiceLateFeePolicyInput = ({ "amount_money"?: MoneyValueInput; /** Whether Flint applies the one-time fee automatically after the grace period. Omission defaults to manual. Frozen when the invoice is issued. */ "application_mode"?: "manual" | "automatic"; /** Format: int32. */ "grace_period_days": number; /** multipleOf: 0.0001. */ "percent"?: number; "type": "fixed" | "percentage"; }) & ((({ "type": "fixed"; "grace_period_days": unknown; "amount_money": unknown; }) & ({ "percent"?: never })) | (({ "type": "percentage"; "grace_period_days": unknown; "percent": unknown; }) & ({ "amount_money"?: never })));
