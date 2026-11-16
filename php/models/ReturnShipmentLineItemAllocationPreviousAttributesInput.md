[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnShipmentLineItemAllocationPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `quantity`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity). |
| `return_id` | Optional | string or null | Return that owns return_line_item_id. `return_id`: [declared alternatives](../models/ReturnHandoffRequirementLineItemPreviousAttributesInput.md#returnhandoffrequirementlineitempreviousattributesinputreturn_id). |
| `return_line_item_id` | Optional | string or null | Return line whose quantity is allocated to the shipment or package. `return_line_item_id`: [declared alternatives](../models/ReturnShipmentLineItemAllocationPreviousAttributesInput.md#returnshipmentlineitemallocationpreviousattributesinputreturn_line_item_id). |

### ReturnShipmentLineItemAllocationPreviousAttributesInput.quantity

Declared alternatives: [DeliveryQuoteLineItemResourcePreviousAttributesInput.quantity](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity).

### ReturnShipmentLineItemAllocationPreviousAttributesInput.return_id

Declared alternatives: [ReturnHandoffRequirementLineItemPreviousAttributesInput.return_id](../models/ReturnHandoffRequirementLineItemPreviousAttributesInput.md#returnhandoffrequirementlineitempreviousattributesinputreturn_id).

### ReturnShipmentLineItemAllocationPreviousAttributesInput.return_line_item_id

### ReturnShipmentLineItemAllocationPreviousAttributesInput.return_line_item_id variant 1

anyOf variant 1: Return line whose quantity is allocated to the shipment or package..

- Value shape: string. Return line whose quantity is allocated to the shipment or package. Return line whose quantity is allocated to the shipment or package. minLength: `1`. Example: `"retli_01KEZF7C00R813VR7ECXS062QG"`. 

### ReturnShipmentLineItemAllocationPreviousAttributesInput.return_line_item_id variant 2

anyOf variant 2.

- Value shape: null. Return line whose quantity is allocated to the shipment or package. 

