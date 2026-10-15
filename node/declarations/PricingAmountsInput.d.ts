
import type { MoneyValueInput } from './MoneyValueInput.js';

export type PricingAmountsInput = { "charge_money": MoneyValueInput; "discount_money": MoneyValueInput; /** Tip money in the total: the requested tip before payment, and settled tips net of refunds after. */ "requested_tip_money": MoneyValueInput; "subtotal_money": MoneyValueInput; "tax_money": MoneyValueInput; "total_money": MoneyValueInput; };
