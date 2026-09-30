
import type { MoneyValueInput } from './MoneyValueInput.js';
import type { OrderPaymentSourceSelectionInput } from './OrderPaymentSourceSelectionInput.js';

export type CreateOrderPaymentIntentRequestInput = { "amount_money"?: MoneyValueInput; "capture_method"?: "automatic" | "manual"; /** Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255. */ "external_reference_id"?: string; "metadata"?: Record<string, string>; "payment_options"?: Array<string>; "payment_return_url"?: string; "payment_source_selection"?: OrderPaymentSourceSelectionInput; };
