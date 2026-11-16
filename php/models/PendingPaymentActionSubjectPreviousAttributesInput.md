[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PendingPaymentActionSubjectPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payment_intent` | Optional | [PendingPaymentActionPaymentIntentSubjectPreviousAttributesInput](../models/PendingPaymentActionPaymentIntentSubjectPreviousAttributesInput.md#pendingpaymentactionpaymentintentsubjectpreviousattributesinput) or null | PaymentIntent that requires buyer authentication or card presentment. It can be a standalone intent or an order-owned payment leg. |
| `setup_payment_source` | Optional | [PendingPaymentActionSetupPaymentSourceSubjectPreviousAttributesInput](../models/PendingPaymentActionSetupPaymentSourceSubjectPreviousAttributesInput.md#pendingpaymentactionsetuppaymentsourcesubjectpreviousattributesinput) or null | Future-billing payment method setup that requires buyer authentication. |

