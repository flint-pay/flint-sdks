[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPickupAvailabilityLocationSummary

The ID, name, and address of a pickup location in a pickup locations preview.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [DeliveryAddressResource](../models/DeliveryAddressResource.md#deliveryaddressresource) | An address as returned on delivery quotes, selections, previews, and pickup locations. `address`: [field definitions](../models/DeliveryPreviewsCreateResponse200.md#deliverypreviewscreateresponse200data-variant-1buyer_locationaddress). |
| `location_id` | Required | string |  |
| `name` | Required | string |  |

### DeliveryPickupAvailabilityLocationSummary.address

Field definitions: [DeliveryPreviewsCreateResponse200.data variant 1.buyer_location.address](../models/DeliveryPreviewsCreateResponse200.md#deliverypreviewscreateresponse200data-variant-1buyer_locationaddress).

