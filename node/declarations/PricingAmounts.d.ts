
import type { MoneyValue } from './MoneyValue.js';

export type PricingAmounts = { "charge_money": MoneyValue; "discount_money": MoneyValue; /** Tip money in the total: the requested tip before payment, and settled tips net of refunds after. */ "requested_tip_money": MoneyValue; "subtotal_money": MoneyValue; "tax_money": MoneyValue; "total_money": MoneyValue; };
