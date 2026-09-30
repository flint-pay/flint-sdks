
import type { MoneyValue } from './MoneyValue.js';
import type { TextModifierRequest } from './TextModifierRequest.js';

export type OrderLineItemModifier = { "metadata"?: Record<string, string>; "modifier_group_name": string; "modifier_id"?: string; "name": string; "order_line_item_modifier_id": string; /** Whole-number quantity; fractional quantities are not supported. Use an exact numeric string, not a floating-point number. Format: int64. */ "quantity": string; "show_on_fulfillment": boolean; "show_on_receipt": boolean; "source_type": string; "text"?: TextModifierRequest; "text_value"?: string; "total_money": MoneyValue; "unit_price_delta_money": MoneyValue; };
