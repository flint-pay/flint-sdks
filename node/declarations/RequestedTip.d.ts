
import type { MoneyValue } from './MoneyValue.js';

export type RequestedTip = { "amount_money"?: MoneyValue; "description"?: string; "metadata"?: Record<string, string>; "name"?: string; /** multipleOf: 0.0001. */ "percent"?: number; };
