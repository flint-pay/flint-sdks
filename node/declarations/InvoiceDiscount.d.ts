
import type { MoneyValue } from './MoneyValue.js';

export type InvoiceDiscount = { "amount_money": MoneyValue; "applied_money": MoneyValue; "customer_facing_name"?: string; "discount_class"?: "order" | "line_item" | "service_charge" | (string & {}); "promotion_code"?: string; "promotion_id"?: string; "source": "manual" | "promotion" | (string & {}); };
