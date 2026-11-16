[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PriceListArchivedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `archived_at` | Optional | string or null or null | When this price list was soft-deleted, as an RFC3339 timestamp. Null when it has not been archived. `archived_at`: [declared alternatives](../models/PriceListArchivedMerchantEventDataPreviousAttributes.md#pricelistarchivedmerchanteventdatapreviousattributesarchived_at). |
| `created_at` | Optional | string or null | When this price list was created, as an RFC3339 timestamp. `created_at`: [declared alternatives](../models/PriceListArchivedMerchantEventDataPreviousAttributes.md#pricelistarchivedmerchanteventdatapreviousattributescreated_at). |
| `currency` | Optional | string or null | Immutable currency of every price in this list. Currently USD. Uses ISO 4217 currency codes. `currency`: [declared alternatives](../models/PriceListArchivedMerchantEventDataPreviousAttributes.md#pricelistarchivedmerchanteventdatapreviousattributescurrency). |
| `customer_segments` | Optional | Array of string or null | Customer.segment labels assigned to this list. Empty when no segments are assigned. `customer_segments`: [declared alternatives](../models/PriceListArchivedMerchantEventDataPreviousAttributes.md#pricelistarchivedmerchanteventdatapreviousattributescustomer_segments). |
| `external_reference_id` | Optional | string or null or null | Caller-owned identifier for this resource in an external system. `null` when unset. `external_reference_id`: [declared alternatives](../models/CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributesexternal_reference_id). |
| `merchant_id` | Optional | string or null | Identifier of the merchant that owns this price list. `merchant_id`: [declared alternatives](../models/PriceListArchivedMerchantEventDataPreviousAttributes.md#pricelistarchivedmerchanteventdatapreviousattributesmerchant_id). |
| `metadata` | Optional | Map of string or null | Caller-owned metadata stored on this price list. `metadata`: [declared alternatives](../models/PriceListArchivedMerchantEventDataPreviousAttributes.md#pricelistarchivedmerchanteventdatapreviousattributesmetadata). |
| `name` | Optional | string or null | Name used to identify this price list. `name`: [declared alternatives](../models/PriceListArchivedMerchantEventDataPreviousAttributes.md#pricelistarchivedmerchanteventdatapreviousattributesname). |
| `price_count` | Optional | integer or null | Number of variant prices in the list. `price_count`: [declared alternatives](../models/PriceListArchivedMerchantEventDataPreviousAttributes.md#pricelistarchivedmerchanteventdatapreviousattributesprice_count). |
| `price_list_id` | Optional | string or null | Stable identifier of this price list. `price_list_id`: [declared alternatives](../models/PriceListArchivedMerchantEventDataPreviousAttributes.md#pricelistarchivedmerchanteventdatapreviousattributesprice_list_id). |
| `status` | Optional | string or null | Availability or retirement state. Derived as archived when archived_at is set; otherwise active or inactive. Values: `"active"`, `"inactive"`, `"archived"`. `status`: [declared alternatives](../models/PriceListArchivedMerchantEventDataPreviousAttributes.md#pricelistarchivedmerchanteventdatapreviousattributesstatus). |
| `updated_at` | Optional | string or null | When this price list or its prices last changed, as an RFC3339 timestamp. `updated_at`: [declared alternatives](../models/PriceListArchivedMerchantEventDataPreviousAttributes.md#pricelistarchivedmerchanteventdatapreviousattributesupdated_at). |
| `version` | Optional | integer or null | Aggregate version, increased once for a request that changes the list or its prices. No-op writes preserve it. `version`: [declared alternatives](../models/PriceListArchivedMerchantEventDataPreviousAttributes.md#pricelistarchivedmerchanteventdatapreviousattributesversion). |

### PriceListArchivedMerchantEventDataPreviousAttributes.archived_at

### PriceListArchivedMerchantEventDataPreviousAttributes.archived_at variant 1

anyOf variant 1: When this price list was soft-deleted, as an RFC3339 timestamp. Null when it has not been archived..

- Value shape: (string or null). When this price list was soft-deleted, as an RFC3339 timestamp. Null when it has not been archived. When this price list was soft-deleted, as an RFC3339 timestamp. Null when it has not been archived. Format: `date-time`. 

### PriceListArchivedMerchantEventDataPreviousAttributes.archived_at variant 2

anyOf variant 2.

- Value shape: null. When this price list was soft-deleted, as an RFC3339 timestamp. Null when it has not been archived. 

### PriceListArchivedMerchantEventDataPreviousAttributes.created_at

### PriceListArchivedMerchantEventDataPreviousAttributes.created_at variant 1

anyOf variant 1: When this price list was created, as an RFC3339 timestamp..

- Value shape: string. When this price list was created, as an RFC3339 timestamp. When this price list was created, as an RFC3339 timestamp. Format: `date-time`. 

### PriceListArchivedMerchantEventDataPreviousAttributes.created_at variant 2

anyOf variant 2.

- Value shape: null. When this price list was created, as an RFC3339 timestamp. 

### PriceListArchivedMerchantEventDataPreviousAttributes.currency

### PriceListArchivedMerchantEventDataPreviousAttributes.currency variant 1

anyOf variant 1: Immutable currency of every price in this list. Currently USD. Uses ISO 4217 currency codes..

- Value shape: string. Immutable currency of every price in this list. Currently USD. Uses ISO 4217 currency codes. Immutable currency of every price in this list. Currently USD. Uses ISO 4217 currency codes. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. 

### PriceListArchivedMerchantEventDataPreviousAttributes.currency variant 2

anyOf variant 2.

- Value shape: null. Immutable currency of every price in this list. Currently USD. Uses ISO 4217 currency codes. 

### PriceListArchivedMerchantEventDataPreviousAttributes.customer_segments

### PriceListArchivedMerchantEventDataPreviousAttributes.customer_segments variant 1

anyOf variant 1: Customer.segment labels assigned to this list. Empty when no segments are assigned..

- Value shape: Array of string. Customer.segment labels assigned to this list. Empty when no segments are assigned. Customer.segment labels assigned to this list. Empty when no segments are assigned. maxItems: `20`. uniqueItems: `true`. 

### PriceListArchivedMerchantEventDataPreviousAttributes.customer_segments variant 2

anyOf variant 2.

- Value shape: null. Customer.segment labels assigned to this list. Empty when no segments are assigned. 

### PriceListArchivedMerchantEventDataPreviousAttributes.external_reference_id

Declared alternatives: [CreditNoteIssuedMerchantEventDataPreviousAttributes.external_reference_id](../models/CreditNoteIssuedMerchantEventDataPreviousAttributes.md#creditnoteissuedmerchanteventdatapreviousattributesexternal_reference_id).

### PriceListArchivedMerchantEventDataPreviousAttributes.merchant_id

### PriceListArchivedMerchantEventDataPreviousAttributes.merchant_id variant 1

anyOf variant 1: Identifier of the merchant that owns this price list..

- Value shape: string. Identifier of the merchant that owns this price list. 

### PriceListArchivedMerchantEventDataPreviousAttributes.merchant_id variant 2

anyOf variant 2.

- Value shape: null. Identifier of the merchant that owns this price list. 

### PriceListArchivedMerchantEventDataPreviousAttributes.metadata

### PriceListArchivedMerchantEventDataPreviousAttributes.metadata variant 1

anyOf MetadataMap: Caller-owned metadata stored on this price list..

- Value shape: Map of string. Caller-owned metadata stored on this price list. Map values: maxLength: `4096`. 

### PriceListArchivedMerchantEventDataPreviousAttributes.metadata variant 2

anyOf variant 2.

- Value shape: null. Caller-owned metadata stored on this price list. 

### PriceListArchivedMerchantEventDataPreviousAttributes.name

### PriceListArchivedMerchantEventDataPreviousAttributes.name variant 1

anyOf variant 1: Name used to identify this price list..

- Value shape: string. Name used to identify this price list. 

### PriceListArchivedMerchantEventDataPreviousAttributes.name variant 2

anyOf variant 2.

- Value shape: null. Name used to identify this price list. 

### PriceListArchivedMerchantEventDataPreviousAttributes.price_count

### PriceListArchivedMerchantEventDataPreviousAttributes.price_count variant 1

anyOf variant 1: Number of variant prices in the list..

- Value shape: integer. Number of variant prices in the list. Number of variant prices in the list. Format: `int64`. minimum: `0`. maximum: `10000`. 

### PriceListArchivedMerchantEventDataPreviousAttributes.price_count variant 2

anyOf variant 2.

- Value shape: null. Number of variant prices in the list. 

### PriceListArchivedMerchantEventDataPreviousAttributes.price_list_id

### PriceListArchivedMerchantEventDataPreviousAttributes.price_list_id variant 1

anyOf variant 1: Stable identifier of this price list..

- Value shape: string. Stable identifier of this price list. Stable identifier of this price list. pattern: `^prl_[0-9A-HJKMNP-TV-Z]{26}$`. 

### PriceListArchivedMerchantEventDataPreviousAttributes.price_list_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of this price list. 

### PriceListArchivedMerchantEventDataPreviousAttributes.status

### PriceListArchivedMerchantEventDataPreviousAttributes.status variant 1

anyOf variant 1: Availability or retirement state. Derived as archived when archived_at is set; otherwise active or inactive..

- Value shape: string. Availability or retirement state. Derived as archived when archived_at is set; otherwise active or inactive. Values: `"active"`, `"inactive"`, `"archived"`.

### PriceListArchivedMerchantEventDataPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Availability or retirement state. Derived as archived when archived_at is set; otherwise active or inactive. 

### PriceListArchivedMerchantEventDataPreviousAttributes.updated_at

### PriceListArchivedMerchantEventDataPreviousAttributes.updated_at variant 1

anyOf variant 1: When this price list or its prices last changed, as an RFC3339 timestamp..

- Value shape: string. When this price list or its prices last changed, as an RFC3339 timestamp. When this price list or its prices last changed, as an RFC3339 timestamp. Format: `date-time`. 

### PriceListArchivedMerchantEventDataPreviousAttributes.updated_at variant 2

anyOf variant 2.

- Value shape: null. When this price list or its prices last changed, as an RFC3339 timestamp. 

### PriceListArchivedMerchantEventDataPreviousAttributes.version

### PriceListArchivedMerchantEventDataPreviousAttributes.version variant 1

anyOf variant 1: Aggregate version, increased once for a request that changes the list or its prices. No-op writes preserve it..

- Value shape: integer. Aggregate version, increased once for a request that changes the list or its prices. No-op writes preserve it. Aggregate version, increased once for a request that changes the list or its prices. No-op writes preserve it. Format: `uint64`. minimum: `1`. 

### PriceListArchivedMerchantEventDataPreviousAttributes.version variant 2

anyOf variant 2.

- Value shape: null. Aggregate version, increased once for a request that changes the list or its prices. No-op writes preserve it. 

