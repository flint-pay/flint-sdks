[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionPaymentRetryFailedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `completed_at` | Optional | string or null | RFC3339 timestamp. `completed_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `idempotency_key` | Optional | string or null | The idempotency key sent with the request that created the retry. Repeating the request with the same key returns this retry. `idempotency_key`: [declared alternatives](../models/SubscriptionPaymentRetryFailedMerchantEventDataPreviousAttributes.md#subscriptionpaymentretryfailedmerchanteventdatapreviousattributesidempotency_key). |
| `last_payment_error` | Optional | Alternative shapes (see declared variants) | Why the payment failed. Present only when the retry's status is `failed` and a payment attempt was made. `last_payment_error`: [declared alternatives](../models/SubscriptionPaymentRetryFailedMerchantEventDataPreviousAttributes.md#subscriptionpaymentretryfailedmerchanteventdatapreviousattributeslast_payment_error). |
| `order_id` | Optional | string or null | ID of the renewal order the retry collects. Omitted until Flint records it, which can be after processing starts. `order_id`: [declared alternatives](../models/SubscriptionPaymentRetryFailedMerchantEventDataPreviousAttributes.md#subscriptionpaymentretryfailedmerchanteventdatapreviousattributesorder_id). |
| `payment_intent_id` | Optional | string or null | The payment intent this retry started. Omitted before charging begins or when no payment intent was created. `payment_intent_id`: [declared alternatives](../models/SubscriptionPaymentRetryFailedMerchantEventDataPreviousAttributes.md#subscriptionpaymentretryfailedmerchanteventdatapreviousattributespayment_intent_id). |
| `started_at` | Optional | string or null | RFC3339 timestamp. `started_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `status` | Optional | string or null | Where the retry is. Each value says what it means. Values: `"pending"`, `"processing"`, `"succeeded"`, `"failed"`. `status`: [declared alternatives](../models/SubscriptionPaymentRetryFailedMerchantEventDataPreviousAttributes.md#subscriptionpaymentretryfailedmerchanteventdatapreviousattributesstatus). |
| `subscription_id` | Optional | string or null | ID of the past-due subscription whose payment this retry collects. `subscription_id`: [declared alternatives](../models/SubscriptionPaymentRetryFailedMerchantEventDataPreviousAttributes.md#subscriptionpaymentretryfailedmerchanteventdatapreviousattributessubscription_id). |
| `subscription_payment_retry_id` | Optional | string or null | Unique identifier for this subscription payment retry, prefixed `spr_`. `subscription_payment_retry_id`: [declared alternatives](../models/SubscriptionPaymentRetryFailedMerchantEventDataPreviousAttributes.md#subscriptionpaymentretryfailedmerchanteventdatapreviousattributessubscription_payment_retry_id). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |

### SubscriptionPaymentRetryFailedMerchantEventDataPreviousAttributes.completed_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### SubscriptionPaymentRetryFailedMerchantEventDataPreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### SubscriptionPaymentRetryFailedMerchantEventDataPreviousAttributes.idempotency_key

### SubscriptionPaymentRetryFailedMerchantEventDataPreviousAttributes.idempotency_key variant 1

anyOf variant 1: The idempotency key sent with the request that created the retry. Repeating the request with the same key returns this retry..

- Value shape: string. The idempotency key sent with the request that created the retry. Repeating the request with the same key returns this retry. 

### SubscriptionPaymentRetryFailedMerchantEventDataPreviousAttributes.idempotency_key variant 2

anyOf variant 2.

- Value shape: null. The idempotency key sent with the request that created the retry. Repeating the request with the same key returns this retry. 

### SubscriptionPaymentRetryFailedMerchantEventDataPreviousAttributes.last_payment_error

Why the payment failed. Present only when the retry's status is `failed` and a payment attempt was made.

Field definitions: [shared fields](CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesactive_payment_attempt-variant-1last_payment_error).

### SubscriptionPaymentRetryFailedMerchantEventDataPreviousAttributes.last_payment_error variant 1

anyOf PaymentErrorSummaryPreviousAttributes.

- Optional: `code`, `failed_at`, `message`, `remediation`.

### SubscriptionPaymentRetryFailedMerchantEventDataPreviousAttributes.last_payment_error variant 2

anyOf variant 2.

- Undeclared: `code`, `failed_at`, `message`, `remediation`.
- Value shape: null. Why the payment failed. Present only when the retry's status is `failed` and a payment attempt was made. 

### SubscriptionPaymentRetryFailedMerchantEventDataPreviousAttributes.last_payment_error variant 1.code

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.last_payment_error variant 1.code](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesactive_payment_attempt-variant-1last_payment_error-variant-1code).

### SubscriptionPaymentRetryFailedMerchantEventDataPreviousAttributes.last_payment_error variant 1.failed_at

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.last_payment_error variant 1.failed_at](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesactive_payment_attempt-variant-1last_payment_error-variant-1failed_at).

### SubscriptionPaymentRetryFailedMerchantEventDataPreviousAttributes.last_payment_error variant 1.message

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.last_payment_error variant 1.message](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesactive_payment_attempt-variant-1last_payment_error-variant-1message).

### SubscriptionPaymentRetryFailedMerchantEventDataPreviousAttributes.last_payment_error variant 1.remediation

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.last_payment_error variant 1.remediation](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesactive_payment_attempt-variant-1last_payment_error-variant-1remediation).

