
import type { MoneyValueInput } from './MoneyValueInput.js';
import type { OrderLineItemTaxInput } from './OrderLineItemTaxInput.js';

export type CheckoutQuickPayItemRequestInput = { "amount_money": MoneyValueInput; "name": string; "tax"?: OrderLineItemTaxInput; };
