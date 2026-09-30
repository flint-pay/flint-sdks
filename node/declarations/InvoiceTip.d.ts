
import type { MoneyValue } from './MoneyValue.js';

export type InvoiceTip = { "amount_money"?: MoneyValue; "description"?: string; "name"?: string; /** multipleOf: 0.0001. */ "percent"?: number; };
