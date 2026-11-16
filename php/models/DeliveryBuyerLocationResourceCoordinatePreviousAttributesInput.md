[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryBuyerLocationResourceCoordinatePreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [AddressPreviousAttributesInput](../models/AddressPreviousAttributesInput.md#addresspreviousattributesinput) or null | The buyer location as an address. Set only when `type` is `address`. |
| `coordinate` | Optional | [DeliveryCoordinateRequestPreviousAttributesInput](../models/DeliveryCoordinateRequestPreviousAttributesInput.md#deliverycoordinaterequestpreviousattributesinput) or null | The buyer location as a coordinate. Set only when `type` is `coordinate`. |
| `type` | Optional | (string or null) and Alternative shapes (see declared variants) | Whether the buyer location is an address or a coordinate. Values: `"coordinate"`. `type`: [declared alternatives](../models/DeliveryBuyerLocationResourceCoordinatePreviousAttributesInput.md#deliverybuyerlocationresourcecoordinatepreviousattributesinputtype). |

### DeliveryBuyerLocationResourceCoordinatePreviousAttributesInput.type

### DeliveryBuyerLocationResourceCoordinatePreviousAttributesInput.type variant 1

anyOf group 1 variant 1: Whether the buyer location is an address or a coordinate..

- Value shape: string. Whether the buyer location is an address or a coordinate. Values: `"coordinate"`.

### DeliveryBuyerLocationResourceCoordinatePreviousAttributesInput.type variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. Whether the buyer location is an address or a coordinate. 

### DeliveryBuyerLocationResourceCoordinatePreviousAttributesInput.type variant 3

anyOf group 2 variant 1: Whether the buyer location is an address or a coordinate..

- Value shape: any. Whether the buyer location is an address or a coordinate. Values: `"coordinate"`.

