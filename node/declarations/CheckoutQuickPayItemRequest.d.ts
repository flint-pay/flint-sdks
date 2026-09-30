
import type { MoneyValue } from './MoneyValue.js';
import type { OrderLineItemTax } from './OrderLineItemTax.js';

export type CheckoutQuickPayItemRequest = { "amount_money": MoneyValue; "name": string; "tax"?: OrderLineItemTax; };
