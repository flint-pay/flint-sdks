[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateDeliveryLocationSetRequestInput

The request body for: Update delivery location set.

minProperties: `1`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Conditional | [DeliveryLocationSetConfigurationInput](../models/DeliveryLocationSetConfigurationInput.md#deliverylocationsetconfigurationinput) | Replaced as a whole: send every field you want to keep. location_ids replaces the set's Locations; leave configuration out to keep them. Null, an empty object, an empty list, and duplicate IDs are invalid. Publishes a new immutable revision, even when the values are unchanged, and requires expected_version. The location IDs in a delivery location set. |
| `expected_version` | Optional | integer | Current resource version. Required when the request carries a revision field: configuration. A revision field publishes a new immutable revision even when its value is unchanged. Optional for other fields, which advance version and keep the current revision. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Conditional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. |
| `metadata` | Conditional | [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `name` | Conditional | string | Merchant-facing name. minLength: `1`. |

### UpdateDeliveryLocationSetRequestInput variant 1

anyOf variant 1.

- Required: `name`.
- Optional: `configuration`, `external_reference_id`, `metadata`.

### UpdateDeliveryLocationSetRequestInput variant 2

anyOf variant 2.

- Required: `external_reference_id`.
- Optional: `configuration`, `metadata`, `name`.

### UpdateDeliveryLocationSetRequestInput variant 3

anyOf variant 3.

- Required: `configuration`.
- Optional: `external_reference_id`, `metadata`, `name`.

### UpdateDeliveryLocationSetRequestInput variant 4

anyOf variant 4.

- Required: `metadata`.
- Optional: `configuration`, `external_reference_id`, `name`.