### SubscriptionPaymentRetryFailedMerchantEventDataPreviousAttributes.order_id

### SubscriptionPaymentRetryFailedMerchantEventDataPreviousAttributes.order_id variant 1

anyOf variant 1: ID of the renewal order the retry collects. Omitted until Flint records it, which can be after processing starts..

- Value shape: string. ID of the renewal order the retry collects. Omitted until Flint records it, which can be after processing starts. 

### SubscriptionPaymentRetryFailedMerchantEventDataPreviousAttributes.order_id variant 2

anyOf variant 2.

- Value shape: null. ID of the renewal order the retry collects. Omitted until Flint records it, which can be after processing starts. 

### SubscriptionPaymentRetryFailedMerchantEventDataPreviousAttributes.payment_intent_id

### SubscriptionPaymentRetryFailedMerchantEventDataPreviousAttributes.payment_intent_id variant 1

anyOf variant 1: The payment intent this retry started. Omitted before charging begins or when no payment intent was created..

- Value shape: string. The payment intent this retry started. Omitted before charging begins or when no payment intent was created. 

### SubscriptionPaymentRetryFailedMerchantEventDataPreviousAttributes.payment_intent_id variant 2

anyOf variant 2.

- Value shape: null. The payment intent this retry started. Omitted before charging begins or when no payment intent was created. 

### SubscriptionPaymentRetryFailedMerchantEventDataPreviousAttributes.started_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### SubscriptionPaymentRetryFailedMerchantEventDataPreviousAttributes.status

### SubscriptionPaymentRetryFailedMerchantEventDataPreviousAttributes.status variant 1

anyOf variant 1: Where the retry is. Each value says what it means..

- Value shape: string. Where the retry is. Each value says what it means. Values: `"pending"`, `"processing"`, `"succeeded"`, `"failed"`.

### SubscriptionPaymentRetryFailedMerchantEventDataPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Where the retry is. Each value says what it means. 

### SubscriptionPaymentRetryFailedMerchantEventDataPreviousAttributes.subscription_id

### SubscriptionPaymentRetryFailedMerchantEventDataPreviousAttributes.subscription_id variant 1

anyOf variant 1: ID of the past-due subscription whose payment this retry collects..

- Value shape: string. ID of the past-due subscription whose payment this retry collects. 

### SubscriptionPaymentRetryFailedMerchantEventDataPreviousAttributes.subscription_id variant 2

anyOf variant 2.

- Value shape: null. ID of the past-due subscription whose payment this retry collects. 

### SubscriptionPaymentRetryFailedMerchantEventDataPreviousAttributes.subscription_payment_retry_id

### SubscriptionPaymentRetryFailedMerchantEventDataPreviousAttributes.subscription_payment_retry_id variant 1

anyOf variant 1: Unique identifier for this subscription payment retry, prefixed `spr_`..

- Value shape: string. Unique identifier for this subscription payment retry, prefixed `spr_`. 

### SubscriptionPaymentRetryFailedMerchantEventDataPreviousAttributes.subscription_payment_retry_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this subscription payment retry, prefixed `spr_`. 

### SubscriptionPaymentRetryFailedMerchantEventDataPreviousAttributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

