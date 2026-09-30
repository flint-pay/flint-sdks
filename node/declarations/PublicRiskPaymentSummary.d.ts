
import type { MoneyValue } from './MoneyValue.js';

export type PublicRiskPaymentSummary = { "amount_money": MoneyValue; /** RFC3339 timestamp. Format: date-time. */ "authorization_expires_at": string | null; "capture_method": "automatic" | "manual" | (string & {}); "email": string; "last4": string; "payment_method_brand": "amex" | "discover" | "diners" | "jcb" | "mastercard" | "unionpay" | "visa" | "unknown" | (string & {}); };
