[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdatePackageRequest

The request body for: Update package.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `carrier` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `dimensions` | Optional | [Dimensions](../models/Dimensions.md#dimensions) or null | Dimensions of the package. `dimensions`: [declared alternatives](../models/UpdatePackageRequest.md#updatepackagerequestdimensions). |
| `expected_delivery_at` | Optional | string or null | When the carrier or merchant expects this package to arrive. Past dates are allowed. Send null to clear it; omit to leave it unchanged on updates and transitions. Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. |
| `expected_version` | Optional | integer | Optional resource version last read by the caller. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Requires external_system. External references are not unique. Use Idempotency-Key for retries. Send null to clear it. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. |
| `external_system` | Optional | string or null | Name of the external system that external_reference_id belongs to. External references are not unique. Use Idempotency-Key for retries. Send null to clear it. minLength: `1`. |
| `label_url` | Optional | string or null | HTTPS shipping-label URL supplied by your integration. Non-Flint URLs require external_system for provenance. Flint does not host the label file. Send null to clear it. minLength: `1`. |
| `metadata` | Optional | [MetadataPatchRequest](../models/MetadataPatchRequest.md#metadatapatchrequest) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `service_code` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `status_reason` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `tracking_number` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `tracking_url` | Optional | string or null | Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. Send null to clear it. minLength: `1`. |
| `weight` | Optional | [Weight](../models/Weight.md#weight) or null | Weight of the package. `weight`: [declared alternatives](../models/UpdatePackageRequest.md#updatepackagerequestweight). |

### UpdatePackageRequest.dimensions

Dimensions of the package.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `height` | Conditional | number | Distance along this dimension, in the specified unit. maximum: `100000`. exclusiveMinimum: `0`. multipleOf: `0.001`. |
| `length` | Conditional | number | Distance along this dimension, in the specified unit. maximum: `100000`. exclusiveMinimum: `0`. multipleOf: `0.001`. |
| `unit` | Conditional | string | Length unit for length, width, and height. Use millimeter, centimeter, or inch. Values: `"millimeter"`, `"centimeter"`, `"inch"`. |
| `width` | Conditional | number | Distance along this dimension, in the specified unit. maximum: `100000`. exclusiveMinimum: `0`. multipleOf: `0.001`. |

### UpdatePackageRequest.dimensions variant 1

anyOf DimensionsRequest: Package or item dimensions as `length`, `width`, and `height` in the given `unit`..

- Required: `height`, `length`, `unit`, `width`.

### UpdatePackageRequest.dimensions variant 2

anyOf variant 2.

- Undeclared: `height`, `length`, `unit`, `width`.
- Value shape: null. Dimensions of the package. 

### UpdatePackageRequest.weight

Weight of the package.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `unit` | Conditional | string | Weight unit. Use gram, kilogram, ounce, or pound. Values: `"gram"`, `"kilogram"`, `"ounce"`, `"pound"`. |
| `value` | Conditional | number | Weight measured in the specified unit. maximum: `1000000`. exclusiveMinimum: `0`. multipleOf: `0.001`. |

### UpdatePackageRequest.weight variant 1

anyOf WeightRequest: A weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration..

- Required: `unit`, `value`.

### UpdatePackageRequest.weight variant 2

anyOf variant 2.

- Undeclared: `unit`, `value`.
- Value shape: null. Weight of the package. 

