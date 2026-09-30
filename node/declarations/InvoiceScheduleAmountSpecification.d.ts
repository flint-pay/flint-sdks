
import type { MoneyValue } from './MoneyValue.js';

export type InvoiceScheduleAmountSpecification = ({ "amount_money"?: MoneyValue; /** multipleOf: 0.0001. */ "percent"?: number; "type": "fixed" | "percentage" | "remaining_balance" | (string & {}); }) & ((({ "type": "fixed"; "amount_money": unknown; })) | (({ "type": "percentage"; "percent": unknown; })) | (({ "type": "remaining_balance"; })) | (object));
