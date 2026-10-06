
import type { MoneyValueInput } from './MoneyValueInput.js';
import type { TextModifierRequestInput } from './TextModifierRequestInput.js';

export type OrderLineItemModifierInput = { "metadata"?: Record<string, string>; "modifier_group_name": string; "modifier_id"?: string; "name": string; "order_line_item_modifier_id": string; /** Whole-number quantity; fractional quantities are not supported. Use an exact numeric string, not a floating-point number. Format: int64. */ "quantity": string; "show_on_fulfillment": boolean; "show_on_receipt": boolean; "source_type": "catalog_modifier" | "text"; "text"?: TextModifierRequestInput; "text_value"?: string; "total_money": MoneyValueInput; "unit_price_delta_money": MoneyValueInput; };
