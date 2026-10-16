
import type { MoneyValue } from './MoneyValue.js';

export type PricingAmounts = { /** Total of the order's service charges after service-charge discounts. */ "charge_money": MoneyValue; /** Total of order and line-item discounts. Service-charge discounts, such as free shipping, are not included; they reduce charge_money. */ "discount_money": MoneyValue; /** Tip money in the total: the requested tip before payment, and settled tips net of refunds after. */ "requested_tip_money": MoneyValue; "subtotal_money": MoneyValue; "tax_money": MoneyValue; "total_money": MoneyValue; };
