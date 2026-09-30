
import type { MoneyValueInput } from './MoneyValueInput.js';

export type PublicRiskPaymentSummaryInput = { "amount_money": MoneyValueInput; /** RFC3339 timestamp. Format: date-time. */ "authorization_expires_at": string | globalThis.Date | null; "capture_method": "automatic" | "manual"; "email": string; "last4": string; "payment_method_brand": "amex" | "discover" | "diners" | "jcb" | "mastercard" | "unionpay" | "visa" | "unknown"; };
