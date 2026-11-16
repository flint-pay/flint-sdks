[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PlatformFeePayoutFailedEvent

The `platform_fee_payout.failed` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/PlatformFeePayoutFailedEvent.md#platformfeepayoutfailedeventdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"platform_fee_payout.failed"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | object or null | The originating request. `null` when the event has no originating request ID. `request`: [field definitions](../models/ApiKeyCreatedEvent.md#apikeycreatedeventrequest). |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. Example: `"test_01KEZF7C00JC77HTMTB2XHNPE0"`. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### PlatformFeePayoutFailedEvent.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/PlatformFeePayoutCreatedEvent.md#platformfeepayoutcreatedeventdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/PlatformFeePayoutFailedEvent.md#platformfeepayoutfailedeventdataprevious_attributes). |

### PlatformFeePayoutFailedEvent.data.object

Field definitions: [PlatformFeePayoutCreatedEvent.data.object](../models/PlatformFeePayoutCreatedEvent.md#platformfeepayoutcreatedeventdataobject).

### PlatformFeePayoutFailedEvent.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | The amount transferred to your merchant balance. `amount_money`: [declared alternatives](../models/PlatformFeePayoutFailedEvent.md#platformfeepayoutfailedeventdataprevious_attributesamount_money). |
| `balance_transaction_id` | Optional | string or null | The credit on your merchant ledger. Present once Flint observes it; linking it sends no payout event and doesn't advance version. `balance_transaction_id`: [declared alternatives](../models/PlatformFeePayoutFailedEvent.md#platformfeepayoutfailedeventdataprevious_attributesbalance_transaction_id). |
| `created_at` | Optional | string or null | When Flint prepared the payout. `created_at`: [declared alternatives](../models/PlatformFeePayoutFailedEvent.md#platformfeepayoutfailedeventdataprevious_attributescreated_at). |
| `failure_reason` | Optional | string or null | Why the payout failed. Present only when status is failed. Can gain values; treat unknown values as payout_failed. Values: `"merchant_cannot_receive"`, `"payout_failed"`. `failure_reason`: [declared alternatives](../models/PlatformFeePayoutFailedEvent.md#platformfeepayoutfailedeventdataprevious_attributesfailure_reason). |
| `partner_app_id` | Optional | string or null | The partner app whose fee balance funded the payout. `partner_app_id`: [declared alternatives](../models/PlatformFeePayoutFailedEvent.md#platformfeepayoutfailedeventdataprevious_attributespartner_app_id). |
| `platform_fee_payout_id` | Optional | string or null | Unique identifier for the platform fee payout. `platform_fee_payout_id`: [declared alternatives](../models/PlatformFeePayoutFailedEvent.md#platformfeepayoutfailedeventdataprevious_attributesplatform_fee_payout_id). |
| `status` | Optional | string or null | Where the payout stands. succeeded and failed are final. Values: `"pending"`, `"succeeded"`, `"failed"`. `status`: [declared alternatives](../models/PlatformFeePayoutFailedEvent.md#platformfeepayoutfailedeventdataprevious_attributesstatus). |
| `succeeded_at` | Optional | string or null | When the transfer succeeded. Present only when status is succeeded. `succeeded_at`: [declared alternatives](../models/PlatformFeePayoutFailedEvent.md#platformfeepayoutfailedeventdataprevious_attributessucceeded_at). |
| `updated_at` | Optional | string or null | When the payout's owned state last changed. Retry bookkeeping and observing the credit don't change it. `updated_at`: [declared alternatives](../models/PlatformFeePayoutFailedEvent.md#platformfeepayoutfailedeventdataprevious_attributesupdated_at). |
| `version` | Optional | integer or null | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. `version`: [declared alternatives](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributesversion). |

### PlatformFeePayoutFailedEvent.data.previous_attributes.amount_money

The amount transferred to your merchant balance.

Field definitions: [shared fields](PromotionRuleValue.md#promotionrulevalue).

### PlatformFeePayoutFailedEvent.data.previous_attributes.amount_money variant 1

anyOf MoneyValue: The amount transferred to your merchant balance..

- Required: `amount`, `currency`.

### PlatformFeePayoutFailedEvent.data.previous_attributes.amount_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. The amount transferred to your merchant balance. 

### PlatformFeePayoutFailedEvent.data.previous_attributes.balance_transaction_id

### PlatformFeePayoutFailedEvent.data.previous_attributes.balance_transaction_id variant 1

anyOf variant 1: The credit on your merchant ledger. Present once Flint observes it; linking it sends no payout event and doesn't advance version..

- Value shape: string. The credit on your merchant ledger. Present once Flint observes it; linking it sends no payout event and doesn't advance version. The credit on your merchant ledger. Present once Flint observes it; linking it sends no payout event and doesn't advance version. Example: `"btxn_01KEZF7C00H1Z82CMFWWXMZGHZ"`. 

### PlatformFeePayoutFailedEvent.data.previous_attributes.balance_transaction_id variant 2

anyOf variant 2.

- Value shape: null. The credit on your merchant ledger. Present once Flint observes it; linking it sends no payout event and doesn't advance version. 

### PlatformFeePayoutFailedEvent.data.previous_attributes.created_at

### PlatformFeePayoutFailedEvent.data.previous_attributes.created_at variant 1

anyOf variant 1: When Flint prepared the payout..

- Value shape: string. When Flint prepared the payout. When Flint prepared the payout. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PlatformFeePayoutFailedEvent.data.previous_attributes.created_at variant 2

anyOf variant 2.

- Value shape: null. When Flint prepared the payout. 

### PlatformFeePayoutFailedEvent.data.previous_attributes.failure_reason

### PlatformFeePayoutFailedEvent.data.previous_attributes.failure_reason variant 1

anyOf variant 1: Why the payout failed. Present only when status is failed. Can gain values; treat unknown values as payout_failed..

- Value shape: string. Why the payout failed. Present only when status is failed. Can gain values; treat unknown values as payout_failed. Values: `"merchant_cannot_receive"`, `"payout_failed"`.

### PlatformFeePayoutFailedEvent.data.previous_attributes.failure_reason variant 2

anyOf variant 2.

- Value shape: null. Why the payout failed. Present only when status is failed. Can gain values; treat unknown values as payout_failed. 

### PlatformFeePayoutFailedEvent.data.previous_attributes.partner_app_id

### PlatformFeePayoutFailedEvent.data.previous_attributes.partner_app_id variant 1

anyOf variant 1: The partner app whose fee balance funded the payout..

- Value shape: string. The partner app whose fee balance funded the payout. The partner app whose fee balance funded the payout. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. 

### PlatformFeePayoutFailedEvent.data.previous_attributes.partner_app_id variant 2

anyOf variant 2.

- Value shape: null. The partner app whose fee balance funded the payout. 

### PlatformFeePayoutFailedEvent.data.previous_attributes.platform_fee_payout_id

### PlatformFeePayoutFailedEvent.data.previous_attributes.platform_fee_payout_id variant 1

anyOf variant 1: Unique identifier for the platform fee payout..

- Value shape: string. Unique identifier for the platform fee payout. Unique identifier for the platform fee payout. Example: `"pfpo_01KEZF7C00H58B147FK286D4A4"`. 

### PlatformFeePayoutFailedEvent.data.previous_attributes.platform_fee_payout_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for the platform fee payout. 

### PlatformFeePayoutFailedEvent.data.previous_attributes.status

### PlatformFeePayoutFailedEvent.data.previous_attributes.status variant 1

anyOf variant 1: Where the payout stands. succeeded and failed are final..

- Value shape: string. Where the payout stands. succeeded and failed are final. Values: `"pending"`, `"succeeded"`, `"failed"`.

### PlatformFeePayoutFailedEvent.data.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. Where the payout stands. succeeded and failed are final. 

### PlatformFeePayoutFailedEvent.data.previous_attributes.succeeded_at

### PlatformFeePayoutFailedEvent.data.previous_attributes.succeeded_at variant 1

anyOf variant 1: When the transfer succeeded. Present only when status is succeeded..

- Value shape: string. When the transfer succeeded. Present only when status is succeeded. When the transfer succeeded. Present only when status is succeeded. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PlatformFeePayoutFailedEvent.data.previous_attributes.succeeded_at variant 2

anyOf variant 2.

- Value shape: null. When the transfer succeeded. Present only when status is succeeded. 

### PlatformFeePayoutFailedEvent.data.previous_attributes.updated_at

### PlatformFeePayoutFailedEvent.data.previous_attributes.updated_at variant 1

anyOf variant 1: When the payout's owned state last changed. Retry bookkeeping and observing the credit don't change it..

- Value shape: string. When the payout's owned state last changed. Retry bookkeeping and observing the credit don't change it. When the payout's owned state last changed. Retry bookkeeping and observing the credit don't change it. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PlatformFeePayoutFailedEvent.data.previous_attributes.updated_at variant 2

anyOf variant 2.

- Value shape: null. When the payout's owned state last changed. Retry bookkeeping and observing the credit don't change it. 

### PlatformFeePayoutFailedEvent.data.previous_attributes.version

Declared alternatives: [CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.version](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributesversion).

### PlatformFeePayoutFailedEvent.request

Field definitions: [ApiKeyCreatedEvent.request](../models/ApiKeyCreatedEvent.md#apikeycreatedeventrequest).

