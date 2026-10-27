[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPickupAvailabilityLocationSummary

The ID, name, and address of a pickup location in a pickup locations preview.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [DeliveryAddressRequest](../models/DeliveryAddressRequest.md#deliveryaddressrequest) | An address as returned on delivery quotes, selections, previews, and pickup locations. `address`: [field definitions](../models/DeliveryBuyerLocationInputAddress.md#deliverybuyerlocationinputaddress-variant-2address). |
| `location_id` | Required | string |  |
| `name` | Required | string |  |

### DeliveryPickupAvailabilityLocationSummary.address

Field definitions: [DeliveryBuyerLocationInputAddress variant 2.address](../models/DeliveryBuyerLocationInputAddress.md#deliverybuyerlocationinputaddress-variant-2address).

