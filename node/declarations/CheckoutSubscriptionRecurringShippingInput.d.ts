
import type { MoneyValueInput } from './MoneyValueInput.js';

export type CheckoutSubscriptionRecurringShippingInput = { "delivery_method_name": string; "price_type": "fixed" | "quoted"; "shipping_money"?: MoneyValueInput; };
