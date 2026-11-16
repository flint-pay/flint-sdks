[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentSplitCanceledEventInput

The `payment_split.canceled` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/PaymentSplitCanceledEventInput.md#paymentsplitcanceledeventinputdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"payment_split.canceled"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | object or null | The originating request. `null` when the event has no originating request ID. `request`: [field definitions](../models/ApiKeyCreatedEventInput.md#apikeycreatedeventinputrequest). |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. Example: `"test_01KEZF7C00JC77HTMTB2XHNPE0"`. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### PaymentSplitCanceledEventInput.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/PaymentSplitCanceledEventInput.md#paymentsplitcanceledeventinputdataobject). |
| `previous_attributes` | Optional | object and [PaymentSplitPreviousAttributesInput](../models/PaymentSplitPreviousAttributesInput.md#paymentsplitpreviousattributesinput) | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/PaymentSplitCanceledEventInput.md#paymentsplitcanceledeventinputdataprevious_attributes). |

### PaymentSplitCanceledEventInput.data.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

Field definitions: [shared fields](PaymentSplitInput.md#paymentsplitinput).

### PaymentSplitCanceledEventInput.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Field definitions: [shared fields](PaymentSplitPreviousAttributesInput.md#paymentsplitpreviousattributesinput).

### PaymentSplitCanceledEventInput.data.previous_attributes.canceled_reason

### PaymentSplitCanceledEventInput.data.previous_attributes.canceled_reason variant 1

anyOf variant 1: Present when status is canceled. Can gain values..

- Value shape: string. Present when status is canceled. Can gain values. Values: `"payment_not_completed"`, `"install_revoked"`, `"fully_reversed"`.

### PaymentSplitCanceledEventInput.data.previous_attributes.canceled_reason variant 2

anyOf variant 2.

- Value shape: null. Present when status is canceled. Can gain values. 

### PaymentSplitCanceledEventInput.data.previous_attributes.collecting_merchant_id

### PaymentSplitCanceledEventInput.data.previous_attributes.collecting_merchant_id variant 1

anyOf variant 1: The merchant of record that collected the payment..

- Value shape: string. The merchant of record that collected the payment. The merchant of record that collected the payment. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. 

### PaymentSplitCanceledEventInput.data.previous_attributes.collecting_merchant_id variant 2

anyOf variant 2.

- Value shape: null. The merchant of record that collected the payment. 

### PaymentSplitCanceledEventInput.data.previous_attributes.created_at

### PaymentSplitCanceledEventInput.data.previous_attributes.created_at variant 1

anyOf variant 1: When the payment's create recorded the split..

- Value shape: string. When the payment's create recorded the split. When the payment's create recorded the split. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PaymentSplitCanceledEventInput.data.previous_attributes.created_at variant 2

anyOf variant 2.

- Value shape: null. When the payment's create recorded the split. 

### PaymentSplitCanceledEventInput.data.previous_attributes.description

### PaymentSplitCanceledEventInput.data.previous_attributes.description variant 1

anyOf variant 1: The collecting merchant's description, shown to the seller..

- Value shape: string. The collecting merchant's description, shown to the seller. 

### PaymentSplitCanceledEventInput.data.previous_attributes.description variant 2

anyOf variant 2.

- Value shape: null. The collecting merchant's description, shown to the seller. 

### PaymentSplitCanceledEventInput.data.previous_attributes.external_reference_id

### PaymentSplitCanceledEventInput.data.previous_attributes.external_reference_id variant 1

anyOf variant 1: Caller-owned identifier for this resource in an external system. Shown to the seller. Exact, case-sensitive matching..

- Value shape: string. Caller-owned identifier for this resource in an external system. Shown to the seller. Exact, case-sensitive matching. Caller-owned identifier for this resource in an external system. Shown to the seller. Exact, case-sensitive matching. maxLength: `255`. Example: `"warehouse-1842"`. 

### PaymentSplitCanceledEventInput.data.previous_attributes.external_reference_id variant 2

anyOf variant 2.

- Value shape: null. Caller-owned identifier for this resource in an external system. Shown to the seller. Exact, case-sensitive matching. 

### PaymentSplitCanceledEventInput.data.previous_attributes.failure_reason

### PaymentSplitCanceledEventInput.data.previous_attributes.failure_reason variant 1

anyOf variant 1: Present when status is failed. Can gain values; unknown reasons use split_failed..

- Value shape: string. Present when status is failed. Can gain values; unknown reasons use split_failed. Values: `"seller_cannot_receive"`, `"split_failed"`.

### PaymentSplitCanceledEventInput.data.previous_attributes.failure_reason variant 2

anyOf variant 2.

- Value shape: null. Present when status is failed. Can gain values; unknown reasons use split_failed. 

### PaymentSplitCanceledEventInput.data.previous_attributes.funds_available_at

### PaymentSplitCanceledEventInput.data.previous_attributes.funds_available_at variant 1

anyOf variant 1: When the funds become available on Flint's balance. Null when Stripe has not reported it or the payment never succeeded. Can move later after a won dispute; frozen at release..

- Value shape: string. When the funds become available on Flint's balance. Null when Stripe has not reported it or the payment never succeeded. Can move later after a won dispute; frozen at release. When the funds become available on Flint's balance. Null when Stripe has not reported it or the payment never succeeded. Can move later after a won dispute; frozen at release. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PaymentSplitCanceledEventInput.data.previous_attributes.funds_available_at variant 2

anyOf variant 2.

- Value shape: null. When the funds become available on Flint's balance. Null when Stripe has not reported it or the payment never succeeded. Can move later after a won dispute; frozen at release. 

### PaymentSplitCanceledEventInput.data.previous_attributes.partner_app_id

### PaymentSplitCanceledEventInput.data.previous_attributes.partner_app_id variant 1

anyOf variant 1: The collecting merchant's partner app..

- Value shape: string. The collecting merchant's partner app. The collecting merchant's partner app. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. 

### PaymentSplitCanceledEventInput.data.previous_attributes.partner_app_id variant 2

anyOf variant 2.

- Value shape: null. The collecting merchant's partner app. 

### PaymentSplitCanceledEventInput.data.previous_attributes.partner_app_install_id

### PaymentSplitCanceledEventInput.data.previous_attributes.partner_app_install_id variant 1

anyOf variant 1: The seller's install of the app..

- Value shape: string. The seller's install of the app. The seller's install of the app. Example: `"pinst_01KEZF7C003HVKZR3GZAW6AFAZ"`. 

### PaymentSplitCanceledEventInput.data.previous_attributes.partner_app_install_id variant 2

anyOf variant 2.

- Value shape: null. The seller's install of the app. 

### PaymentSplitCanceledEventInput.data.previous_attributes.payment_intent_id

### PaymentSplitCanceledEventInput.data.previous_attributes.payment_intent_id variant 1

anyOf variant 1: The collecting merchant's payment. Sellers can read the split, but not the payment..

- Value shape: string. The collecting merchant's payment. Sellers can read the split, but not the payment. The collecting merchant's payment. Sellers can read the split, but not the payment. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. 

### PaymentSplitCanceledEventInput.data.previous_attributes.payment_intent_id variant 2

anyOf variant 2.

- Value shape: null. The collecting merchant's payment. Sellers can read the split, but not the payment. 

### PaymentSplitCanceledEventInput.data.previous_attributes.payment_split_id

### PaymentSplitCanceledEventInput.data.previous_attributes.payment_split_id variant 1

anyOf variant 1: Unique identifier for the split..

- Value shape: string. Unique identifier for the split. Unique identifier for the split. Example: `"psplit_01KEZF7C00Y5HA4Z8D4KRA07K8"`. 

### PaymentSplitCanceledEventInput.data.previous_attributes.payment_split_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for the split. 

### PaymentSplitCanceledEventInput.data.previous_attributes.pending_reason

### PaymentSplitCanceledEventInput.data.previous_attributes.pending_reason variant 1

anyOf variant 1: Present when status is pending. Can gain values..

- Value shape: string. Present when status is pending. Can gain values. Values: `"awaiting_payment"`, `"dispute_open"`, `"reversals_pending"`, `"awaiting_funds"`.

### PaymentSplitCanceledEventInput.data.previous_attributes.pending_reason variant 2

anyOf variant 2.

- Value shape: null. Present when status is pending. Can gain values. 

### PaymentSplitCanceledEventInput.data.previous_attributes.reversals

### PaymentSplitCanceledEventInput.data.previous_attributes.reversals variant 1

anyOf variant 1: Read-only nested children created by Flint, embedded whole. Empty when none. At most one per refund and one per dispute..

- Value shape: Array of [PaymentSplitReversalPreviousAttributesInput](../models/PaymentSplitReversalPreviousAttributesInput.md#paymentsplitreversalpreviousattributesinput). Read-only nested children created by Flint, embedded whole. Empty when none. At most one per refund and one per dispute. 

### PaymentSplitCanceledEventInput.data.previous_attributes.reversals variant 2

anyOf variant 2.

- Value shape: null. Read-only nested children created by Flint, embedded whole. Empty when none. At most one per refund and one per dispute. 

### PaymentSplitCanceledEventInput.data.previous_attributes.seller_merchant_id

### PaymentSplitCanceledEventInput.data.previous_attributes.seller_merchant_id variant 1

anyOf variant 1: The merchant receiving the split..

- Value shape: string. The merchant receiving the split. The merchant receiving the split. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. 

### PaymentSplitCanceledEventInput.data.previous_attributes.seller_merchant_id variant 2

anyOf variant 2.

- Value shape: null. The merchant receiving the split. 

### PaymentSplitCanceledEventInput.data.previous_attributes.status

### PaymentSplitCanceledEventInput.data.previous_attributes.status variant 1

anyOf variant 1: The split lifecycle status..

- Value shape: string. The split lifecycle status. Values: `"pending"`, `"processing"`, `"succeeded"`, `"failed"`, `"canceled"`.

### PaymentSplitCanceledEventInput.data.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. The split lifecycle status. 

### PaymentSplitCanceledEventInput.data.previous_attributes.succeeded_at

### PaymentSplitCanceledEventInput.data.previous_attributes.succeeded_at variant 1

anyOf variant 1: When the split reached the seller's balance. Present when succeeded..

- Value shape: string. When the split reached the seller's balance. Present when succeeded. When the split reached the seller's balance. Present when succeeded. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PaymentSplitCanceledEventInput.data.previous_attributes.succeeded_at variant 2

anyOf variant 2.

- Value shape: null. When the split reached the seller's balance. Present when succeeded. 

### PaymentSplitCanceledEventInput.data.previous_attributes.updated_at

### PaymentSplitCanceledEventInput.data.previous_attributes.updated_at variant 1

anyOf variant 1: When the split last changed..

- Value shape: string. When the split last changed. When the split last changed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PaymentSplitCanceledEventInput.data.previous_attributes.updated_at variant 2

anyOf variant 2.

- Value shape: null. When the split last changed. 

### PaymentSplitCanceledEventInput.data.previous_attributes.version

Declared alternatives: [BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.version](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.md#buyerexpandedpaymentintentsummarypreviousattributesinputversion).

### PaymentSplitCanceledEventInput.request

Field definitions: [ApiKeyCreatedEventInput.request](../models/ApiKeyCreatedEventInput.md#apikeycreatedeventinputrequest).

