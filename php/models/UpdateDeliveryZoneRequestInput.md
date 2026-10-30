[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateDeliveryZoneRequestInput

The request body for: Update delivery zone.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Conditional | [DeliveryZoneConfigurationInput](../models/DeliveryZoneConfigurationInput.md#deliveryzoneconfigurationinput) | Send the whole geography. It replaces the zone's current geography; leave configuration out to keep it. Null and an empty object are invalid. Requires expected_version. A reusable geographic predicate containing only country, state, postal_code, and radius conditions. |
| `expected_version` | Optional | integer | Current resource version. Required for configuration, owned-rate replacement, and quote-pinned method presentation; optional for other scalar and status updates. Required when any of these fields is present: configuration. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Conditional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `metadata` | Conditional | [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `name` | Conditional | string | minLength: `1`. |

### UpdateDeliveryZoneRequestInput variant 1

anyOf variant 1.

- Required: `name`.
- Optional: `configuration`, `external_reference_id`, `metadata`.

### UpdateDeliveryZoneRequestInput variant 2

anyOf variant 2.

- Required: `external_reference_id`.
- Optional: `configuration`, `metadata`, `name`.

### UpdateDeliveryZoneRequestInput variant 3

anyOf variant 3.

- Required: `configuration`.
- Optional: `external_reference_id`, `metadata`, `name`.

### UpdateDeliveryZoneRequestInput variant 4

anyOf variant 4.

- Required: `metadata`.
- Optional: `configuration`, `external_reference_id`, `name`.

