
import type { MoneyValue } from './MoneyValue.js';

export type PublicFraudWarningPaymentSummary = { "amount_money": MoneyValue; "email": string; "last4": string; "payment_method_brand": "amex" | "discover" | "diners" | "jcb" | "mastercard" | "unionpay" | "visa" | "unknown" | (string & {}); };
