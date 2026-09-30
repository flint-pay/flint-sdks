
import type { MoneyValue } from './MoneyValue.js';

export type ReturnReplacementLineItem = { "bundle_id"?: string; "description"?: string; "discount_money": MoneyValue; "name": string; /** Whole-number quantity; fractional quantities are not supported. Use an exact numeric string, not a floating-point number. Format: int64. */ "quantity": string; "return_replacement_line_item_id": string; "return_resolution_id": string; "sku"?: string; "subtotal_money": MoneyValue; "tax_money": MoneyValue; "total_money": MoneyValue; "unit_price_money": MoneyValue; "variant_id"?: string; };
