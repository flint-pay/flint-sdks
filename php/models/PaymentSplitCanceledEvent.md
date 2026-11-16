[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentSplitCanceledEvent

The `payment_split.canceled` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [PaymentSplitCanceledEventData](../models/PaymentSplitCanceledEventData.md#paymentsplitcanceledeventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"payment_split.canceled"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [PaymentSplitCanceledEventRequest](../models/PaymentSplitCanceledEventRequest.md#paymentsplitcanceledeventrequest) or null | The originating request. `null` when the event has no originating request ID. |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### PaymentSplitCanceledEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1object). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributes). |

### PaymentSplitCanceledEvent.data fields 1.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

Field definitions: [shared fields](PaymentSplit.md#paymentsplit).

### PaymentSplitCanceledEvent.data fields 1.object.reversals[]

Field definitions: [PaymentIntentResponse.data.splits[].reversals[]](../models/PaymentIntentResponse.md#paymentintentresponsedatasplitsreversals).

### PaymentSplitCanceledEvent.data fields 1.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Field definitions: [shared fields](PaymentSplitCanceledEventDataPreviousAttributes.md#paymentsplitcanceledeventdatapreviousattributes).

### PaymentSplitCanceledEvent.data fields 1.previous_attributes.canceled_reason

### PaymentSplitCanceledEvent.data fields 1.previous_attributes.canceled_reason variant 1

anyOf variant 1: Present when status is canceled. Can gain values..

- Value shape: string. Present when status is canceled. Can gain values. Values: `"payment_not_completed"`, `"install_revoked"`, `"fully_reversed"`.

### PaymentSplitCanceledEvent.data fields 1.previous_attributes.canceled_reason variant 2

anyOf variant 2.

- Value shape: null. Present when status is canceled. Can gain values. 

### PaymentSplitCanceledEvent.data fields 1.previous_attributes.collecting_merchant_id

### PaymentSplitCanceledEvent.data fields 1.previous_attributes.collecting_merchant_id variant 1

anyOf variant 1: The merchant of record that collected the payment..

- Value shape: string. The merchant of record that collected the payment. 

### PaymentSplitCanceledEvent.data fields 1.previous_attributes.collecting_merchant_id variant 2

anyOf variant 2.

- Value shape: null. The merchant of record that collected the payment. 

### PaymentSplitCanceledEvent.data fields 1.previous_attributes.created_at

### PaymentSplitCanceledEvent.data fields 1.previous_attributes.created_at variant 1

anyOf variant 1: When the payment's create recorded the split..

- Value shape: string. When the payment's create recorded the split. When the payment's create recorded the split. Format: `date-time`. 

### PaymentSplitCanceledEvent.data fields 1.previous_attributes.created_at variant 2

anyOf variant 2.

- Value shape: null. When the payment's create recorded the split. 

### PaymentSplitCanceledEvent.data fields 1.previous_attributes.description

### PaymentSplitCanceledEvent.data fields 1.previous_attributes.description variant 1

anyOf variant 1: The collecting merchant's description, shown to the seller..

- Value shape: string. The collecting merchant's description, shown to the seller. 

### PaymentSplitCanceledEvent.data fields 1.previous_attributes.description variant 2

anyOf variant 2.

- Value shape: null. The collecting merchant's description, shown to the seller. 

### PaymentSplitCanceledEvent.data fields 1.previous_attributes.external_reference_id

### PaymentSplitCanceledEvent.data fields 1.previous_attributes.external_reference_id variant 1

anyOf variant 1: Caller-owned identifier for this resource in an external system. Shown to the seller. Exact, case-sensitive matching..

- Value shape: string. Caller-owned identifier for this resource in an external system. Shown to the seller. Exact, case-sensitive matching. Caller-owned identifier for this resource in an external system. Shown to the seller. Exact, case-sensitive matching. maxLength: `255`. 

### PaymentSplitCanceledEvent.data fields 1.previous_attributes.external_reference_id variant 2

anyOf variant 2.

- Value shape: null. Caller-owned identifier for this resource in an external system. Shown to the seller. Exact, case-sensitive matching. 

### PaymentSplitCanceledEvent.data fields 1.previous_attributes.failure_reason

### PaymentSplitCanceledEvent.data fields 1.previous_attributes.failure_reason variant 1

anyOf variant 1: Present when status is failed. Can gain values; unknown reasons use split_failed..

- Value shape: string. Present when status is failed. Can gain values; unknown reasons use split_failed. Values: `"seller_cannot_receive"`, `"split_failed"`.

### PaymentSplitCanceledEvent.data fields 1.previous_attributes.failure_reason variant 2

anyOf variant 2.

- Value shape: null. Present when status is failed. Can gain values; unknown reasons use split_failed. 

### PaymentSplitCanceledEvent.data fields 1.previous_attributes.funds_available_at

### PaymentSplitCanceledEvent.data fields 1.previous_attributes.funds_available_at variant 1

anyOf variant 1: When the funds become available on Flint's balance. Null when Stripe has not reported it or the payment never succeeded. Can move later after a won dispute; frozen at release..

- Value shape: (string or null). When the funds become available on Flint's balance. Null when Stripe has not reported it or the payment never succeeded. Can move later after a won dispute; frozen at release. When the funds become available on Flint's balance. Null when Stripe has not reported it or the payment never succeeded. Can move later after a won dispute; frozen at release. Format: `date-time`. 

### PaymentSplitCanceledEvent.data fields 1.previous_attributes.funds_available_at variant 2

anyOf variant 2.

- Value shape: null. When the funds become available on Flint's balance. Null when Stripe has not reported it or the payment never succeeded. Can move later after a won dispute; frozen at release. 

### PaymentSplitCanceledEvent.data fields 1.previous_attributes.partner_app_id

### PaymentSplitCanceledEvent.data fields 1.previous_attributes.partner_app_id variant 1

anyOf variant 1: The collecting merchant's partner app..

- Value shape: string. The collecting merchant's partner app. 

### PaymentSplitCanceledEvent.data fields 1.previous_attributes.partner_app_id variant 2

anyOf variant 2.

- Value shape: null. The collecting merchant's partner app. 

### PaymentSplitCanceledEvent.data fields 1.previous_attributes.partner_app_install_id

### PaymentSplitCanceledEvent.data fields 1.previous_attributes.partner_app_install_id variant 1

anyOf variant 1: The seller's install of the app..

- Value shape: string. The seller's install of the app. 

### PaymentSplitCanceledEvent.data fields 1.previous_attributes.partner_app_install_id variant 2

anyOf variant 2.

- Value shape: null. The seller's install of the app. 

### PaymentSplitCanceledEvent.data fields 1.previous_attributes.payment_intent_id

### PaymentSplitCanceledEvent.data fields 1.previous_attributes.payment_intent_id variant 1

anyOf variant 1: The collecting merchant's payment. Sellers can read the split, but not the payment..

- Value shape: string. The collecting merchant's payment. Sellers can read the split, but not the payment. 

### PaymentSplitCanceledEvent.data fields 1.previous_attributes.payment_intent_id variant 2

anyOf variant 2.

- Value shape: null. The collecting merchant's payment. Sellers can read the split, but not the payment. 

### PaymentSplitCanceledEvent.data fields 1.previous_attributes.payment_split_id

### PaymentSplitCanceledEvent.data fields 1.previous_attributes.payment_split_id variant 1

anyOf variant 1: Unique identifier for the split..

- Value shape: string. Unique identifier for the split. 

### PaymentSplitCanceledEvent.data fields 1.previous_attributes.payment_split_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for the split. 

### PaymentSplitCanceledEvent.data fields 1.previous_attributes.pending_reason

### PaymentSplitCanceledEvent.data fields 1.previous_attributes.pending_reason variant 1

anyOf variant 1: Present when status is pending. Can gain values..

- Value shape: string. Present when status is pending. Can gain values. Values: `"awaiting_payment"`, `"dispute_open"`, `"reversals_pending"`, `"awaiting_funds"`.

### PaymentSplitCanceledEvent.data fields 1.previous_attributes.pending_reason variant 2

anyOf variant 2.

- Value shape: null. Present when status is pending. Can gain values. 

### PaymentSplitCanceledEvent.data fields 1.previous_attributes.reversals

### PaymentSplitCanceledEvent.data fields 1.previous_attributes.reversals variant 1

anyOf variant 1: Read-only nested children created by Flint, embedded whole. Empty when none. At most one per refund and one per dispute..

- Value shape: Array of [PaymentSplitReversalPreviousAttributes](../models/PaymentSplitReversalPreviousAttributes.md#paymentsplitreversalpreviousattributes). Read-only nested children created by Flint, embedded whole. Empty when none. At most one per refund and one per dispute. 

### PaymentSplitCanceledEvent.data fields 1.previous_attributes.reversals variant 2

anyOf variant 2.

- Value shape: null. Read-only nested children created by Flint, embedded whole. Empty when none. At most one per refund and one per dispute. 

### PaymentSplitCanceledEvent.data fields 1.previous_attributes.reversals variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The split's share taken back. |
| `created_at` | Optional | string or null | When the reversal was recorded. `created_at`: [declared alternatives](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesreversals-variant-1-fields-1created_at). |
| `payment_split_reversal_id` | Optional | string or null | Unique identifier for the reversal. `payment_split_reversal_id`: [declared alternatives](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesreversals-variant-1-fields-1payment_split_reversal_id). |
| `reason` | Optional | string or null | Why Flint created the reversal. Values: `"refund"`, `"dispute"`, `"other"`. `reason`: [declared alternatives](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesreversals-variant-1-fields-1reason). |
| `reinstated_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Funds returned to whoever funded the reversal, such as after a won dispute or failed refund. |
| `shortfall_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The part the collecting merchant covered. |
| `source` | Optional | Alternative shapes (see declared variants) | The refund or dispute behind the reversal. `source`: [declared alternatives](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesreversals-variant-1-fields-1source). |
| `status` | Optional | string or null | The reversal lifecycle status. Values: `"pending"`, `"succeeded"`, `"canceled"`. `status`: [declared alternatives](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesreversals-variant-1-fields-1status). |
| `succeeded_at` | Optional | string or null | When the split's share was recovered. Present when succeeded. `succeeded_at`: [declared alternatives](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesreversals-variant-1-fields-1succeeded_at). |

### PaymentSplitCanceledEvent.data fields 1.previous_attributes.reversals variant 1.[] fields 1.created_at

### PaymentSplitCanceledEvent.data fields 1.previous_attributes.reversals variant 1.[] fields 1.created_at variant 1

anyOf variant 1: When the reversal was recorded..

- Value shape: string. When the reversal was recorded. When the reversal was recorded. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PaymentSplitCanceledEvent.data fields 1.previous_attributes.reversals variant 1.[] fields 1.created_at variant 2

anyOf variant 2.

- Value shape: null. When the reversal was recorded. 

### PaymentSplitCanceledEvent.data fields 1.previous_attributes.reversals variant 1.[] fields 1.payment_split_reversal_id

### PaymentSplitCanceledEvent.data fields 1.previous_attributes.reversals variant 1.[] fields 1.payment_split_reversal_id variant 1

anyOf variant 1: Unique identifier for the reversal..

- Value shape: string. Unique identifier for the reversal. Unique identifier for the reversal. Example: `"psrev_01KEZF7C00XC1HA7S8YCQJDBDM"`. 

### PaymentSplitCanceledEvent.data fields 1.previous_attributes.reversals variant 1.[] fields 1.payment_split_reversal_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for the reversal. 

### PaymentSplitCanceledEvent.data fields 1.previous_attributes.reversals variant 1.[] fields 1.reason

### PaymentSplitCanceledEvent.data fields 1.previous_attributes.reversals variant 1.[] fields 1.reason variant 1

anyOf variant 1: Why Flint created the reversal..

- Value shape: string. Why Flint created the reversal. Values: `"refund"`, `"dispute"`, `"other"`.

### PaymentSplitCanceledEvent.data fields 1.previous_attributes.reversals variant 1.[] fields 1.reason variant 2

anyOf variant 2.

- Value shape: null. Why Flint created the reversal. 

### PaymentSplitCanceledEvent.data fields 1.previous_attributes.reversals variant 1.[] fields 1.source

The refund or dispute behind the reversal.

Field definitions: [shared fields](ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_by).

### PaymentSplitCanceledEvent.data fields 1.previous_attributes.reversals variant 1.[] fields 1.source variant 1

anyOf ResourceReferencePreviousAttributes.

- Optional: `resource_id`, `resource_type`.

### PaymentSplitCanceledEvent.data fields 1.previous_attributes.reversals variant 1.[] fields 1.source variant 2

anyOf variant 2.

- Undeclared: `resource_id`, `resource_type`.
- Value shape: null. The refund or dispute behind the reversal. 

### PaymentSplitCanceledEvent.data fields 1.previous_attributes.reversals variant 1.[] fields 1.source variant 1.resource_id

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_by variant 1.resource_id](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_by-variant-1resource_id).

### PaymentSplitCanceledEvent.data fields 1.previous_attributes.reversals variant 1.[] fields 1.source variant 1.resource_type

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_by variant 1.resource_type](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_by-variant-1resource_type).

### PaymentSplitCanceledEvent.data fields 1.previous_attributes.reversals variant 1.[] fields 1.status

### PaymentSplitCanceledEvent.data fields 1.previous_attributes.reversals variant 1.[] fields 1.status variant 1

anyOf variant 1: The reversal lifecycle status..

- Value shape: string. The reversal lifecycle status. Values: `"pending"`, `"succeeded"`, `"canceled"`.

### PaymentSplitCanceledEvent.data fields 1.previous_attributes.reversals variant 1.[] fields 1.status variant 2

anyOf variant 2.

- Value shape: null. The reversal lifecycle status. 

### PaymentSplitCanceledEvent.data fields 1.previous_attributes.reversals variant 1.[] fields 1.succeeded_at

### PaymentSplitCanceledEvent.data fields 1.previous_attributes.reversals variant 1.[] fields 1.succeeded_at variant 1

anyOf variant 1: When the split's share was recovered. Present when succeeded..

- Value shape: string. When the split's share was recovered. Present when succeeded. When the split's share was recovered. Present when succeeded. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PaymentSplitCanceledEvent.data fields 1.previous_attributes.reversals variant 1.[] fields 1.succeeded_at variant 2

anyOf variant 2.

- Value shape: null. When the split's share was recovered. Present when succeeded. 

### PaymentSplitCanceledEvent.data fields 1.previous_attributes.seller_merchant_id

### PaymentSplitCanceledEvent.data fields 1.previous_attributes.seller_merchant_id variant 1

anyOf variant 1: The merchant receiving the split..

- Value shape: string. The merchant receiving the split. 

### PaymentSplitCanceledEvent.data fields 1.previous_attributes.seller_merchant_id variant 2

anyOf variant 2.

- Value shape: null. The merchant receiving the split. 

### PaymentSplitCanceledEvent.data fields 1.previous_attributes.status

### PaymentSplitCanceledEvent.data fields 1.previous_attributes.status variant 1

anyOf variant 1: The split lifecycle status..

- Value shape: string. The split lifecycle status. Values: `"pending"`, `"processing"`, `"succeeded"`, `"failed"`, `"canceled"`.

### PaymentSplitCanceledEvent.data fields 1.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. The split lifecycle status. 

### PaymentSplitCanceledEvent.data fields 1.previous_attributes.succeeded_at

### PaymentSplitCanceledEvent.data fields 1.previous_attributes.succeeded_at variant 1

anyOf variant 1: When the split reached the seller's balance. Present when succeeded..

- Value shape: string. When the split reached the seller's balance. Present when succeeded. When the split reached the seller's balance. Present when succeeded. Format: `date-time`. 

### PaymentSplitCanceledEvent.data fields 1.previous_attributes.succeeded_at variant 2

anyOf variant 2.

- Value shape: null. When the split reached the seller's balance. Present when succeeded. 

### PaymentSplitCanceledEvent.data fields 1.previous_attributes.updated_at

### PaymentSplitCanceledEvent.data fields 1.previous_attributes.updated_at variant 1

anyOf variant 1: When the split last changed..

- Value shape: string. When the split last changed. When the split last changed. Format: `date-time`. 

### PaymentSplitCanceledEvent.data fields 1.previous_attributes.updated_at variant 2

anyOf variant 2.

- Value shape: null. When the split last changed. 

### PaymentSplitCanceledEvent.data fields 1.previous_attributes.version

### PaymentSplitCanceledEvent.data fields 1.previous_attributes.version variant 1

anyOf variant 1: Persisted version of this resource's owned state. Expanded resources and external observations can change independently..

- Value shape: integer. Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: `uint64`. minimum: `1`. 

### PaymentSplitCanceledEvent.data fields 1.previous_attributes.version variant 2

anyOf variant 2.

- Value shape: null. Persisted version of this resource's owned state. Expanded resources and external observations can change independently. 

