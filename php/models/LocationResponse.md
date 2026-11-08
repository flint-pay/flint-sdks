[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## LocationResponse

A response containing `Location` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [Location](../models/Location.md#location) | Resource, collection, or operation result returned by this request. A physical or logical place a merchant operates from. Every Location can hold stock. inventory_allocation_enabled controls whether it accepts inventory allocation. `data`: [field definitions](../models/LocationResponse.md#locationresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### LocationResponse.data

Resource, collection, or operation result returned by this request. A physical or logical place a merchant operates from. Every Location can hold stock. inventory_allocation_enabled controls whether it accepts inventory allocation.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Required | [Address](../models/Address.md#address) or null | Published postal address. `null` when the Location has no address on record. `address`: [declared alternatives](../models/LocationResponse.md#locationresponsedataaddress). |
| `coordinate` | Optional | [LocationCoordinate](../models/LocationCoordinate.md#locationcoordinate) | Latitude and longitude of the Location. Omitted when none was sent. A latitude and longitude for a merchant location. |
| `coordinate_source` | Optional | string | Where `coordinate` came from. Omitted when the Location has no coordinate. Values: `"merchant_supplied"`, `"geocoded"`. |
| `created_at` | Required | string | Time the Location was created. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. Example: `"warehouse-1842"`. |
| `geography_version` | Required | integer | Read-only version that advances only on geography changes and is pinned by tax and delivery dependencies. It is not a request fence. Format: `uint64`. minimum: `0`. |
| `inventory_allocation_enabled` | Required | boolean | Whether this Location accepts inventory allocation. Always present, including false when allocation is not configured. |
| `location_id` | Required | string | Stable Location ID. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `metadata` | Required | Map of string | Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicemetadata). |
| `name` | Required | string | Merchant-facing Location name. minLength: `1`. maxLength: `255`. |
| `status` | Required | string | Current Location lifecycle status. Values: `"active"`, `"inactive"`, `"archived"`. |
| `timezone` | Required | string | IANA timezone for local schedules. |
| `updated_at` | Required | string | Time the Location last changed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Optimistic-concurrency version that advances on every Location change. Format: `uint64`. minimum: `1`. |

### LocationResponse.data.address

Published postal address. `null` when the Location has no address on record.

Field definitions: [shared fields](SubscriptionResponse.md#subscriptionresponsedatadeliverydestinationaddress).

### LocationResponse.data.address variant 1

anyOf Address: A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country..

- Required: `country`.
- Optional: `city`, `line1`, `line2`, `postal_code`, `state`.

### LocationResponse.data.address variant 2

anyOf variant 2.

- Undeclared: `city`, `country`, `line1`, `line2`, `postal_code`, `state`.
- Value shape: null. Published postal address. `null` when the Location has no address on record. 

### LocationResponse.data.metadata

Field definitions: [CollectInvoiceResponse.data.invoice.metadata](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicemetadata).

### LocationResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

