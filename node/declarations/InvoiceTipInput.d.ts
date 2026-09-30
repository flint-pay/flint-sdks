
import type { MoneyValueInput } from './MoneyValueInput.js';

export type InvoiceTipInput = { "amount_money"?: MoneyValueInput; "description"?: string; "name"?: string; /** multipleOf: 0.0001. */ "percent"?: number; };
