
import type { MoneyValue } from './MoneyValue.js';

export type CreatePaymentIntentRequest = ({ "amount_money": MoneyValue; "capture_method"?: "automatic" | "manual" | (string & {}); "customer_id"?: string; /** Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255. */ "external_reference_id"?: string; "metadata"?: Record<string, string>; /** minItems: 1. */ "payment_options": Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | (string & {})>; /** pattern: \S. */ "payment_return_url"?: string; "receipt_email"?: string; "tip_money"?: MoneyValue; "transaction_purpose"?: "goods" | "services" | "other" | (string & {}); });
