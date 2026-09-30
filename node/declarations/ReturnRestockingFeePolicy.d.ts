
import type { MoneyValue } from './MoneyValue.js';

export type ReturnRestockingFeePolicy = { "calculation_type": "flat" | "percent" | (string & {}); "flat_money"?: MoneyValue; /** Format: double. multipleOf: 0.0001. */ "percent"?: number; };
