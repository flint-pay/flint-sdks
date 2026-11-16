[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PendingPaymentActionSubjectPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payment_intent` | Optional | [PendingPaymentActionPaymentIntentSubjectPreviousAttributes](../models/PendingPaymentActionPaymentIntentSubjectPreviousAttributes.md#pendingpaymentactionpaymentintentsubjectpreviousattributes) or null | PaymentIntent that requires buyer authentication or card presentment. It can be a standalone intent or an order-owned payment leg. |
| `setup_payment_source` | Optional | [PendingPaymentActionSetupPaymentSourceSubjectPreviousAttributes](../models/PendingPaymentActionSetupPaymentSourceSubjectPreviousAttributes.md#pendingpaymentactionsetuppaymentsourcesubjectpreviousattributes) or null | Future-billing payment method setup that requires buyer authentication. |

