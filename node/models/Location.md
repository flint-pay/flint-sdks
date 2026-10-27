[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## Location

A physical or logical place a merchant operates from. Every Location can hold stock. inventory_allocation_enabled controls whether it accepts inventory allocation.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Required | [LocationAddress](../models/LocationAddress.md#locationaddress) or null | Published postal address. |
| `coordinate` | Optional | [LocationCoordinate](../models/LocationCoordinate.md#locationcoordinate) | Published geographic coordinate. A latitude and longitude for a merchant location. `coordinate`: [field definitions](../models/Location.md#locationcoordinate-fields-1). |
| `coordinate_source` | Optional | string or null | Source of the stored latitude and longitude. Values: `"merchant_supplied"`, `"geocoded"`, `null`. |
| `created_at` | Required | string | Time the Location was created. Format: `date-time`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. |
| `geography_version` | Required | integer string | Read-only version that advances only on geography changes and is pinned by tax and delivery dependencies. It is not a request fence. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `0`. |
| `inventory_allocation_enabled` | Required | boolean | Whether this Location accepts inventory allocation. Always present, including false when allocation is not configured. |
| `location_id` | Required | string | Stable Location ID. |
| `metadata` | Required | Map of string | Caller-owned metadata. maxProperties: `50`. Map values: maxLength: `4096`. |
| `name` | Required | string | Merchant-facing Location name. minLength: `1`. maxLength: `255`. |
| `normalized_address` | Optional | [LocationAddress](../models/LocationAddress.md#locationaddress) | Provider-normalized address used for geography evaluation. The street address of a merchant location. |
| `status` | Required | string | Current Location lifecycle status. Values: `"active"`, `"inactive"`, `"archived"`. |
| `timezone` | Required | string | IANA timezone for local schedules. |
| `updated_at` | Required | string | Time the Location last changed. Format: `date-time`. |
| `validation_status` | Required | string | Address validation status. Values: `"not_validated"`, `"validated"`, `"merchant_verified"`. |
| `version` | Required | integer string | Optimistic-concurrency version that advances on every Location change. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `0`. |

### Location.coordinate fields 1

Published geographic coordinate. A latitude and longitude for a merchant location.

Field definitions: [shared fields](LocationCoordinateInput.md#locationcoordinateinput).

