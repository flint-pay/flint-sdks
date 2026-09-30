
import type { MoneyValueInput } from './MoneyValueInput.js';

export type InvoiceScheduleAmountSpecificationInput = ({ "amount_money"?: MoneyValueInput; /** multipleOf: 0.0001. */ "percent"?: number; "type": "fixed" | "percentage" | "remaining_balance"; }) & ((({ "type": "fixed"; "amount_money": unknown; }) & ({ "percent"?: never })) | (({ "type": "percentage"; "percent": unknown; }) & ({ "amount_money"?: never })) | (({ "type": "remaining_balance"; }) & (({ "amount_money"?: never }) & ({ "percent"?: never }))));
