
import type { MoneyValue } from './MoneyValue.js';
import type { OrderPaymentSourceSelection } from './OrderPaymentSourceSelection.js';

export type CreateOrderPaymentIntentRequest = { "amount_money"?: MoneyValue; "capture_method"?: "automatic" | "manual" | (string & {}); /** Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255. */ "external_reference_id"?: string; "metadata"?: Record<string, string>; "payment_options"?: Array<string>; "payment_return_url"?: string; "payment_source_selection"?: OrderPaymentSourceSelection; };
