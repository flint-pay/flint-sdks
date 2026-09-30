
import type { MoneyValueInput } from './MoneyValueInput.js';

export type ReturnRestockingFeePolicyInput = { "calculation_type": "flat" | "percent"; "flat_money"?: MoneyValueInput; /** Format: double. multipleOf: 0.0001. */ "percent"?: number; };
