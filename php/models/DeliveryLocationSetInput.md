[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryLocationSetInput

The locations available to a delivery method.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Required | [DeliveryLocationSetConfigurationInput](../models/DeliveryLocationSetConfigurationInput.md#deliverylocationsetconfigurationinput) | Current member Locations and selection rules. The location IDs in a delivery location set. |
| `created_at` | Required | string | Time the location set was created. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `current_delivery_location_set_revision_id` | Required | string | Immutable revision used for new quotes. Example: `"dlsr_01KEZF7C00HN2NT80H5VNQSVFJ"`. |
| `delivery_location_set_id` | Required | string | Stable delivery location set ID. Example: `"dls_01KEZF7C00C4WWN7RYTRF55C4H"`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. Example: `"warehouse-1842"`. |
| `metadata` | Optional | [MetadataMapInput](../models/MetadataMapInput.md#metadatamapinput) | Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. |
| `name` | Required | string | Merchant-facing location set name. |
| `status` | Required | string | Current location set lifecycle status. Values: `"active"`, `"archived"`. |
| `updated_at` | Required | string | Time the location set last changed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Optimistic-concurrency version for location set writes. Format: `uint64`. minimum: `1`. |

