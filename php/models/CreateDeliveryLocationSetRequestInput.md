[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateDeliveryLocationSetRequestInput

The request body for: Create delivery location set.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Required | [DeliveryLocationSetConfigurationInput](../models/DeliveryLocationSetConfigurationInput.md#deliverylocationsetconfigurationinput) | The location IDs in a delivery location set. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `name` | Required | string | minLength: `1`. |

