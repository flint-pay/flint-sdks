
import type { MoneyValue } from './MoneyValue.js';

export type RefundLineItemModifierAllocation = { "allocation_basis": string; "amount_money": MoneyValue; "modifier_group_name": string; "name": string; "order_line_item_modifier_id"?: string; /** Whole-number quantity; fractional quantities are not supported. Use an exact numeric string, not a floating-point number. Format: int64. */ "quantity": string; "refund_line_item_modifier_allocation_id": string; "show_on_fulfillment": boolean; "show_on_receipt": boolean; "source_type": string; "text_value"?: string; };
