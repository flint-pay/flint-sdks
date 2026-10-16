
import type { MoneyValueInput } from './MoneyValueInput.js';

export type PricingAmountsInput = { /** Total of the order's service charges after service-charge discounts. */ "charge_money": MoneyValueInput; /** Total of order and line-item discounts. Service-charge discounts, such as free shipping, are not included; they reduce charge_money. */ "discount_money": MoneyValueInput; /** Tip money in the total: the requested tip before payment, and settled tips net of refunds after. */ "requested_tip_money": MoneyValueInput; "subtotal_money": MoneyValueInput; "tax_money": MoneyValueInput; "total_money": MoneyValueInput; };
