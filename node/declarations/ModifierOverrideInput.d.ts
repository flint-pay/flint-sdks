
import type { MoneyValueInput } from './MoneyValueInput.js';

export type ModifierOverrideInput = { "available"?: boolean; /** Whole-number quantity; fractional quantities are not supported. Use an exact numeric string, not a floating-point number. Format: int64. */ "default_quantity"?: string; "hidden"?: boolean; /** Flint line-item tax category. */ "line_item_tax_category"?: "general" | "physical_goods" | "digital_goods" | "software" | "saas" | "services" | "professional_services" | "food" | "prepared_food" | "clothing" | "medical_goods" | "admission"; "modifier_id": string; "selected_by_default"?: boolean; "taxable"?: boolean; "unit_price_delta_money"?: MoneyValueInput; };
