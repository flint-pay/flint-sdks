
import type { MoneyValue } from './MoneyValue.js';

export type CreditNoteCorrectionRequest = ({ /** Amount to credit, no more than the source invoice line is worth, in the invoice currency. */ "amount_money"?: MoneyValue; /** Units to credit, no more than the source invoice line carries. Whole-number quantity; fractional quantities are not supported. Use an exact numeric string, not a floating-point number. Format: int64. */ "quantity"?: string; /** quantity credits whole units and requires quantity. amount credits a named figure and requires amount_money. The two are mutually exclusive. */ "type": "quantity" | "amount" | (string & {}); }) & ((({ "type": "quantity" | (string & {}); "quantity": unknown; })) | (({ "type": "amount" | (string & {}); "amount_money": unknown; })) | (object));
