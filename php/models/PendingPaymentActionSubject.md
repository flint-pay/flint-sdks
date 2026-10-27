[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PendingPaymentActionSubject

Typed subject for a pending order payment action. Exactly one subject is present.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payment_intent` | Optional | [PendingPaymentActionPaymentIntentSubject](../models/PendingPaymentActionPaymentIntentSubject.md#pendingpaymentactionpaymentintentsubject) | PaymentIntent that requires buyer authentication. It can be a standalone intent or an order-owned payment leg. The payment intent that needs buyer authentication in a pending payment action. |
| `setup_payment_source` | Optional | [PendingPaymentActionSetupPaymentSourceSubject](../models/PendingPaymentActionSetupPaymentSourceSubject.md#pendingpaymentactionsetuppaymentsourcesubject) | Future-billing payment method setup that requires buyer authentication. The payment method setup that needs buyer authentication in a pending payment action. |

