[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryLocationSummaryResource

A pickup location shown on a delivery option: its name, address, instructions, and timezone.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [DeliveryAddressRequest](../models/DeliveryAddressRequest.md#deliveryaddressrequest) | An address as returned on delivery quotes, selections, previews, and pickup locations. `address`: [field definitions](../models/DeliveryBuyerLocationInputAddress.md#deliverybuyerlocationinputaddress-variant-2address). |
| `instructions` | Optional | string |  |
| `location_id` | Required | string |  |
| `name` | Required | string |  |
| `timezone` | Optional | string |  |

### DeliveryLocationSummaryResource.address

Field definitions: [DeliveryBuyerLocationInputAddress variant 2.address](../models/DeliveryBuyerLocationInputAddress.md#deliverybuyerlocationinputaddress-variant-2address).

