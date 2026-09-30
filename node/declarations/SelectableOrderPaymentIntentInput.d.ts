
import type { MoneyValueInput } from './MoneyValueInput.js';
import type { PaymentCollectionInput } from './PaymentCollectionInput.js';
import type { PaymentErrorSummaryInput } from './PaymentErrorSummaryInput.js';

export type SelectableOrderPaymentIntentInput = { "amount_money": MoneyValueInput; "last_payment_error"?: PaymentErrorSummaryInput; "payment_collection"?: PaymentCollectionInput; "payment_intent_id": string; "status": "requires_payment_method" | "requires_confirmation" | "requires_action" | "processing" | "requires_capture" | "canceled" | "succeeded" | "expired"; "tip_money": MoneyValueInput; };
