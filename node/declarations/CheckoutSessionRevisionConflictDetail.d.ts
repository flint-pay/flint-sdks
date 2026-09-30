
import type { AvailableModifierGroup } from './AvailableModifierGroup.js';
import type { MoneyValue } from './MoneyValue.js';
import type { OrderLineItemModifier } from './OrderLineItemModifier.js';
import type { SignedMoney } from './SignedMoney.js';

export type CheckoutSessionRevisionConflictDetail = { "base_subtotal_money"?: MoneyValue; "checkout_total_money"?: MoneyValue; "code": string; "conflict_reason"?: string; /** Use an exact numeric string, not a floating-point number. Format: int64. */ "latest_revision"?: string; "line_item_key"?: string; "message": string; "modifier_choices"?: Array<AvailableModifierGroup>; "modifier_total_money"?: MoneyValue; "modifiers"?: Array<OrderLineItemModifier>; "order_line_item_id"?: string; "param"?: string; "payment_amount_money"?: MoneyValue; "subtotal_money"?: MoneyValue; "tax_money"?: MoneyValue; "total_money"?: SignedMoney; };
