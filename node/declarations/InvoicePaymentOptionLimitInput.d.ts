
import type { MoneyValueInput } from './MoneyValueInput.js';

export type InvoicePaymentOptionLimitInput = { "max_total_money": MoneyValueInput; "payment_option": "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit"; };
