[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateDeliveryLocationSetRequest

The request body for: Update delivery location set.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Conditional | [DeliveryLocationSetConfiguration](../models/DeliveryLocationSetConfiguration.md#deliverylocationsetconfiguration) | location_ids replaces the set's Locations when present; leave configuration out to keep them. Null, an empty list, and duplicate IDs are invalid. Requires expected_version. The location IDs in a delivery location set. |
| `expected_version` | Optional | integer string | Current resource version. Required for configuration, owned-rate replacement, and quote-pinned method presentation; optional for other scalar and status updates. Required when any of these fields is present: configuration. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Conditional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `metadata` | Conditional | [MetadataPatchRequest](../models/MetadataPatchRequest.md#metadatapatchrequest) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `name` | Conditional | string | minLength: `1`. |

### UpdateDeliveryLocationSetRequest variant 1

anyOf variant 1.

- Required: `name`.
- Optional: `configuration`, `external_reference_id`, `metadata`.

### UpdateDeliveryLocationSetRequest variant 2

anyOf variant 2.

- Required: `external_reference_id`.
- Optional: `configuration`, `metadata`, `name`.

### UpdateDeliveryLocationSetRequest variant 3

anyOf variant 3.

- Required: `configuration`.
- Optional: `external_reference_id`, `metadata`, `name`.

### UpdateDeliveryLocationSetRequest variant 4

anyOf variant 4.

- Required: `metadata`.
- Optional: `configuration`, `external_reference_id`, `name`.

