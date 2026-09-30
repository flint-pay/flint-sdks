
import type { MoneyValue } from './MoneyValue.js';

export type ManualDiscountRequest = { "amount_money": MoneyValue; "discount_class"?: "order" | "line_item" | "service_charge" | (string & {}); "name": string; "order_charge_ids"?: Array<string>; "order_line_item_ids"?: Array<string>; "scope"?: "order" | "line_item" | (string & {}); };
