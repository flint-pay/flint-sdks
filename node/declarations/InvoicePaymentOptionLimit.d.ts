
import type { MoneyValue } from './MoneyValue.js';

export type InvoicePaymentOptionLimit = { "max_total_money": MoneyValue; "payment_option": "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | (string & {}); };
