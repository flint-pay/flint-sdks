[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateLocationRequestInput

Sparse Location update. Omitted fields stay unchanged. address and coordinate are atomic value objects. Sending address requires coordinate. Sending coordinate_source requires coordinate. A non-null coordinate requires a non-null coordinate_source. coordinate: null clears both coordinate and coordinate_source; coordinate_source must then be omitted or null. timezone and coordinate may each be updated without address. geography_version advances only when address, timezone, coordinate, or coordinate_source changes; version advances on every Location change.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [LocationAddressRequestInput](../models/LocationAddressRequestInput.md#locationaddressrequestinput) | Complete replacement postal address, validated as on create. Requires coordinate in the same request, including null to clear it. The street address you supply when creating or updating a merchant location. Send null on an optional field to clear it. |
| `coordinate` | Optional | [LocationCoordinateInput](../models/LocationCoordinateInput.md#locationcoordinateinput) or null | Complete replacement coordinate. Send null to clear both coordinate and coordinate_source. A non-null value requires coordinate_source in the same request. |
| `coordinate_source` | Optional | string or null | Source of the coordinate sent in the same request. A non-null coordinate requires merchant_supplied or geocoded. Send null only with coordinate: null to clear both fields. Values: `"merchant_supplied"`, `"geocoded"`, `null`. |
| `expected_version` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `inventory_allocation_enabled` | Optional | boolean | Whether this Location accepts inventory allocation. Sending this field requires commerce.inventory_locations.write in addition to the route scope. |
| `metadata` | Optional | Map of (string or null) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `name` | Optional | string | minLength: `1`. maxLength: `255`. |
| `status` | Optional | string | Values: `"active"`, `"inactive"`. |
| `timezone` | Optional | string | IANA timezone for local schedules, validated as on create. Can be updated without address. minLength: `1`. |

