
import type { MoneyValueInput } from './MoneyValueInput.js';
import type { OrderLineItemInput } from './OrderLineItemInput.js';

export type CheckoutSessionLineItemModifierUpdateInput = { "checkout_total_money": MoneyValueInput; "line_item": OrderLineItemInput; "payment_amount_money": MoneyValueInput; /** Use an exact numeric string, not a floating-point number. Format: int64. */ "version": string; };
