[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryBuyerLocationResourceCoordinatePreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [AddressPreviousAttributes](../models/AddressPreviousAttributes.md#addresspreviousattributes) or null | The buyer location as an address. Set only when `type` is `address`. |
| `coordinate` | Optional | [DeliveryCoordinateRequestPreviousAttributes](../models/DeliveryCoordinateRequestPreviousAttributes.md#deliverycoordinaterequestpreviousattributes) or null | The buyer location as a coordinate. Set only when `type` is `coordinate`. |
| `type` | Optional | (string or null) and Alternative shapes (see declared variants) | Whether the buyer location is an address or a coordinate. Values: `"coordinate"`. `type`: [declared alternatives](../models/DeliveryBuyerLocationResourceCoordinatePreviousAttributes.md#deliverybuyerlocationresourcecoordinatepreviousattributestype). |

### DeliveryBuyerLocationResourceCoordinatePreviousAttributes.type

### DeliveryBuyerLocationResourceCoordinatePreviousAttributes.type variant 1

anyOf group 1 variant 1: Whether the buyer location is an address or a coordinate..

- Value shape: string. Whether the buyer location is an address or a coordinate. Values: `"coordinate"`.

### DeliveryBuyerLocationResourceCoordinatePreviousAttributes.type variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. Whether the buyer location is an address or a coordinate. 

### DeliveryBuyerLocationResourceCoordinatePreviousAttributes.type variant 3

anyOf group 2 variant 1: Whether the buyer location is an address or a coordinate..

- Value shape: any. Whether the buyer location is an address or a coordinate. Values: `"coordinate"`.

