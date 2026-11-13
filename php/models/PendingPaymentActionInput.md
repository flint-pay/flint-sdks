[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PendingPaymentActionInput

Client-side action required before continuing a payment. Resume an order through PayOrder with order_payment_attempt_id, or continue a standalone PaymentIntent through its confirm endpoint without a replacement credential.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action_type` | Required | string | Product-level action type. payment_authentication applies to a payment leg; payment_method_authentication applies to saving a future-billing payment method. card_presentment means present the card on the Tap to Pay reader in your app. Values: `"payment_authentication"`, `"payment_method_authentication"`, `"card_presentment"`. |
| `client_action` | Required | [PaymentClientActionInput](../models/PaymentClientActionInput.md#paymentclientactioninput) | How to finish this step before continuing through Flint. Flint's API returns a Stripe client secret only for client_action_type stripe. The url branch carries a bearer URL; Stripe's authentication page receives what it needs to run the challenge. How to finish a payment step. Flint's API returns a Stripe client secret only for client_action_type stripe. With url, Stripe's authentication page receives what it needs to run the challenge, including the client secret for hosted 3DS2. If a payment is confirmed with a payment method Flint didn't approve, Flint doesn't count the charge, returns it to the buyer, and the payment intent ends canceled with cancellation_reason payment_returned. |
| `expires_at` | Required | string | When this step stops working. For a standalone payment intent, 12 hours after the step was created; for an order payment, when its attempt is canceled. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `pending_action_id` | Required | string | Stable Flint action ID. Use this to deduplicate a repeated action projection while resuming an attempt. Example: `"pendact_01KEZF7C00SVMRXWKVZX6R9822"`. |
| `subject` | Required | [PendingPaymentActionSubjectInput](../models/PendingPaymentActionSubjectInput.md#pendingpaymentactionsubjectinput) | The attempt subject that requires client action. Exactly one of payment_intent or setup_payment_source is present. Typed subject for a pending order payment action. Exactly one subject is present. |

