[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PendingPaymentActionSubject

Typed subject for a pending order payment action. Exactly one subject is present.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payment_intent` | Optional | [PendingPaymentActionPaymentIntentSubject](../models/PendingPaymentActionPaymentIntentSubject.md#pendingpaymentactionpaymentintentsubject) | PaymentIntent that requires buyer authentication or card presentment. It can be a standalone intent or an order-owned payment leg. The payment intent that needs buyer authentication in a pending payment action. `payment_intent`: [field definitions](../models/PendingPaymentActionSubject.md#pendingpaymentactionsubjectpayment_intent). |
| `setup_payment_source` | Optional | [PendingPaymentActionSetupPaymentSourceSubject](../models/PendingPaymentActionSetupPaymentSourceSubject.md#pendingpaymentactionsetuppaymentsourcesubject) | Future-billing payment method setup that requires buyer authentication. The payment method setup that needs buyer authentication in a pending payment action. `setup_payment_source`: [field definitions](../models/PendingPaymentActionSubject.md#pendingpaymentactionsubjectsetup_payment_source). |

### PendingPaymentActionSubject.payment_intent

PaymentIntent that requires buyer authentication or card presentment. It can be a standalone intent or an order-owned payment leg. The payment intent that needs buyer authentication in a pending payment action.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payment_intent_id` | Required | string | Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. |

### PendingPaymentActionSubject.setup_payment_source

Future-billing payment method setup that requires buyer authentication. The payment method setup that needs buyer authentication in a pending payment action.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payment_method_id` | Required | string | Example: `"pm_01KEZF7C0034B248TXXE4NXYFZ"`. |

