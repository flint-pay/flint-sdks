[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateDeliveryLocationSetRequest

The request body for: Create delivery location set.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Required | [DeliveryLocationSetConfiguration](../models/DeliveryLocationSetConfiguration.md#deliverylocationsetconfiguration) | The location IDs in a delivery location set. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `name` | Required | string | minLength: `1`. |

