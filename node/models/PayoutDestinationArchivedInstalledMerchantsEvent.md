[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PayoutDestinationArchivedInstalledMerchantsEvent

The `payout_destination.archived` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/PayoutDestinationArchivedInstalledMerchantsEvent.md#payoutdestinationarchivedinstalledmerchantseventdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"payout_destination.archived"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### PayoutDestinationArchivedInstalledMerchantsEvent.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/PayoutDestinationArchivedInstalledMerchantsEvent.md#payoutdestinationarchivedinstalledmerchantseventdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/PayoutDestinationArchivedInstalledMerchantsEvent.md#payoutdestinationarchivedinstalledmerchantseventdataprevious_attributes). |

### PayoutDestinationArchivedInstalledMerchantsEvent.data.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available_payout_methods` | Required | Array of string | Payout methods available through Flint for this destination. Only standard is currently available. Items values: `"standard"`. |
| `bank_name` | Optional | string | Name of the bank, when your processor reports it. |
| `country` | Optional | string | ISO 3166-1 alpha-2 country code. minLength: `2`. maxLength: `2`. pattern: `^[A-Z]{2}$`. Example: `"US"`. |
| `created_at` | Required | string | When the destination was added. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `currency` | Required | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. |
| `disabled_at` | Optional | string | When the destination was last disabled or archived. Absent if it never was. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `disabled_reason` | Optional | string | Flint-normalized reason the payout destination cannot currently be used. Unknown provider/backend values are returned as destination_unavailable. Values: [7 declared values](#payoutdestinationarchivedinstalledmerchantseventdataobject-disabled_reason-values). |
| `is_default_for_currency` | Required | boolean | Whether this is the default destination for its currency. Scheduled payouts, and payouts created without payout_destination_id, go to the default, and only an active destination can be it. |
| `last4` | Optional | string | Last four digits of the account or card number. |
| `merchant_id` | Required | string | Merchant that owns the destination. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/CreateOrderLineItem.md#createorderlineitemmetadata). |
| `payout_destination_id` | Required | string | Stable identifier of the payout destination. Example: `"pdest_01KEZF7C00M55HZDZXZP6YVE6B"`. |
| `status` | Required | string | Current status. Archived: deleted, and still readable by ID. Values: `"pending"`, `"active"`, `"verification_required"`, `"disabled"`, `"archived"`, `"failed"`. |
| `status_updated_at` | Optional | string | When Flint last recorded the destination's status. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `type` | Required | string | Destination type. Unmapped destination types are returned as other. Values: `"bank_account"`, `"debit_card"`, `"other"`. |
| `updated_at` | Required | string | When the destination last changed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: `uint64`. minimum: `1`. |

#### PayoutDestinationArchivedInstalledMerchantsEvent.data.object disabled_reason values

- `"destination_disabled"`
- `"destination_removed"`
- `"destination_unavailable"`
- `"destination_rejected"`
- `"destination_under_review"`
- `"requirements_past_due"`
- `"requirements_pending_verification"`

### PayoutDestinationArchivedInstalledMerchantsEvent.data.object.metadata

Field definitions: [CreateOrderLineItem.metadata](../models/CreateOrderLineItem.md#createorderlineitemmetadata).

### PayoutDestinationArchivedInstalledMerchantsEvent.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available_payout_methods` | Optional | Array of string or null | Payout methods available through Flint for this destination. Only standard is currently available. Items values: `"standard"`. `available_payout_methods`: [declared alternatives](../models/ExpandedPayoutDestinationSummaryPreviousAttributes.md#expandedpayoutdestinationsummarypreviousattributesavailable_payout_methods). |
| `bank_name` | Optional | string or null | Name of the bank, when your processor reports it. `bank_name`: [declared alternatives](../models/ExpandedPayoutDestinationSummaryPreviousAttributes.md#expandedpayoutdestinationsummarypreviousattributesbank_name). |
| `country` | Optional | string or null | ISO 3166-1 alpha-2 country code. `country`: [declared alternatives](../models/AddressPreviousAttributes.md#addresspreviousattributescountry). |
| `created_at` | Optional | string or null | When the destination was added. `created_at`: [declared alternatives](../models/PayoutDestinationArchivedInstalledMerchantsEvent.md#payoutdestinationarchivedinstalledmerchantseventdataprevious_attributescreated_at). |
| `currency` | Optional | string or null | ISO 4217 currency code. `currency`: [declared alternatives](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributescurrency). |
| `disabled_at` | Optional | string or null | When the destination was last disabled or archived. Absent if it never was. `disabled_at`: [declared alternatives](../models/PayoutDestinationArchivedInstalledMerchantsEvent.md#payoutdestinationarchivedinstalledmerchantseventdataprevious_attributesdisabled_at). |
| `disabled_reason` | Optional | string or null | Flint-normalized reason the payout destination cannot currently be used. Unknown provider/backend values are returned as destination_unavailable. Values: [7 declared values](#payoutdestinationarchivedinstalledmerchantseventdataprevious_attributes-disabled_reason-values). `disabled_reason`: [declared alternatives](../models/PayoutDestinationArchivedInstalledMerchantsEvent.md#payoutdestinationarchivedinstalledmerchantseventdataprevious_attributesdisabled_reason). |
| `is_default_for_currency` | Optional | boolean or null | Whether this is the default destination for its currency. Scheduled payouts, and payouts created without payout_destination_id, go to the default, and only an active destination can be it. `is_default_for_currency`: [declared alternatives](../models/ExpandedPayoutDestinationSummaryPreviousAttributes.md#expandedpayoutdestinationsummarypreviousattributesis_default_for_currency). |
| `last4` | Optional | string or null | Last four digits of the account or card number. `last4`: [declared alternatives](../models/ExpandedPayoutDestinationSummaryPreviousAttributes.md#expandedpayoutdestinationsummarypreviousattributeslast4). |
| `merchant_id` | Optional | string or null | Merchant that owns the destination. `merchant_id`: [declared alternatives](../models/PayoutDestinationArchivedInstalledMerchantsEvent.md#payoutdestinationarchivedinstalledmerchantseventdataprevious_attributesmerchant_id). |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) or null | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. `metadata`: [declared alternatives](../models/ModifierGroupArchivedInstalledMerchantsEvent.md#modifiergrouparchivedinstalledmerchantseventdataprevious_attributesmetadata). |
| `payout_destination_id` | Optional | string or null | Stable identifier of the payout destination. `payout_destination_id`: [declared alternatives](../models/PayoutDestinationArchivedInstalledMerchantsEvent.md#payoutdestinationarchivedinstalledmerchantseventdataprevious_attributespayout_destination_id). |
| `status` | Optional | string or null | Current status. Archived: deleted, and still readable by ID. Values: `"pending"`, `"active"`, `"verification_required"`, `"disabled"`, `"archived"`, `"failed"`. `status`: [declared alternatives](../models/ExpandedPayoutDestinationSummaryPreviousAttributes.md#expandedpayoutdestinationsummarypreviousattributesstatus). |
| `status_updated_at` | Optional | string or null | When Flint last recorded the destination's status. `status_updated_at`: [declared alternatives](../models/PayoutDestinationArchivedInstalledMerchantsEvent.md#payoutdestinationarchivedinstalledmerchantseventdataprevious_attributesstatus_updated_at). |
| `type` | Optional | string or null | Destination type. Unmapped destination types are returned as other. Values: `"bank_account"`, `"debit_card"`, `"other"`. `type`: [declared alternatives](../models/ExpandedPayoutDestinationSummaryPreviousAttributes.md#expandedpayoutdestinationsummarypreviousattributestype). |
| `updated_at` | Optional | string or null | When the destination last changed. `updated_at`: [declared alternatives](../models/PayoutDestinationArchivedInstalledMerchantsEvent.md#payoutdestinationarchivedinstalledmerchantseventdataprevious_attributesupdated_at). |
| `version` | Optional | integer or null | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. `version`: [declared alternatives](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributes.md#buyerexpandedpaymentintentsummarypreviousattributesversion). |

#### PayoutDestinationArchivedInstalledMerchantsEvent.data.previous_attributes disabled_reason values

- `"destination_disabled"`
- `"destination_removed"`
- `"destination_unavailable"`
- `"destination_rejected"`
- `"destination_under_review"`
- `"requirements_past_due"`
- `"requirements_pending_verification"`

### PayoutDestinationArchivedInstalledMerchantsEvent.data.previous_attributes.available_payout_methods

Declared alternatives: [ExpandedPayoutDestinationSummaryPreviousAttributes.available_payout_methods](../models/ExpandedPayoutDestinationSummaryPreviousAttributes.md#expandedpayoutdestinationsummarypreviousattributesavailable_payout_methods).

### PayoutDestinationArchivedInstalledMerchantsEvent.data.previous_attributes.bank_name

Declared alternatives: [ExpandedPayoutDestinationSummaryPreviousAttributes.bank_name](../models/ExpandedPayoutDestinationSummaryPreviousAttributes.md#expandedpayoutdestinationsummarypreviousattributesbank_name).

### PayoutDestinationArchivedInstalledMerchantsEvent.data.previous_attributes.country

Declared alternatives: [AddressPreviousAttributes.country](../models/AddressPreviousAttributes.md#addresspreviousattributescountry).

### PayoutDestinationArchivedInstalledMerchantsEvent.data.previous_attributes.created_at

### PayoutDestinationArchivedInstalledMerchantsEvent.data.previous_attributes.created_at variant 1

anyOf variant 1: When the destination was added..

- Value shape: string. When the destination was added. When the destination was added. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PayoutDestinationArchivedInstalledMerchantsEvent.data.previous_attributes.created_at variant 2

anyOf variant 2.

- Value shape: null. When the destination was added. 

### PayoutDestinationArchivedInstalledMerchantsEvent.data.previous_attributes.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributescurrency).

### PayoutDestinationArchivedInstalledMerchantsEvent.data.previous_attributes.disabled_at

### PayoutDestinationArchivedInstalledMerchantsEvent.data.previous_attributes.disabled_at variant 1

anyOf variant 1: When the destination was last disabled or archived. Absent if it never was..

- Value shape: string. When the destination was last disabled or archived. Absent if it never was. When the destination was last disabled or archived. Absent if it never was. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PayoutDestinationArchivedInstalledMerchantsEvent.data.previous_attributes.disabled_at variant 2

anyOf variant 2.

- Value shape: null. When the destination was last disabled or archived. Absent if it never was. 

### PayoutDestinationArchivedInstalledMerchantsEvent.data.previous_attributes.disabled_reason

### PayoutDestinationArchivedInstalledMerchantsEvent.data.previous_attributes.disabled_reason variant 1

anyOf variant 1: Flint-normalized reason the payout destination cannot currently be used. Unknown provider/backend values are returned as destination_unavailable..

- Value shape: string. Flint-normalized reason the payout destination cannot currently be used. Unknown provider/backend values are returned as destination_unavailable. Values: `"destination_disabled"`, `"destination_removed"`, `"destination_unavailable"`, `"destination_rejected"`, `"destination_under_review"`, `"requirements_past_due"`, `"requirements_pending_verification"`.

### PayoutDestinationArchivedInstalledMerchantsEvent.data.previous_attributes.disabled_reason variant 2

anyOf variant 2.

- Value shape: null. Flint-normalized reason the payout destination cannot currently be used. Unknown provider/backend values are returned as destination_unavailable. 

### PayoutDestinationArchivedInstalledMerchantsEvent.data.previous_attributes.is_default_for_currency

Declared alternatives: [ExpandedPayoutDestinationSummaryPreviousAttributes.is_default_for_currency](../models/ExpandedPayoutDestinationSummaryPreviousAttributes.md#expandedpayoutdestinationsummarypreviousattributesis_default_for_currency).

### PayoutDestinationArchivedInstalledMerchantsEvent.data.previous_attributes.last4

Declared alternatives: [ExpandedPayoutDestinationSummaryPreviousAttributes.last4](../models/ExpandedPayoutDestinationSummaryPreviousAttributes.md#expandedpayoutdestinationsummarypreviousattributeslast4).

### PayoutDestinationArchivedInstalledMerchantsEvent.data.previous_attributes.merchant_id

### PayoutDestinationArchivedInstalledMerchantsEvent.data.previous_attributes.merchant_id variant 1

anyOf variant 1: Merchant that owns the destination..

- Value shape: string. Merchant that owns the destination. Merchant that owns the destination. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. 

### PayoutDestinationArchivedInstalledMerchantsEvent.data.previous_attributes.merchant_id variant 2

anyOf variant 2.

- Value shape: null. Merchant that owns the destination. 

### PayoutDestinationArchivedInstalledMerchantsEvent.data.previous_attributes.metadata

Declared alternatives: [ModifierGroupArchivedInstalledMerchantsEvent.data.previous_attributes.metadata](../models/ModifierGroupArchivedInstalledMerchantsEvent.md#modifiergrouparchivedinstalledmerchantseventdataprevious_attributesmetadata).

### PayoutDestinationArchivedInstalledMerchantsEvent.data.previous_attributes.payout_destination_id

### PayoutDestinationArchivedInstalledMerchantsEvent.data.previous_attributes.payout_destination_id variant 1

anyOf variant 1: Stable identifier of the payout destination..

- Value shape: string. Stable identifier of the payout destination. Stable identifier of the payout destination. Example: `"pdest_01KEZF7C00M55HZDZXZP6YVE6B"`. 

### PayoutDestinationArchivedInstalledMerchantsEvent.data.previous_attributes.payout_destination_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of the payout destination. 

### PayoutDestinationArchivedInstalledMerchantsEvent.data.previous_attributes.status

Declared alternatives: [ExpandedPayoutDestinationSummaryPreviousAttributes.status](../models/ExpandedPayoutDestinationSummaryPreviousAttributes.md#expandedpayoutdestinationsummarypreviousattributesstatus).

### PayoutDestinationArchivedInstalledMerchantsEvent.data.previous_attributes.status_updated_at

### PayoutDestinationArchivedInstalledMerchantsEvent.data.previous_attributes.status_updated_at variant 1

anyOf variant 1: When Flint last recorded the destination's status..

- Value shape: string. When Flint last recorded the destination's status. When Flint last recorded the destination's status. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PayoutDestinationArchivedInstalledMerchantsEvent.data.previous_attributes.status_updated_at variant 2

anyOf variant 2.

- Value shape: null. When Flint last recorded the destination's status. 

### PayoutDestinationArchivedInstalledMerchantsEvent.data.previous_attributes.type

Declared alternatives: [ExpandedPayoutDestinationSummaryPreviousAttributes.type](../models/ExpandedPayoutDestinationSummaryPreviousAttributes.md#expandedpayoutdestinationsummarypreviousattributestype).

### PayoutDestinationArchivedInstalledMerchantsEvent.data.previous_attributes.updated_at

### PayoutDestinationArchivedInstalledMerchantsEvent.data.previous_attributes.updated_at variant 1

anyOf variant 1: When the destination last changed..

- Value shape: string. When the destination last changed. When the destination last changed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PayoutDestinationArchivedInstalledMerchantsEvent.data.previous_attributes.updated_at variant 2

anyOf variant 2.

- Value shape: null. When the destination last changed. 

### PayoutDestinationArchivedInstalledMerchantsEvent.data.previous_attributes.version

Declared alternatives: [BuyerExpandedPaymentIntentSummaryPreviousAttributes.version](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributes.md#buyerexpandedpaymentintentsummarypreviousattributesversion).

### PayoutDestinationArchivedInstalledMerchantsEvent.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEvent.source](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource).

