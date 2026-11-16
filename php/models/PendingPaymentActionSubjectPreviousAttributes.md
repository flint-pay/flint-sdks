[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PendingPaymentActionSubjectPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payment_intent` | Optional | [PendingPaymentActionPaymentIntentSubjectPreviousAttributes](../models/PendingPaymentActionPaymentIntentSubjectPreviousAttributes.md#pendingpaymentactionpaymentintentsubjectpreviousattributes) or null | PaymentIntent that requires buyer authentication or card presentment. It can be a standalone intent or an order-owned payment leg. `payment_intent`: [declared alternatives](../models/PendingPaymentActionSubjectPreviousAttributes.md#pendingpaymentactionsubjectpreviousattributespayment_intent). |
| `setup_payment_source` | Optional | [PendingPaymentActionSetupPaymentSourceSubjectPreviousAttributes](../models/PendingPaymentActionSetupPaymentSourceSubjectPreviousAttributes.md#pendingpaymentactionsetuppaymentsourcesubjectpreviousattributes) or null | Future-billing payment method setup that requires buyer authentication. `setup_payment_source`: [declared alternatives](../models/PendingPaymentActionSubjectPreviousAttributes.md#pendingpaymentactionsubjectpreviousattributessetup_payment_source). |

### PendingPaymentActionSubjectPreviousAttributes.payment_intent

PaymentIntent that requires buyer authentication or card presentment. It can be a standalone intent or an order-owned payment leg.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payment_intent_id` | Conditional | string or null | ID of the payment intent that needs the buyer's action. `payment_intent_id`: [declared alternatives](../models/PendingPaymentActionSubjectPreviousAttributes.md#pendingpaymentactionsubjectpreviousattributespayment_intent-variant-1payment_intent_id). |

### PendingPaymentActionSubjectPreviousAttributes.payment_intent variant 1

anyOf PendingPaymentActionPaymentIntentSubjectPreviousAttributes.

- Optional: `payment_intent_id`.

### PendingPaymentActionSubjectPreviousAttributes.payment_intent variant 2

anyOf variant 2.

- Undeclared: `payment_intent_id`.
- Value shape: null. PaymentIntent that requires buyer authentication or card presentment. It can be a standalone intent or an order-owned payment leg. 

### PendingPaymentActionSubjectPreviousAttributes.payment_intent variant 1.payment_intent_id

### PendingPaymentActionSubjectPreviousAttributes.payment_intent variant 1.payment_intent_id variant 1

anyOf variant 1: ID of the payment intent that needs the buyer's action..

- Value shape: string. ID of the payment intent that needs the buyer's action. ID of the payment intent that needs the buyer's action. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. 

### PendingPaymentActionSubjectPreviousAttributes.payment_intent variant 1.payment_intent_id variant 2

anyOf variant 2.

- Value shape: null. ID of the payment intent that needs the buyer's action. 

### PendingPaymentActionSubjectPreviousAttributes.setup_payment_source

Future-billing payment method setup that requires buyer authentication.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payment_method_id` | Conditional | string or null | ID of the payment method being saved, which needs the buyer's authentication first. `payment_method_id`: [declared alternatives](../models/PendingPaymentActionSubjectPreviousAttributes.md#pendingpaymentactionsubjectpreviousattributessetup_payment_source-variant-1payment_method_id). |

### PendingPaymentActionSubjectPreviousAttributes.setup_payment_source variant 1

anyOf PendingPaymentActionSetupPaymentSourceSubjectPreviousAttributes.

- Optional: `payment_method_id`.

### PendingPaymentActionSubjectPreviousAttributes.setup_payment_source variant 2

anyOf variant 2.

- Undeclared: `payment_method_id`.
- Value shape: null. Future-billing payment method setup that requires buyer authentication. 

### PendingPaymentActionSubjectPreviousAttributes.setup_payment_source variant 1.payment_method_id

### PendingPaymentActionSubjectPreviousAttributes.setup_payment_source variant 1.payment_method_id variant 1

anyOf variant 1: ID of the payment method being saved, which needs the buyer's authentication first..

- Value shape: string. ID of the payment method being saved, which needs the buyer's authentication first. ID of the payment method being saved, which needs the buyer's authentication first. Example: `"pm_01KEZF7C0034B248TXXE4NXYFZ"`. 

### PendingPaymentActionSubjectPreviousAttributes.setup_payment_source variant 1.payment_method_id variant 2

anyOf variant 2.

- Value shape: null. ID of the payment method being saved, which needs the buyer's authentication first. 

