
import type { MoneyValueInput } from './MoneyValueInput.js';

export type ManualDiscountRequestInput = { "amount_money": MoneyValueInput; "discount_class"?: "order" | "line_item" | "service_charge"; "name": string; "order_charge_ids"?: Array<string>; "order_line_item_ids"?: Array<string>; "scope"?: "order" | "line_item"; };
