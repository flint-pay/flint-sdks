[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateDeliveryProfileRequest

The request body for: Create delivery profile.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Required | [DeliveryProfileConfigurationRequest](../models/DeliveryProfileConfigurationRequest.md#deliveryprofileconfigurationrequest) | Delivery planning settings you supply when creating or updating a delivery profile. Which fields are allowed depends on `requirement` and `resolution_mode`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `name` | Required | string | minLength: `1`. |

