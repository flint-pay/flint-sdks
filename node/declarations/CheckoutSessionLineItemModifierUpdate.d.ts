
import type { MoneyValue } from './MoneyValue.js';
import type { OrderLineItem } from './OrderLineItem.js';

export type CheckoutSessionLineItemModifierUpdate = { "checkout_total_money": MoneyValue; "line_item": OrderLineItem; "payment_amount_money": MoneyValue; /** Use an exact numeric string, not a floating-point number. Format: int64. */ "version": string; };
