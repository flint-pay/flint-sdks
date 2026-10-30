[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## LocationInput

A physical or logical place a merchant operates from. Every Location can hold stock. inventory_allocation_enabled controls whether it accepts inventory allocation.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Required | [AddressInput](../models/AddressInput.md#addressinput) or null | Published postal address. |
| `coordinate` | Optional | [LocationCoordinateInput](../models/LocationCoordinateInput.md#locationcoordinateinput) | Published geographic coordinate. A latitude and longitude for a merchant location. |
| `coordinate_source` | Optional | string or null | Source of the stored latitude and longitude. Values: `"merchant_supplied"`, `"geocoded"`, `null`. |
| `created_at` | Required | string | Time the Location was created. Format: `date-time`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. |
| `geography_version` | Required | integer | Read-only version that advances only on geography changes and is pinned by tax and delivery dependencies. It is not a request fence. Format: `uint64`. minimum: `0`. |
| `inventory_allocation_enabled` | Required | boolean | Whether this Location accepts inventory allocation. Always present, including false when allocation is not configured. |
| `location_id` | Required | string | Stable Location ID. |
| `metadata` | Required | [MetadataMapInput](../models/MetadataMapInput.md#metadatamapinput) | Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. |
| `name` | Required | string | Merchant-facing Location name. minLength: `1`. maxLength: `255`. |
| `normalized_address` | Optional | [AddressInput](../models/AddressInput.md#addressinput) | Provider-normalized address used for geography evaluation. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. |
| `status` | Required | string | Current Location lifecycle status. Values: `"active"`, `"inactive"`, `"archived"`. |
| `timezone` | Required | string | IANA timezone for local schedules. |
| `updated_at` | Required | string | Time the Location last changed. Format: `date-time`. |
| `validation_status` | Required | string | Address validation status. Values: `"not_validated"`, `"validated"`, `"merchant_verified"`. |
| `version` | Required | integer | Optimistic-concurrency version that advances on every Location change. Format: `uint64`. minimum: `1`. |

