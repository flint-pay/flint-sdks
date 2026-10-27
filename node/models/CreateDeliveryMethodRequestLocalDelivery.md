[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateDeliveryMethodRequestLocalDelivery

The `local_delivery` variant of `CreateDeliveryMethodRequest`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Required | [DeliveryMethodConfigurationCreateRequest](../models/DeliveryMethodConfigurationCreateRequest.md#deliverymethodconfigurationcreaterequest) and [DeliveryMethodConfigurationRequest](../models/DeliveryMethodConfigurationRequest.md#deliverymethodconfigurationrequest) | The configuration you supply for a delivery method: origin, pricing, eligibility, timing estimate, tax settings, and recipient requirements. The configuration you supply when creating a delivery method. `origin` and `pricing` are required. `configuration`: [field definitions](../models/CreateDeliveryMethodRequest.md#createdeliverymethodrequest-variant-2configuration). |
| `description` | Optional | string | minLength: `1`. |
| `display_position` | Optional | integer | Format: `int32`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `name` | Required | string | minLength: `1`. |
| `recommendation_priority` | Optional | integer | Marks this method as recommended. Within each choice group, the available method with the lowest value is recommended and listed first. Ties go to the lower display_position, then the method ID. Null never recommends the method. Format: `int32`. |
| `status` | Optional | string | Values: `"inactive"`, `"active"`. |
| `type` | Required | string | Values: `"local_delivery"`. |

### CreateDeliveryMethodRequestLocalDelivery.configuration

Field definitions: [CreateDeliveryMethodRequest variant 2.configuration](../models/CreateDeliveryMethodRequest.md#createdeliverymethodrequest-variant-2configuration).

