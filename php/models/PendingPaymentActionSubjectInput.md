[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PendingPaymentActionSubjectInput

Typed subject for a pending order payment action. Exactly one subject is present.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payment_intent` | Optional | [PendingPaymentActionPaymentIntentSubjectInput](../models/PendingPaymentActionPaymentIntentSubjectInput.md#pendingpaymentactionpaymentintentsubjectinput) | PaymentIntent that requires buyer authentication. It can be a standalone intent or an order-owned payment leg. The payment intent that needs buyer authentication in a pending payment action. |
| `setup_payment_source` | Optional | [PendingPaymentActionSetupPaymentSourceSubjectInput](../models/PendingPaymentActionSetupPaymentSourceSubjectInput.md#pendingpaymentactionsetuppaymentsourcesubjectinput) | Future-billing payment method setup that requires buyer authentication. The payment method setup that needs buyer authentication in a pending payment action. |

