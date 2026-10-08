
import type { MoneyValue } from './MoneyValue.js';

export type CheckoutSubscriptionRecurringShipping = { "delivery_method_name": string; "price_type": "fixed" | "quoted" | (string & {}); "shipping_money"?: MoneyValue; };
