
import type { AvailableModifierGroupInput } from './AvailableModifierGroupInput.js';
import type { MoneyValueInput } from './MoneyValueInput.js';
import type { OrderLineItemModifierInput } from './OrderLineItemModifierInput.js';
import type { SignedMoneyInput } from './SignedMoneyInput.js';

export type CheckoutSessionRevisionConflictDetailInput = { "base_subtotal_money"?: MoneyValueInput; "checkout_total_money"?: MoneyValueInput; "code": string; "conflict_reason"?: string; /** Use an exact numeric string, not a floating-point number. Format: int64. */ "latest_revision"?: string; "line_item_key"?: string; "message": string; "modifier_choices"?: Array<AvailableModifierGroupInput>; "modifier_total_money"?: MoneyValueInput; "modifiers"?: Array<OrderLineItemModifierInput>; "order_line_item_id"?: string; "param"?: string; "payment_amount_money"?: MoneyValueInput; "subtotal_money"?: MoneyValueInput; "tax_money"?: MoneyValueInput; "total_money"?: SignedMoneyInput; };
