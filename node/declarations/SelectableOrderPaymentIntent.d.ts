
import type { MoneyValue } from './MoneyValue.js';
import type { PaymentCollection } from './PaymentCollection.js';
import type { PaymentErrorSummary } from './PaymentErrorSummary.js';

export type SelectableOrderPaymentIntent = { "amount_money": MoneyValue; "last_payment_error"?: PaymentErrorSummary; "payment_collection"?: PaymentCollection; "payment_intent_id": string; "status": "requires_payment_method" | "requires_confirmation" | "requires_action" | "processing" | "requires_capture" | "canceled" | "succeeded" | "expired" | (string & {}); "tip_money": MoneyValue; };
