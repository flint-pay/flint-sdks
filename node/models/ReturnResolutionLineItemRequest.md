[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnResolutionLineItemRequest







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `return_line_item_id` | Required | string | minLength: `1`. Example: `"retli_01KEZF7C00R813VR7ECXS062QG"`. |

### ReturnResolutionLineItemRequest variant 1

anyOf variant 1: Declared schema ReturnResolutionLineItemRequest. A return line and quantity to include in a return resolution..

- Constraints for `return_line_item_id`: ID of the Return line the resolution covers.

### ReturnResolutionLineItemRequest variant 2

anyOf variant 2: Declared schema ReturnShipmentLineItemAllocationRequest. A Return line and the quantity to place in a return shipment or package. The enclosing Return or shipment determines its parent..

- Constraints for `return_line_item_id`: Return line whose quantity is allocated to the shipment or package.

