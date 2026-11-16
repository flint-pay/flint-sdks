[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PlatformFeePayoutFailedEvent

The `platform_fee_payout.failed` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [PlatformFeePayoutFailedEventData](../models/PlatformFeePayoutFailedEventData.md#platformfeepayoutfailedeventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/PlatformFeePayoutFailedEvent.md#platformfeepayoutfailedeventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"platform_fee_payout.failed"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [PlatformFeePayoutFailedEventRequest](../models/PlatformFeePayoutFailedEventRequest.md#platformfeepayoutfailedeventrequest) or null | The originating request. `null` when the event has no originating request ID. |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### PlatformFeePayoutFailedEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/PlatformFeePayoutCreatedEvent.md#platformfeepayoutcreatedeventdata-fields-1object). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/PlatformFeePayoutFailedEvent.md#platformfeepayoutfailedeventdata-fields-1previous_attributes). |

### PlatformFeePayoutFailedEvent.data fields 1.object

Field definitions: [PlatformFeePayoutCreatedEvent.data fields 1.object](../models/PlatformFeePayoutCreatedEvent.md#platformfeepayoutcreatedeventdata-fields-1object).

### PlatformFeePayoutFailedEvent.data fields 1.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Field definitions: [shared fields](PlatformFeePayoutFailedEventDataPreviousAttributes.md#platformfeepayoutfailedeventdatapreviousattributes).

### PlatformFeePayoutFailedEvent.data fields 1.previous_attributes.balance_transaction_id

### PlatformFeePayoutFailedEvent.data fields 1.previous_attributes.balance_transaction_id variant 1

anyOf variant 1: The credit on your merchant ledger. Present once Flint observes it; linking it sends no payout event and doesn't advance version..

- Value shape: string. The credit on your merchant ledger. Present once Flint observes it; linking it sends no payout event and doesn't advance version. 

### PlatformFeePayoutFailedEvent.data fields 1.previous_attributes.balance_transaction_id variant 2

anyOf variant 2.

- Value shape: null. The credit on your merchant ledger. Present once Flint observes it; linking it sends no payout event and doesn't advance version. 

### PlatformFeePayoutFailedEvent.data fields 1.previous_attributes.created_at

### PlatformFeePayoutFailedEvent.data fields 1.previous_attributes.created_at variant 1

anyOf variant 1: When Flint prepared the payout..

- Value shape: string. When Flint prepared the payout. When Flint prepared the payout. Format: `date-time`. 

### PlatformFeePayoutFailedEvent.data fields 1.previous_attributes.created_at variant 2

anyOf variant 2.

- Value shape: null. When Flint prepared the payout. 

### PlatformFeePayoutFailedEvent.data fields 1.previous_attributes.failure_reason

### PlatformFeePayoutFailedEvent.data fields 1.previous_attributes.failure_reason variant 1

anyOf variant 1: Why the payout failed. Present only when status is failed. Can gain values; treat unknown values as payout_failed..

- Value shape: string. Why the payout failed. Present only when status is failed. Can gain values; treat unknown values as payout_failed. Values: `"merchant_cannot_receive"`, `"payout_failed"`.

### PlatformFeePayoutFailedEvent.data fields 1.previous_attributes.failure_reason variant 2

anyOf variant 2.

- Value shape: null. Why the payout failed. Present only when status is failed. Can gain values; treat unknown values as payout_failed. 

### PlatformFeePayoutFailedEvent.data fields 1.previous_attributes.partner_app_id

### PlatformFeePayoutFailedEvent.data fields 1.previous_attributes.partner_app_id variant 1

anyOf variant 1: The partner app whose fee balance funded the payout..

- Value shape: string. The partner app whose fee balance funded the payout. 

### PlatformFeePayoutFailedEvent.data fields 1.previous_attributes.partner_app_id variant 2

anyOf variant 2.

- Value shape: null. The partner app whose fee balance funded the payout. 

### PlatformFeePayoutFailedEvent.data fields 1.previous_attributes.platform_fee_payout_id

### PlatformFeePayoutFailedEvent.data fields 1.previous_attributes.platform_fee_payout_id variant 1

anyOf variant 1: Unique identifier for the platform fee payout..

- Value shape: string. Unique identifier for the platform fee payout. 

### PlatformFeePayoutFailedEvent.data fields 1.previous_attributes.platform_fee_payout_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for the platform fee payout. 

### PlatformFeePayoutFailedEvent.data fields 1.previous_attributes.status

### PlatformFeePayoutFailedEvent.data fields 1.previous_attributes.status variant 1

anyOf variant 1: Where the payout stands. succeeded and failed are final..

- Value shape: string. Where the payout stands. succeeded and failed are final. Values: `"pending"`, `"succeeded"`, `"failed"`.

### PlatformFeePayoutFailedEvent.data fields 1.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. Where the payout stands. succeeded and failed are final. 

### PlatformFeePayoutFailedEvent.data fields 1.previous_attributes.succeeded_at

### PlatformFeePayoutFailedEvent.data fields 1.previous_attributes.succeeded_at variant 1

anyOf variant 1: When the transfer succeeded. Present only when status is succeeded..

- Value shape: string. When the transfer succeeded. Present only when status is succeeded. When the transfer succeeded. Present only when status is succeeded. Format: `date-time`. 

### PlatformFeePayoutFailedEvent.data fields 1.previous_attributes.succeeded_at variant 2

anyOf variant 2.

- Value shape: null. When the transfer succeeded. Present only when status is succeeded. 

### PlatformFeePayoutFailedEvent.data fields 1.previous_attributes.updated_at

### PlatformFeePayoutFailedEvent.data fields 1.previous_attributes.updated_at variant 1

anyOf variant 1: When the payout's owned state last changed. Retry bookkeeping and observing the credit don't change it..

- Value shape: string. When the payout's owned state last changed. Retry bookkeeping and observing the credit don't change it. When the payout's owned state last changed. Retry bookkeeping and observing the credit don't change it. Format: `date-time`. 

### PlatformFeePayoutFailedEvent.data fields 1.previous_attributes.updated_at variant 2

anyOf variant 2.

- Value shape: null. When the payout's owned state last changed. Retry bookkeeping and observing the credit don't change it. 

### PlatformFeePayoutFailedEvent.data fields 1.previous_attributes.version

Declared alternatives: [PaymentSplitCanceledEvent.data fields 1.previous_attributes.version](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesversion).

