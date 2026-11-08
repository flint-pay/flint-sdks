[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## Location

A physical or logical place a merchant operates from. Every Location can hold stock. inventory_allocation_enabled controls whether it accepts inventory allocation.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Required | [Address](../models/Address.md#address) or null | Published postal address. `null` when the Location has no address on record. |
| `coordinate` | Optional | [LocationCoordinate](../models/LocationCoordinate.md#locationcoordinate) | Latitude and longitude of the Location. Omitted when none was sent. A latitude and longitude for a merchant location. `coordinate`: [field definitions](../models/Location.md#locationcoordinate-fields-1). |
| `coordinate_source` | Optional | string | Where `coordinate` came from. Omitted when the Location has no coordinate. Values: `"merchant_supplied"`, `"geocoded"`. |
| `created_at` | Required | string | Time the Location was created. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. Example: `"warehouse-1842"`. |
| `geography_version` | Required | integer | Read-only version that advances only on geography changes and is pinned by tax and delivery dependencies. It is not a request fence. Format: `uint64`. minimum: `0`. |
| `inventory_allocation_enabled` | Required | boolean | Whether this Location accepts inventory allocation. Always present, including false when allocation is not configured. |
| `location_id` | Required | string | Stable Location ID. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `metadata` | Required | [MetadataMap](../models/MetadataMap.md#metadatamap) | Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/DeliveryLocationSet.md#deliverylocationsetmetadata). |
| `name` | Required | string | Merchant-facing Location name. minLength: `1`. maxLength: `255`. |
| `status` | Required | string | Current Location lifecycle status. Values: `"active"`, `"inactive"`, `"archived"`. |
| `timezone` | Required | string | IANA timezone for local schedules. |
| `updated_at` | Required | string | Time the Location last changed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Optimistic-concurrency version that advances on every Location change. Format: `uint64`. minimum: `1`. |

### Location.coordinate fields 1

Latitude and longitude of the Location. Omitted when none was sent. A latitude and longitude for a merchant location.

Field definitions: [shared fields](LocationCoordinateRequestInput.md#locationcoordinaterequestinput).

### Location.metadata

Field definitions: [DeliveryLocationSet.metadata](../models/DeliveryLocationSet.md#deliverylocationsetmetadata).

