[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PendingPaymentActionPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action_type` | Optional | string or null | Product-level action type. payment_authentication applies to a payment leg; payment_method_authentication applies to saving a future-billing payment method. card_presentment means present the card on the Tap to Pay reader in your app. Values: `"payment_authentication"`, `"payment_method_authentication"`, `"card_presentment"`. `action_type`: [declared alternatives](../models/PendingPaymentActionPreviousAttributesInput.md#pendingpaymentactionpreviousattributesinputaction_type). |
| `client_action` | Optional | [PaymentClientActionPreviousAttributesInput](../models/PaymentClientActionPreviousAttributesInput.md#paymentclientactionpreviousattributesinput) or null | How to finish this step before continuing through Flint. Flint's API returns a Stripe client secret only for client_action_type stripe. The url branch carries a bearer URL; Stripe's authentication page receives what it needs to run the challenge. |
| `expires_at` | Optional | string or null | When this step stops working. For a standalone payment intent, 12 hours after the step was created; for an order payment, when its attempt is canceled. `expires_at`: [declared alternatives](../models/PendingPaymentActionPreviousAttributesInput.md#pendingpaymentactionpreviousattributesinputexpires_at). |
| `pending_action_id` | Optional | string or null | Stable Flint action ID. Use this to deduplicate a repeated action projection while resuming an attempt. `pending_action_id`: [declared alternatives](../models/PendingPaymentActionPreviousAttributesInput.md#pendingpaymentactionpreviousattributesinputpending_action_id). |
| `subject` | Optional | [PendingPaymentActionSubjectPreviousAttributesInput](../models/PendingPaymentActionSubjectPreviousAttributesInput.md#pendingpaymentactionsubjectpreviousattributesinput) or null | The attempt subject that requires client action. Exactly one of payment_intent or setup_payment_source is present. |

### PendingPaymentActionPreviousAttributesInput.action_type

### PendingPaymentActionPreviousAttributesInput.action_type variant 1

anyOf variant 1: Product-level action type. payment_authentication applies to a payment leg; payment_method_authentication applies to saving a future-billing payment method. card_presentment means present the card on the Tap to Pay reader in your app..

- Value shape: string. Product-level action type. payment_authentication applies to a payment leg; payment_method_authentication applies to saving a future-billing payment method. card_presentment means present the card on the Tap to Pay reader in your app. Values: `"payment_authentication"`, `"payment_method_authentication"`, `"card_presentment"`.

### PendingPaymentActionPreviousAttributesInput.action_type variant 2

anyOf variant 2.

- Value shape: null. Product-level action type. payment_authentication applies to a payment leg; payment_method_authentication applies to saving a future-billing payment method. card_presentment means present the card on the Tap to Pay reader in your app. 

### PendingPaymentActionPreviousAttributesInput.expires_at

### PendingPaymentActionPreviousAttributesInput.expires_at variant 1

anyOf variant 1: When this step stops working. For a standalone payment intent, 12 hours after the step was created; for an order payment, when its attempt is canceled..

- Value shape: string. When this step stops working. For a standalone payment intent, 12 hours after the step was created; for an order payment, when its attempt is canceled. When this step stops working. For a standalone payment intent, 12 hours after the step was created; for an order payment, when its attempt is canceled. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PendingPaymentActionPreviousAttributesInput.expires_at variant 2

anyOf variant 2.

- Value shape: null. When this step stops working. For a standalone payment intent, 12 hours after the step was created; for an order payment, when its attempt is canceled. 

### PendingPaymentActionPreviousAttributesInput.pending_action_id

### PendingPaymentActionPreviousAttributesInput.pending_action_id variant 1

anyOf variant 1: Stable Flint action ID. Use this to deduplicate a repeated action projection while resuming an attempt..

- Value shape: string. Stable Flint action ID. Use this to deduplicate a repeated action projection while resuming an attempt. Stable Flint action ID. Use this to deduplicate a repeated action projection while resuming an attempt. Example: `"pendact_01KEZF7C00SVMRXWKVZX6R9822"`. 

### PendingPaymentActionPreviousAttributesInput.pending_action_id variant 2

anyOf variant 2.

- Value shape: null. Stable Flint action ID. Use this to deduplicate a repeated action projection while resuming an attempt. 

