[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnShipmentLineItemAllocationRequestInput

Request input. Response: [ReturnResolutionLineItemRequest](../models/ReturnResolutionLineItemRequest.md#returnresolutionlineitemrequest).

A Return line and the quantity to place in a return shipment or package. The enclosing Return or shipment determines its parent.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `return_line_item_id` | Required | string | Return line whose quantity is allocated to the shipment or package. minLength: `1`. Example: `"retli_01KEZF7C00R813VR7ECXS062QG"`. |

