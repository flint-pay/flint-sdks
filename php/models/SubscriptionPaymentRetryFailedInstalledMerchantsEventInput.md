[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionPaymentRetryFailedInstalledMerchantsEventInput

The `subscription_payment_retry.failed` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/SubscriptionPaymentRetryFailedInstalledMerchantsEventInput.md#subscriptionpaymentretryfailedinstalledmerchantseventinputdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"subscription_payment_retry.failed"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [PartnerWebhookEnvelopeSourceInput](../models/PartnerWebhookEnvelopeSourceInput.md#partnerwebhookenvelopesourceinput) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### SubscriptionPaymentRetryFailedInstalledMerchantsEventInput.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/SubscriptionPaymentRetryCreatedInstalledMerchantsEventInput.md#subscriptionpaymentretrycreatedinstalledmerchantseventinputdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/SubscriptionPaymentRetryFailedInstalledMerchantsEventInput.md#subscriptionpaymentretryfailedinstalledmerchantseventinputdataprevious_attributes). |

### SubscriptionPaymentRetryFailedInstalledMerchantsEventInput.data.object

Field definitions: [SubscriptionPaymentRetryCreatedInstalledMerchantsEventInput.data.object](../models/SubscriptionPaymentRetryCreatedInstalledMerchantsEventInput.md#subscriptionpaymentretrycreatedinstalledmerchantseventinputdataobject).

### SubscriptionPaymentRetryFailedInstalledMerchantsEventInput.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `completed_at` | Optional | string or null | RFC3339 timestamp. `completed_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `idempotency_key` | Optional | string or null | The idempotency key sent with the request that created the retry. Repeating the request with the same key returns this retry. `idempotency_key`: [declared alternatives](../models/SubscriptionPaymentRetryFailedInstalledMerchantsEventInput.md#subscriptionpaymentretryfailedinstalledmerchantseventinputdataprevious_attributesidempotency_key). |
| `last_payment_error` | Optional | [PaymentErrorSummaryPreviousAttributesInput](../models/PaymentErrorSummaryPreviousAttributesInput.md#paymenterrorsummarypreviousattributesinput) or null | Why the payment failed. Present only when the retry's status is `failed` and a payment attempt was made. |
| `order_id` | Optional | string or null | ID of the renewal order the retry collects. Omitted until Flint records it, which can be after processing starts. `order_id`: [declared alternatives](../models/SubscriptionPaymentRetryFailedInstalledMerchantsEventInput.md#subscriptionpaymentretryfailedinstalledmerchantseventinputdataprevious_attributesorder_id). |
| `payment_intent_id` | Optional | string or null | The payment intent this retry started. Omitted before charging begins or when no payment intent was created. `payment_intent_id`: [declared alternatives](../models/SubscriptionPaymentRetryFailedInstalledMerchantsEventInput.md#subscriptionpaymentretryfailedinstalledmerchantseventinputdataprevious_attributespayment_intent_id). |
| `started_at` | Optional | string or null | RFC3339 timestamp. `started_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `status` | Optional | string or null | Where the retry is. Each value says what it means. Values: `"pending"`, `"processing"`, `"succeeded"`, `"failed"`. `status`: [declared alternatives](../models/SubscriptionPaymentRetryFailedInstalledMerchantsEventInput.md#subscriptionpaymentretryfailedinstalledmerchantseventinputdataprevious_attributesstatus). |
| `subscription_id` | Optional | string or null | ID of the past-due subscription whose payment this retry collects. `subscription_id`: [declared alternatives](../models/SubscriptionPaymentRetryFailedInstalledMerchantsEventInput.md#subscriptionpaymentretryfailedinstalledmerchantseventinputdataprevious_attributessubscription_id). |
| `subscription_payment_retry_id` | Optional | string or null | Unique identifier for this subscription payment retry, prefixed `spr_`. `subscription_payment_retry_id`: [declared alternatives](../models/SubscriptionPaymentRetryFailedInstalledMerchantsEventInput.md#subscriptionpaymentretryfailedinstalledmerchantseventinputdataprevious_attributessubscription_payment_retry_id). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |

### SubscriptionPaymentRetryFailedInstalledMerchantsEventInput.data.previous_attributes.completed_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### SubscriptionPaymentRetryFailedInstalledMerchantsEventInput.data.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### SubscriptionPaymentRetryFailedInstalledMerchantsEventInput.data.previous_attributes.idempotency_key

### SubscriptionPaymentRetryFailedInstalledMerchantsEventInput.data.previous_attributes.idempotency_key variant 1

anyOf variant 1: The idempotency key sent with the request that created the retry. Repeating the request with the same key returns this retry..

- Value shape: string. The idempotency key sent with the request that created the retry. Repeating the request with the same key returns this retry. 

### SubscriptionPaymentRetryFailedInstalledMerchantsEventInput.data.previous_attributes.idempotency_key variant 2

anyOf variant 2.

- Value shape: null. The idempotency key sent with the request that created the retry. Repeating the request with the same key returns this retry. 

### SubscriptionPaymentRetryFailedInstalledMerchantsEventInput.data.previous_attributes.order_id

### SubscriptionPaymentRetryFailedInstalledMerchantsEventInput.data.previous_attributes.order_id variant 1

anyOf variant 1: ID of the renewal order the retry collects. Omitted until Flint records it, which can be after processing starts..

- Value shape: string. ID of the renewal order the retry collects. Omitted until Flint records it, which can be after processing starts. ID of the renewal order the retry collects. Omitted until Flint records it, which can be after processing starts. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### SubscriptionPaymentRetryFailedInstalledMerchantsEventInput.data.previous_attributes.order_id variant 2

anyOf variant 2.

- Value shape: null. ID of the renewal order the retry collects. Omitted until Flint records it, which can be after processing starts. 

### SubscriptionPaymentRetryFailedInstalledMerchantsEventInput.data.previous_attributes.payment_intent_id

### SubscriptionPaymentRetryFailedInstalledMerchantsEventInput.data.previous_attributes.payment_intent_id variant 1

anyOf variant 1: The payment intent this retry started. Omitted before charging begins or when no payment intent was created..

- Value shape: string. The payment intent this retry started. Omitted before charging begins or when no payment intent was created. The payment intent this retry started. Omitted before charging begins or when no payment intent was created. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. 

### SubscriptionPaymentRetryFailedInstalledMerchantsEventInput.data.previous_attributes.payment_intent_id variant 2

anyOf variant 2.

- Value shape: null. The payment intent this retry started. Omitted before charging begins or when no payment intent was created. 

### SubscriptionPaymentRetryFailedInstalledMerchantsEventInput.data.previous_attributes.started_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### SubscriptionPaymentRetryFailedInstalledMerchantsEventInput.data.previous_attributes.status

### SubscriptionPaymentRetryFailedInstalledMerchantsEventInput.data.previous_attributes.status variant 1

anyOf variant 1: Where the retry is. Each value says what it means..

- Value shape: string. Where the retry is. Each value says what it means. Values: `"pending"`, `"processing"`, `"succeeded"`, `"failed"`.

### SubscriptionPaymentRetryFailedInstalledMerchantsEventInput.data.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. Where the retry is. Each value says what it means. 

### SubscriptionPaymentRetryFailedInstalledMerchantsEventInput.data.previous_attributes.subscription_id

### SubscriptionPaymentRetryFailedInstalledMerchantsEventInput.data.previous_attributes.subscription_id variant 1

anyOf variant 1: ID of the past-due subscription whose payment this retry collects..

- Value shape: string. ID of the past-due subscription whose payment this retry collects. ID of the past-due subscription whose payment this retry collects. Example: `"sub_01KEZF7C00BVRE8YDBXQB74BBM"`. 

### SubscriptionPaymentRetryFailedInstalledMerchantsEventInput.data.previous_attributes.subscription_id variant 2

anyOf variant 2.

- Value shape: null. ID of the past-due subscription whose payment this retry collects. 

### SubscriptionPaymentRetryFailedInstalledMerchantsEventInput.data.previous_attributes.subscription_payment_retry_id

### SubscriptionPaymentRetryFailedInstalledMerchantsEventInput.data.previous_attributes.subscription_payment_retry_id variant 1

anyOf variant 1: Unique identifier for this subscription payment retry, prefixed `spr_`..

- Value shape: string. Unique identifier for this subscription payment retry, prefixed `spr_`. Unique identifier for this subscription payment retry, prefixed `spr_`. Example: `"spr_01KEZF7C00YXMSBXGYEMYDD0AA"`. 

### SubscriptionPaymentRetryFailedInstalledMerchantsEventInput.data.previous_attributes.subscription_payment_retry_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this subscription payment retry, prefixed `spr_`. 

### SubscriptionPaymentRetryFailedInstalledMerchantsEventInput.data.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### SubscriptionPaymentRetryFailedInstalledMerchantsEventInput.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEventInput.source](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource).

