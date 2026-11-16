[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryBuyerLocationResourcePreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [AddressPreviousAttributesInput](../models/AddressPreviousAttributesInput.md#addresspreviousattributesinput) or null | The buyer location as an address. Set only when `type` is `address`. |
| `coordinate` | Optional | [DeliveryCoordinateRequestPreviousAttributesInput](../models/DeliveryCoordinateRequestPreviousAttributesInput.md#deliverycoordinaterequestpreviousattributesinput) or null | The buyer location as a coordinate. Set only when `type` is `coordinate`. |
| `type` | Optional | (string or null) and Alternative shapes (see declared variants) | Whether the buyer location is an address or a coordinate. Values: `"address"`, `"coordinate"`. `type`: [declared alternatives](../models/DeliveryBuyerLocationResourcePreviousAttributesInput.md#deliverybuyerlocationresourcepreviousattributesinput-variant-1type), [declared alternatives](../models/DeliveryBuyerLocationResourcePreviousAttributesInput.md#deliverybuyerlocationresourcepreviousattributesinput-variant-2type). |

### DeliveryBuyerLocationResourcePreviousAttributesInput variant 1: `type` = `"address"`

anyOf DeliveryBuyerLocationResourceAddressPreviousAttributes.

- Constraints for `type`: Values: `"address"`.

### DeliveryBuyerLocationResourcePreviousAttributesInput variant 2: `type` = `"coordinate"`

anyOf DeliveryBuyerLocationResourceCoordinatePreviousAttributes.

- Constraints for `type`: Values: `"coordinate"`.

### DeliveryBuyerLocationResourcePreviousAttributesInput variant 1.type

### DeliveryBuyerLocationResourcePreviousAttributesInput variant 1.type variant 1

anyOf group 1 variant 1: Whether the buyer location is an address or a coordinate..

- Value shape: string. Whether the buyer location is an address or a coordinate. Values: `"address"`, `"coordinate"`.

### DeliveryBuyerLocationResourcePreviousAttributesInput variant 1.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. Whether the buyer location is an address or a coordinate. 

### DeliveryBuyerLocationResourcePreviousAttributesInput variant 1.type variant 3

anyOf group 2 variant 1: Whether the buyer location is an address or a coordinate..

- Value shape: string. Whether the buyer location is an address or a coordinate. Values: `"address"`.

### DeliveryBuyerLocationResourcePreviousAttributesInput variant 1.type variant 5

anyOf group 3 variant 1: Whether the buyer location is an address or a coordinate..

- Value shape: any. Whether the buyer location is an address or a coordinate. Values: `"address"`.

### DeliveryBuyerLocationResourcePreviousAttributesInput variant 2.type

### DeliveryBuyerLocationResourcePreviousAttributesInput variant 2.type variant 1

anyOf group 1 variant 1: Whether the buyer location is an address or a coordinate..

- Value shape: string. Whether the buyer location is an address or a coordinate. Values: `"address"`, `"coordinate"`.

### DeliveryBuyerLocationResourcePreviousAttributesInput variant 2.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. Whether the buyer location is an address or a coordinate. 

### DeliveryBuyerLocationResourcePreviousAttributesInput variant 2.type variant 3

anyOf group 2 variant 1: Whether the buyer location is an address or a coordinate..

- Value shape: string. Whether the buyer location is an address or a coordinate. Values: `"coordinate"`.

### DeliveryBuyerLocationResourcePreviousAttributesInput variant 2.type variant 5

anyOf group 3 variant 1: Whether the buyer location is an address or a coordinate..

- Value shape: any. Whether the buyer location is an address or a coordinate. Values: `"coordinate"`.

