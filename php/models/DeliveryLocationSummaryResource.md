[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryLocationSummaryResource

A pickup location shown on a delivery option: its name, address, instructions, and timezone.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [DeliveryAddressResource](../models/DeliveryAddressResource.md#deliveryaddressresource) | An address as returned on delivery quotes, selections, previews, and pickup locations. `address`: [field definitions](../models/DeliveryPreviewsCreateResponse200.md#deliverypreviewscreateresponse200data-variant-1buyer_locationaddress). |
| `instructions` | Optional | string |  |
| `location_id` | Required | string |  |
| `name` | Required | string |  |
| `timezone` | Optional | string |  |

### DeliveryLocationSummaryResource.address

Field definitions: [DeliveryPreviewsCreateResponse200.data variant 1.buyer_location.address](../models/DeliveryPreviewsCreateResponse200.md#deliverypreviewscreateresponse200data-variant-1buyer_locationaddress).

