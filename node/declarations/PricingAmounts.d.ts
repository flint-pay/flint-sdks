
import type { MoneyValue } from './MoneyValue.js';

export type PricingAmounts = { "charge_money": MoneyValue; "discount_money": MoneyValue; "requested_tip_money": MoneyValue; "subtotal_money": MoneyValue; "tax_money": MoneyValue; "total_money": MoneyValue; };
