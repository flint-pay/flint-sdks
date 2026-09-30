
import type { MoneyValueInput } from './MoneyValueInput.js';

export type CreatePaymentIntentRequestInput = ({ "amount_money": MoneyValueInput; "capture_method"?: "automatic" | "manual"; "customer_id"?: string; /** Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255. */ "external_reference_id"?: string; "metadata"?: Record<string, string>; /** minItems: 1. */ "payment_options": Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit">; /** pattern: \S. */ "payment_return_url"?: string; "receipt_email"?: string; "tip_money"?: MoneyValueInput; "transaction_purpose"?: "goods" | "services" | "other"; });
