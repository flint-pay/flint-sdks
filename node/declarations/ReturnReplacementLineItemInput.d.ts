
import type { MoneyValueInput } from './MoneyValueInput.js';

export type ReturnReplacementLineItemInput = { "bundle_id"?: string; "description"?: string; "discount_money": MoneyValueInput; "name": string; /** Whole-number quantity; fractional quantities are not supported. Use an exact numeric string, not a floating-point number. Format: int64. */ "quantity": string; "return_replacement_line_item_id": string; "return_resolution_id": string; "sku"?: string; "subtotal_money": MoneyValueInput; "tax_money": MoneyValueInput; "total_money": MoneyValueInput; "unit_price_money": MoneyValueInput; "variant_id"?: string; };
