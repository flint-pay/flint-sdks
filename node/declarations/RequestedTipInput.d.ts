
import type { MoneyValueInput } from './MoneyValueInput.js';

export type RequestedTipInput = { "amount_money"?: MoneyValueInput; "description"?: string; "metadata"?: Record<string, string>; "name"?: string; /** multipleOf: 0.0001. */ "percent"?: number; };
