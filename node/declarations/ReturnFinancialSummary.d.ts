
import type { MoneyValue } from './MoneyValue.js';

export type ReturnFinancialSummary = { "collected_money": MoneyValue; "credit_money": MoneyValue; "deduction_money": MoneyValue; "due_from_buyer_money": MoneyValue; "due_to_buyer_money": MoneyValue; "refunded_money": MoneyValue; "replacement_total_money": MoneyValue; "returned_discount_money": MoneyValue; "returned_subtotal_money": MoneyValue; "returned_tax_money": MoneyValue; "returned_total_money": MoneyValue; };
