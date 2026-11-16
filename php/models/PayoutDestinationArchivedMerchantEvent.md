[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PayoutDestinationArchivedMerchantEvent

The `payout_destination.archived` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [PayoutDestinationArchivedMerchantEventData](../models/PayoutDestinationArchivedMerchantEventData.md#payoutdestinationarchivedmerchanteventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/PayoutDestinationArchivedMerchantEvent.md#payoutdestinationarchivedmerchanteventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"payout_destination.archived"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [PayoutDestinationArchivedMerchantEventRequest](../models/PayoutDestinationArchivedMerchantEventRequest.md#payoutdestinationarchivedmerchanteventrequest) or null | The originating request. `null` when the event has no originating request ID. |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### PayoutDestinationArchivedMerchantEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/PayoutDestinationArchivedMerchantEvent.md#payoutdestinationarchivedmerchanteventdata-fields-1object). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/PayoutDestinationArchivedMerchantEvent.md#payoutdestinationarchivedmerchanteventdata-fields-1previous_attributes). |

### PayoutDestinationArchivedMerchantEvent.data fields 1.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available_payout_methods` | Required | Array of string | Payout methods available through Flint for this destination. Only standard is currently available. Items values: `"standard"`. |
| `bank_name` | Optional | string | Name of the bank, when your processor reports it. |
| `country` | Optional | string | ISO 3166-1 alpha-2 country code. minLength: `2`. maxLength: `2`. pattern: `^[A-Z]{2}$`. |
| `created_at` | Required | string | When the destination was added. Format: `date-time`. |
| `currency` | Required | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. |
| `disabled_at` | Optional | string | When the destination was last disabled or archived. Absent if it never was. Format: `date-time`. |
| `disabled_reason` | Optional | string | Flint-normalized reason the payout destination cannot currently be used. Unknown provider/backend values are returned as destination_unavailable. Values: [7 declared values](#payoutdestinationarchivedmerchanteventdata-fields-1object-disabled_reason-values). |
| `is_default_for_currency` | Required | boolean | Whether this is the default destination for its currency. Scheduled payouts, and payouts created without payout_destination_id, go to the default, and only an active destination can be it. |
| `last4` | Optional | string | Last four digits of the account or card number. |
| `merchant_id` | Required | string | Merchant that owns the destination. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedataline_itemsmodifiersmetadata). |
| `payout_destination_id` | Required | string | Stable identifier of the payout destination. |
| `status` | Required | string | Current status. Archived: deleted, and still readable by ID. Values: `"pending"`, `"active"`, `"verification_required"`, `"disabled"`, `"archived"`, `"failed"`. |
| `status_updated_at` | Optional | string | When Flint last recorded the destination's status. Format: `date-time`. |
| `type` | Required | string | Destination type. Unmapped destination types are returned as other. Values: `"bank_account"`, `"debit_card"`, `"other"`. |
| `updated_at` | Required | string | When the destination last changed. Format: `date-time`. |
| `version` | Required | integer | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: `uint64`. minimum: `1`. |

#### PayoutDestinationArchivedMerchantEvent.data fields 1.object disabled_reason values

- `"destination_disabled"`
- `"destination_removed"`
- `"destination_unavailable"`
- `"destination_rejected"`
- `"destination_under_review"`
- `"requirements_past_due"`
- `"requirements_pending_verification"`

### PayoutDestinationArchivedMerchantEvent.data fields 1.object.metadata

Field definitions: [FulfillmentResponse.data.line_items[].modifiers[].metadata](../models/FulfillmentResponse.md#fulfillmentresponsedataline_itemsmodifiersmetadata).

### PayoutDestinationArchivedMerchantEvent.data fields 1.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available_payout_methods` | Optional | Array of string or null | Payout methods available through Flint for this destination. Only standard is currently available. Items values: `"standard"`. `available_payout_methods`: [declared alternatives](../models/PayoutDestinationArchivedMerchantEventDataPreviousAttributes.md#payoutdestinationarchivedmerchanteventdatapreviousattributesavailable_payout_methods). |
| `bank_name` | Optional | string or null | Name of the bank, when your processor reports it. `bank_name`: [declared alternatives](../models/PayoutDestinationArchivedMerchantEventDataPreviousAttributes.md#payoutdestinationarchivedmerchanteventdatapreviousattributesbank_name). |
| `country` | Optional | string or null | ISO 3166-1 alpha-2 country code. `country`: [declared alternatives](../models/PayoutDestinationArchivedMerchantEventDataPreviousAttributes.md#payoutdestinationarchivedmerchanteventdatapreviousattributescountry). |
| `created_at` | Optional | string or null | When the destination was added. `created_at`: [declared alternatives](../models/PayoutDestinationArchivedMerchantEventDataPreviousAttributes.md#payoutdestinationarchivedmerchanteventdatapreviousattributescreated_at). |
| `currency` | Optional | string or null | ISO 4217 currency code. `currency`: [declared alternatives](../models/MerchantBillingBalanceUpdatedEvent.md#merchantbillingbalanceupdatedeventdata-fields-1previous_attributescurrency). |
| `disabled_at` | Optional | string or null | When the destination was last disabled or archived. Absent if it never was. `disabled_at`: [declared alternatives](../models/PayoutDestinationArchivedMerchantEventDataPreviousAttributes.md#payoutdestinationarchivedmerchanteventdatapreviousattributesdisabled_at). |
| `disabled_reason` | Optional | string or null | Flint-normalized reason the payout destination cannot currently be used. Unknown provider/backend values are returned as destination_unavailable. Values: [7 declared values](#payoutdestinationarchivedmerchanteventdata-fields-1previous_attributes-disabled_reason-values). `disabled_reason`: [declared alternatives](../models/PayoutDestinationArchivedMerchantEventDataPreviousAttributes.md#payoutdestinationarchivedmerchanteventdatapreviousattributesdisabled_reason). |
| `is_default_for_currency` | Optional | boolean or null | Whether this is the default destination for its currency. Scheduled payouts, and payouts created without payout_destination_id, go to the default, and only an active destination can be it. `is_default_for_currency`: [declared alternatives](../models/PayoutDestinationArchivedMerchantEventDataPreviousAttributes.md#payoutdestinationarchivedmerchanteventdatapreviousattributesis_default_for_currency). |
| `last4` | Optional | string or null | Last four digits of the account or card number. `last4`: [declared alternatives](../models/PayoutDestinationArchivedMerchantEventDataPreviousAttributes.md#payoutdestinationarchivedmerchanteventdatapreviousattributeslast4). |
| `merchant_id` | Optional | string or null | Merchant that owns the destination. `merchant_id`: [declared alternatives](../models/PayoutDestinationArchivedMerchantEventDataPreviousAttributes.md#payoutdestinationarchivedmerchanteventdatapreviousattributesmerchant_id). |
| `metadata` | Optional | Map of string or null | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. `metadata`: [declared alternatives](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributesmetadata). |
| `payout_destination_id` | Optional | string or null | Stable identifier of the payout destination. `payout_destination_id`: [declared alternatives](../models/PayoutDestinationArchivedMerchantEventDataPreviousAttributes.md#payoutdestinationarchivedmerchanteventdatapreviousattributespayout_destination_id). |
| `status` | Optional | string or null | Current status. Archived: deleted, and still readable by ID. Values: `"pending"`, `"active"`, `"verification_required"`, `"disabled"`, `"archived"`, `"failed"`. `status`: [declared alternatives](../models/PayoutDestinationArchivedMerchantEventDataPreviousAttributes.md#payoutdestinationarchivedmerchanteventdatapreviousattributesstatus). |
| `status_updated_at` | Optional | string or null | When Flint last recorded the destination's status. `status_updated_at`: [declared alternatives](../models/PayoutDestinationArchivedMerchantEventDataPreviousAttributes.md#payoutdestinationarchivedmerchanteventdatapreviousattributesstatus_updated_at). |
| `type` | Optional | string or null | Destination type. Unmapped destination types are returned as other. Values: `"bank_account"`, `"debit_card"`, `"other"`. `type`: [declared alternatives](../models/PayoutDestinationArchivedMerchantEventDataPreviousAttributes.md#payoutdestinationarchivedmerchanteventdatapreviousattributestype). |
| `updated_at` | Optional | string or null | When the destination last changed. `updated_at`: [declared alternatives](../models/PayoutDestinationArchivedMerchantEventDataPreviousAttributes.md#payoutdestinationarchivedmerchanteventdatapreviousattributesupdated_at). |
| `version` | Optional | integer or null | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. `version`: [declared alternatives](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesversion). |

#### PayoutDestinationArchivedMerchantEvent.data fields 1.previous_attributes disabled_reason values

- `"destination_disabled"`
- `"destination_removed"`
- `"destination_unavailable"`
- `"destination_rejected"`
- `"destination_under_review"`
- `"requirements_past_due"`
- `"requirements_pending_verification"`

### PayoutDestinationArchivedMerchantEvent.data fields 1.previous_attributes.available_payout_methods

Declared alternatives: [PayoutDestinationArchivedMerchantEventDataPreviousAttributes.available_payout_methods](../models/PayoutDestinationArchivedMerchantEventDataPreviousAttributes.md#payoutdestinationarchivedmerchanteventdatapreviousattributesavailable_payout_methods).

### PayoutDestinationArchivedMerchantEvent.data fields 1.previous_attributes.bank_name

Declared alternatives: [PayoutDestinationArchivedMerchantEventDataPreviousAttributes.bank_name](../models/PayoutDestinationArchivedMerchantEventDataPreviousAttributes.md#payoutdestinationarchivedmerchanteventdatapreviousattributesbank_name).

### PayoutDestinationArchivedMerchantEvent.data fields 1.previous_attributes.country

Declared alternatives: [PayoutDestinationArchivedMerchantEventDataPreviousAttributes.country](../models/PayoutDestinationArchivedMerchantEventDataPreviousAttributes.md#payoutdestinationarchivedmerchanteventdatapreviousattributescountry).

### PayoutDestinationArchivedMerchantEvent.data fields 1.previous_attributes.created_at

Declared alternatives: [PayoutDestinationArchivedMerchantEventDataPreviousAttributes.created_at](../models/PayoutDestinationArchivedMerchantEventDataPreviousAttributes.md#payoutdestinationarchivedmerchanteventdatapreviousattributescreated_at).

### PayoutDestinationArchivedMerchantEvent.data fields 1.previous_attributes.currency

Declared alternatives: [MerchantBillingBalanceUpdatedEvent.data fields 1.previous_attributes.currency](../models/MerchantBillingBalanceUpdatedEvent.md#merchantbillingbalanceupdatedeventdata-fields-1previous_attributescurrency).

### PayoutDestinationArchivedMerchantEvent.data fields 1.previous_attributes.disabled_at

Declared alternatives: [PayoutDestinationArchivedMerchantEventDataPreviousAttributes.disabled_at](../models/PayoutDestinationArchivedMerchantEventDataPreviousAttributes.md#payoutdestinationarchivedmerchanteventdatapreviousattributesdisabled_at).

### PayoutDestinationArchivedMerchantEvent.data fields 1.previous_attributes.disabled_reason

Declared alternatives: [PayoutDestinationArchivedMerchantEventDataPreviousAttributes.disabled_reason](../models/PayoutDestinationArchivedMerchantEventDataPreviousAttributes.md#payoutdestinationarchivedmerchanteventdatapreviousattributesdisabled_reason).

### PayoutDestinationArchivedMerchantEvent.data fields 1.previous_attributes.is_default_for_currency

Declared alternatives: [PayoutDestinationArchivedMerchantEventDataPreviousAttributes.is_default_for_currency](../models/PayoutDestinationArchivedMerchantEventDataPreviousAttributes.md#payoutdestinationarchivedmerchanteventdatapreviousattributesis_default_for_currency).

### PayoutDestinationArchivedMerchantEvent.data fields 1.previous_attributes.last4

Declared alternatives: [PayoutDestinationArchivedMerchantEventDataPreviousAttributes.last4](../models/PayoutDestinationArchivedMerchantEventDataPreviousAttributes.md#payoutdestinationarchivedmerchanteventdatapreviousattributeslast4).

### PayoutDestinationArchivedMerchantEvent.data fields 1.previous_attributes.merchant_id

Declared alternatives: [PayoutDestinationArchivedMerchantEventDataPreviousAttributes.merchant_id](../models/PayoutDestinationArchivedMerchantEventDataPreviousAttributes.md#payoutdestinationarchivedmerchanteventdatapreviousattributesmerchant_id).

### PayoutDestinationArchivedMerchantEvent.data fields 1.previous_attributes.metadata

Declared alternatives: [ModifierGroupArchivedMerchantEventDataPreviousAttributes.metadata](../models/ModifierGroupArchivedMerchantEventDataPreviousAttributes.md#modifiergrouparchivedmerchanteventdatapreviousattributesmetadata).

### PayoutDestinationArchivedMerchantEvent.data fields 1.previous_attributes.payout_destination_id

Declared alternatives: [PayoutDestinationArchivedMerchantEventDataPreviousAttributes.payout_destination_id](../models/PayoutDestinationArchivedMerchantEventDataPreviousAttributes.md#payoutdestinationarchivedmerchanteventdatapreviousattributespayout_destination_id).

### PayoutDestinationArchivedMerchantEvent.data fields 1.previous_attributes.status

Declared alternatives: [PayoutDestinationArchivedMerchantEventDataPreviousAttributes.status](../models/PayoutDestinationArchivedMerchantEventDataPreviousAttributes.md#payoutdestinationarchivedmerchanteventdatapreviousattributesstatus).

### PayoutDestinationArchivedMerchantEvent.data fields 1.previous_attributes.status_updated_at

Declared alternatives: [PayoutDestinationArchivedMerchantEventDataPreviousAttributes.status_updated_at](../models/PayoutDestinationArchivedMerchantEventDataPreviousAttributes.md#payoutdestinationarchivedmerchanteventdatapreviousattributesstatus_updated_at).

### PayoutDestinationArchivedMerchantEvent.data fields 1.previous_attributes.type

Declared alternatives: [PayoutDestinationArchivedMerchantEventDataPreviousAttributes.type](../models/PayoutDestinationArchivedMerchantEventDataPreviousAttributes.md#payoutdestinationarchivedmerchanteventdatapreviousattributestype).

### PayoutDestinationArchivedMerchantEvent.data fields 1.previous_attributes.updated_at

Declared alternatives: [PayoutDestinationArchivedMerchantEventDataPreviousAttributes.updated_at](../models/PayoutDestinationArchivedMerchantEventDataPreviousAttributes.md#payoutdestinationarchivedmerchanteventdatapreviousattributesupdated_at).

### PayoutDestinationArchivedMerchantEvent.data fields 1.previous_attributes.version

Declared alternatives: [PaymentSplitCanceledEvent.data fields 1.previous_attributes.version](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesversion).

