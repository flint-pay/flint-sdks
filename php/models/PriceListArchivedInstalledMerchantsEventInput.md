[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PriceListArchivedInstalledMerchantsEventInput

The `price_list.archived` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/PriceListArchivedInstalledMerchantsEventInput.md#pricelistarchivedinstalledmerchantseventinputdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"price_list.archived"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [PartnerWebhookEnvelopeSourceInput](../models/PartnerWebhookEnvelopeSourceInput.md#partnerwebhookenvelopesourceinput) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### PriceListArchivedInstalledMerchantsEventInput.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/PriceListArchivedInstalledMerchantsEventInput.md#pricelistarchivedinstalledmerchantseventinputdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/PriceListArchivedInstalledMerchantsEventInput.md#pricelistarchivedinstalledmerchantseventinputdataprevious_attributes). |

### PriceListArchivedInstalledMerchantsEventInput.data.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

Field definitions: [shared fields](PriceListInput.md#pricelistinput).

### PriceListArchivedInstalledMerchantsEventInput.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `archived_at` | Optional | string or null | When this price list was soft-deleted, as an RFC3339 timestamp. Null when it has not been archived. `archived_at`: [declared alternatives](../models/PriceListArchivedInstalledMerchantsEventInput.md#pricelistarchivedinstalledmerchantseventinputdataprevious_attributesarchived_at). |
| `created_at` | Optional | string or null | When this price list was created, as an RFC3339 timestamp. `created_at`: [declared alternatives](../models/PriceListArchivedInstalledMerchantsEventInput.md#pricelistarchivedinstalledmerchantseventinputdataprevious_attributescreated_at). |
| `currency` | Optional | string or null | Immutable currency of every price in this list. Currently USD. Uses ISO 4217 currency codes. `currency`: [declared alternatives](../models/PriceListArchivedInstalledMerchantsEventInput.md#pricelistarchivedinstalledmerchantseventinputdataprevious_attributescurrency). |
| `customer_segments` | Optional | Array of string or null | Customer.segment labels assigned to this list. Empty when no segments are assigned. `customer_segments`: [declared alternatives](../models/PriceListArchivedInstalledMerchantsEventInput.md#pricelistarchivedinstalledmerchantseventinputdataprevious_attributescustomer_segments). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `null` when unset. `external_reference_id`: [declared alternatives](../models/CreditNoteIssuedInstalledMerchantsEventInput.md#creditnoteissuedinstalledmerchantseventinputdataprevious_attributesexternal_reference_id). |
| `merchant_id` | Optional | string or null | Identifier of the merchant that owns this price list. `merchant_id`: [declared alternatives](../models/PriceListArchivedInstalledMerchantsEventInput.md#pricelistarchivedinstalledmerchantseventinputdataprevious_attributesmerchant_id). |
| `metadata` | Optional | [MetadataMapPreviousAttributesInput](../models/MetadataMapPreviousAttributesInput.md#metadatamappreviousattributesinput) or null | Caller-owned metadata stored on this price list. |
| `name` | Optional | string or null | Name used to identify this price list. `name`: [declared alternatives](../models/PriceListArchivedInstalledMerchantsEventInput.md#pricelistarchivedinstalledmerchantseventinputdataprevious_attributesname). |
| `price_count` | Optional | integer or null | Number of variant prices in the list. `price_count`: [declared alternatives](../models/PriceListArchivedInstalledMerchantsEventInput.md#pricelistarchivedinstalledmerchantseventinputdataprevious_attributesprice_count). |
| `price_list_id` | Optional | string or null | Stable identifier of this price list. `price_list_id`: [declared alternatives](../models/PriceListArchivedInstalledMerchantsEventInput.md#pricelistarchivedinstalledmerchantseventinputdataprevious_attributesprice_list_id). |
| `status` | Optional | string or null | Availability or retirement state. Derived as archived when archived_at is set; otherwise active or inactive. Values: `"active"`, `"inactive"`, `"archived"`. `status`: [declared alternatives](../models/PriceListArchivedInstalledMerchantsEventInput.md#pricelistarchivedinstalledmerchantseventinputdataprevious_attributesstatus). |
| `updated_at` | Optional | string or null | When this price list or its prices last changed, as an RFC3339 timestamp. `updated_at`: [declared alternatives](../models/PriceListArchivedInstalledMerchantsEventInput.md#pricelistarchivedinstalledmerchantseventinputdataprevious_attributesupdated_at). |
| `version` | Optional | integer or null | Aggregate version, increased once for a request that changes the list or its prices. No-op writes preserve it. `version`: [declared alternatives](../models/PriceListArchivedInstalledMerchantsEventInput.md#pricelistarchivedinstalledmerchantseventinputdataprevious_attributesversion). |

### PriceListArchivedInstalledMerchantsEventInput.data.previous_attributes.archived_at

### PriceListArchivedInstalledMerchantsEventInput.data.previous_attributes.archived_at variant 1

anyOf variant 1: When this price list was soft-deleted, as an RFC3339 timestamp. Null when it has not been archived..

- Value shape: string. When this price list was soft-deleted, as an RFC3339 timestamp. Null when it has not been archived. When this price list was soft-deleted, as an RFC3339 timestamp. Null when it has not been archived. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PriceListArchivedInstalledMerchantsEventInput.data.previous_attributes.archived_at variant 2

anyOf variant 2.

- Value shape: null. When this price list was soft-deleted, as an RFC3339 timestamp. Null when it has not been archived. 

### PriceListArchivedInstalledMerchantsEventInput.data.previous_attributes.created_at

### PriceListArchivedInstalledMerchantsEventInput.data.previous_attributes.created_at variant 1

anyOf variant 1: When this price list was created, as an RFC3339 timestamp..

- Value shape: string. When this price list was created, as an RFC3339 timestamp. When this price list was created, as an RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PriceListArchivedInstalledMerchantsEventInput.data.previous_attributes.created_at variant 2

anyOf variant 2.

- Value shape: null. When this price list was created, as an RFC3339 timestamp. 

### PriceListArchivedInstalledMerchantsEventInput.data.previous_attributes.currency

### PriceListArchivedInstalledMerchantsEventInput.data.previous_attributes.currency variant 1

anyOf variant 1: Immutable currency of every price in this list. Currently USD. Uses ISO 4217 currency codes..

- Value shape: string. Immutable currency of every price in this list. Currently USD. Uses ISO 4217 currency codes. Immutable currency of every price in this list. Currently USD. Uses ISO 4217 currency codes. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. 

### PriceListArchivedInstalledMerchantsEventInput.data.previous_attributes.currency variant 2

anyOf variant 2.

- Value shape: null. Immutable currency of every price in this list. Currently USD. Uses ISO 4217 currency codes. 

### PriceListArchivedInstalledMerchantsEventInput.data.previous_attributes.customer_segments

### PriceListArchivedInstalledMerchantsEventInput.data.previous_attributes.customer_segments variant 1

anyOf variant 1: Customer.segment labels assigned to this list. Empty when no segments are assigned..

- Value shape: Array of string. Customer.segment labels assigned to this list. Empty when no segments are assigned. Customer.segment labels assigned to this list. Empty when no segments are assigned. maxItems: `20`. uniqueItems: `true`. 

### PriceListArchivedInstalledMerchantsEventInput.data.previous_attributes.customer_segments variant 2

anyOf variant 2.

- Value shape: null. Customer.segment labels assigned to this list. Empty when no segments are assigned. 

### PriceListArchivedInstalledMerchantsEventInput.data.previous_attributes.external_reference_id

Declared alternatives: [CreditNoteIssuedInstalledMerchantsEventInput.data.previous_attributes.external_reference_id](../models/CreditNoteIssuedInstalledMerchantsEventInput.md#creditnoteissuedinstalledmerchantseventinputdataprevious_attributesexternal_reference_id).

### PriceListArchivedInstalledMerchantsEventInput.data.previous_attributes.merchant_id

### PriceListArchivedInstalledMerchantsEventInput.data.previous_attributes.merchant_id variant 1

anyOf variant 1: Identifier of the merchant that owns this price list..

- Value shape: string. Identifier of the merchant that owns this price list. Identifier of the merchant that owns this price list. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. 

### PriceListArchivedInstalledMerchantsEventInput.data.previous_attributes.merchant_id variant 2

anyOf variant 2.

- Value shape: null. Identifier of the merchant that owns this price list. 

### PriceListArchivedInstalledMerchantsEventInput.data.previous_attributes.name

### PriceListArchivedInstalledMerchantsEventInput.data.previous_attributes.name variant 1

anyOf variant 1: Name used to identify this price list..

- Value shape: string. Name used to identify this price list. 

### PriceListArchivedInstalledMerchantsEventInput.data.previous_attributes.name variant 2

anyOf variant 2.

- Value shape: null. Name used to identify this price list. 

### PriceListArchivedInstalledMerchantsEventInput.data.previous_attributes.price_count

### PriceListArchivedInstalledMerchantsEventInput.data.previous_attributes.price_count variant 1

anyOf variant 1: Number of variant prices in the list..

- Value shape: integer. Number of variant prices in the list. Number of variant prices in the list. Format: `int64`. minimum: `0`. maximum: `10000`. 

### PriceListArchivedInstalledMerchantsEventInput.data.previous_attributes.price_count variant 2

anyOf variant 2.

- Value shape: null. Number of variant prices in the list. 

### PriceListArchivedInstalledMerchantsEventInput.data.previous_attributes.price_list_id

### PriceListArchivedInstalledMerchantsEventInput.data.previous_attributes.price_list_id variant 1

anyOf variant 1: Stable identifier of this price list..

- Value shape: string. Stable identifier of this price list. Stable identifier of this price list. pattern: `^prl_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"prl_01KEZF7C00EH39P59GN3XMGS2Q"`. 

### PriceListArchivedInstalledMerchantsEventInput.data.previous_attributes.price_list_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of this price list. 

### PriceListArchivedInstalledMerchantsEventInput.data.previous_attributes.status

### PriceListArchivedInstalledMerchantsEventInput.data.previous_attributes.status variant 1

anyOf variant 1: Availability or retirement state. Derived as archived when archived_at is set; otherwise active or inactive..

- Value shape: string. Availability or retirement state. Derived as archived when archived_at is set; otherwise active or inactive. Values: `"active"`, `"inactive"`, `"archived"`.

### PriceListArchivedInstalledMerchantsEventInput.data.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. Availability or retirement state. Derived as archived when archived_at is set; otherwise active or inactive. 

### PriceListArchivedInstalledMerchantsEventInput.data.previous_attributes.updated_at

### PriceListArchivedInstalledMerchantsEventInput.data.previous_attributes.updated_at variant 1

anyOf variant 1: When this price list or its prices last changed, as an RFC3339 timestamp..

- Value shape: string. When this price list or its prices last changed, as an RFC3339 timestamp. When this price list or its prices last changed, as an RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PriceListArchivedInstalledMerchantsEventInput.data.previous_attributes.updated_at variant 2

anyOf variant 2.

- Value shape: null. When this price list or its prices last changed, as an RFC3339 timestamp. 

### PriceListArchivedInstalledMerchantsEventInput.data.previous_attributes.version

### PriceListArchivedInstalledMerchantsEventInput.data.previous_attributes.version variant 1

anyOf variant 1: Aggregate version, increased once for a request that changes the list or its prices. No-op writes preserve it..

- Value shape: integer. Aggregate version, increased once for a request that changes the list or its prices. No-op writes preserve it. Aggregate version, increased once for a request that changes the list or its prices. No-op writes preserve it. Format: `uint64`. minimum: `1`. 

### PriceListArchivedInstalledMerchantsEventInput.data.previous_attributes.version variant 2

anyOf variant 2.

- Value shape: null. Aggregate version, increased once for a request that changes the list or its prices. No-op writes preserve it. 

### PriceListArchivedInstalledMerchantsEventInput.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEventInput.source](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource).

