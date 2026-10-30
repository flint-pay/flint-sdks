[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## LocationResponse

A response containing `Location` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [Location](../models/Location.md#location) | A physical or logical place a merchant operates from. Every Location can hold stock. inventory_allocation_enabled controls whether it accepts inventory allocation. `data`: [field definitions](../models/LocationResponse.md#locationresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### LocationResponse.data

A physical or logical place a merchant operates from. Every Location can hold stock. inventory_allocation_enabled controls whether it accepts inventory allocation.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Required | [Address](../models/Address.md#address) or null | Published postal address. `address`: [declared alternatives](../models/LocationResponse.md#locationresponsedataaddress). |
| `coordinate` | Optional | [LocationCoordinate](../models/LocationCoordinate.md#locationcoordinate) | Published geographic coordinate. A latitude and longitude for a merchant location. |
| `coordinate_source` | Optional | string or null | Source of the stored latitude and longitude. Values: `"merchant_supplied"`, `"geocoded"`, `null`. |
| `created_at` | Required | string | Time the Location was created. Format: `date-time`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. |
| `geography_version` | Required | integer | Read-only version that advances only on geography changes and is pinned by tax and delivery dependencies. It is not a request fence. Format: `uint64`. minimum: `0`. |
| `inventory_allocation_enabled` | Required | boolean | Whether this Location accepts inventory allocation. Always present, including false when allocation is not configured. |
| `location_id` | Required | string | Stable Location ID. |
| `metadata` | Required | Map of string | Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/LocationResponse.md#locationresponsedatametadata). |
| `name` | Required | string | Merchant-facing Location name. minLength: `1`. maxLength: `255`. |
| `normalized_address` | Optional | [Address](../models/Address.md#address) | Provider-normalized address used for geography evaluation. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. `normalized_address`: [field definitions](../models/LocationResponse.md#locationresponsedatanormalized_address). |
| `status` | Required | string | Current Location lifecycle status. Values: `"active"`, `"inactive"`, `"archived"`. |
| `timezone` | Required | string | IANA timezone for local schedules. |
| `updated_at` | Required | string | Time the Location last changed. Format: `date-time`. |
| `validation_status` | Required | string | Address validation status. Values: `"not_validated"`, `"validated"`, `"merchant_verified"`. |
| `version` | Required | integer | Optimistic-concurrency version that advances on every Location change. Format: `uint64`. minimum: `1`. |

### LocationResponse.data.address

Published postal address.

Field definitions: [shared fields](CreditNoteResponse.md#creditnoteresponsedatabuyer_tax_identity-variant-1registered_address).

### LocationResponse.data.address variant 1

anyOf Address: A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country..

- Required: `country`.
- Optional: `city`, `line1`, `line2`, `postal_code`, `state`.

### LocationResponse.data.address variant 2

anyOf variant 2.

- Undeclared: `city`, `country`, `line1`, `line2`, `postal_code`, `state`.
- Value shape: null. Published postal address. 

### LocationResponse.data.metadata

Value shape: Map of string. Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. 

### LocationResponse.data.normalized_address

Provider-normalized address used for geography evaluation. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country.

Field definitions: [shared fields](AddressInput.md#addressinput).

