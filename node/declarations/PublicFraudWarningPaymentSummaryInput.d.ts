
import type { MoneyValueInput } from './MoneyValueInput.js';

export type PublicFraudWarningPaymentSummaryInput = { "amount_money": MoneyValueInput; "email": string; "last4": string; "payment_method_brand": "amex" | "discover" | "diners" | "jcb" | "mastercard" | "unionpay" | "visa" | "unknown"; };
