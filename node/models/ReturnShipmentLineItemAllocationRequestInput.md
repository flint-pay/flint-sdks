[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnShipmentLineItemAllocationRequestInput

Request input. Response: [ReturnResolutionLineItemRequest](../models/ReturnResolutionLineItemRequest.md#returnresolutionlineitemrequest).

A return line and the quantity placed in a return shipment or package.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `return_line_item_id` | Required | string | Return line whose quantity is allocated to the shipment or package. minLength: `1`. |

