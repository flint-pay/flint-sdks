
import type { MoneyValueInput } from './MoneyValueInput.js';

export type InvoiceDiscountInput = { "amount_money": MoneyValueInput; "applied_money": MoneyValueInput; "customer_facing_name"?: string; "discount_class"?: "order" | "line_item" | "service_charge"; "promotion_code"?: string; "promotion_id"?: string; "source": "manual" | "promotion"; };
