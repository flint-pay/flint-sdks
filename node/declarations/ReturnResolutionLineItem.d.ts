
import type { MoneyValue } from './MoneyValue.js';

export type ReturnResolutionLineItem = { /** Whole-number quantity; fractional quantities are not supported. Use an exact numeric string, not a floating-point number. Format: int64. */ "quantity": string; "refund_timing"?: "after_approval" | "after_handoff" | "after_receipt" | "after_inspection" | "manual" | (string & {}); "return_line_item_id": string; "return_resolution_id": string; "return_resolution_line_item_id": string; "returned_total_money": MoneyValue; };
