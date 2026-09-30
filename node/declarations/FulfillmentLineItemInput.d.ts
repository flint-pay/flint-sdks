
import type { OrderLineItemModifierInput } from './OrderLineItemModifierInput.js';

export type FulfillmentLineItemInput = { "modifiers"?: Array<OrderLineItemModifierInput>; "order_line_item_id": string; /** Whole-number quantity; fractional quantities are not supported. Use an exact numeric string, not a floating-point number. Format: int64. */ "quantity": string; };
