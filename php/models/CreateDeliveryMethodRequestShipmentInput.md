[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateDeliveryMethodRequestShipmentInput

The `shipment` variant of `CreateDeliveryMethodRequest`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Required | [DeliveryMethodConfigurationCreateRequestInput](../models/DeliveryMethodConfigurationCreateRequestInput.md#deliverymethodconfigurationcreaterequestinput) and [DeliveryMethodConfigurationRequestInput](../models/DeliveryMethodConfigurationRequestInput.md#deliverymethodconfigurationrequestinput) | The configuration you supply for a delivery method: origin, pricing, eligibility, timing estimate, tax settings, and recipient requirements. The configuration you supply when creating a delivery method. `origin` and `pricing` are required. `configuration`: [field definitions](../models/CreateDeliveryMethodRequestInput.md#createdeliverymethodrequestinput-variant-1configuration). |
| `description` | Optional | string | minLength: `1`. |
| `display_position` | Optional | integer | Format: `int32`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `name` | Required | string | minLength: `1`. |
| `recommendation_priority` | Optional | integer | Marks this method as recommended. Within each choice group, the available method with the lowest value is recommended and listed first. Ties go to the lower display_position, then the method ID. Null never recommends the method. Format: `int32`. |
| `status` | Optional | string | Values: `"inactive"`, `"active"`. |
| `type` | Required | string | Values: `"shipment"`. |

### CreateDeliveryMethodRequestShipmentInput.configuration

Field definitions: [CreateDeliveryMethodRequestInput variant 1.configuration](../models/CreateDeliveryMethodRequestInput.md#createdeliverymethodrequestinput-variant-1configuration).

