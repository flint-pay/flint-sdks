[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnResolutionLineItemRequest







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `return_line_item_id` | Required | string |  |

### ReturnResolutionLineItemRequest variant 1

anyOf variant 1: Declared schema ReturnHandoffRequirementLineItem. A return line and the quantity the buyer must hand back..

No additional constraints.

### ReturnResolutionLineItemRequest variant 2

anyOf variant 2: Declared schema ReturnResolutionLineItemRequest. A return line and quantity to include in a return resolution..

- Constraints for `return_line_item_id`: minLength: `1`.

### ReturnResolutionLineItemRequest variant 3

anyOf variant 3: Declared schema ReturnShipmentLineItemAllocation. A return line and the quantity placed in a return shipment or package..

- Constraints for `return_line_item_id`: Return line whose quantity is allocated to the shipment or package. minLength: `1`.

### ReturnResolutionLineItemRequest variant 4

anyOf variant 4: Declared schema ReturnShipmentLineItemAllocationRequest. A return line and the quantity placed in a return shipment or package..

- Constraints for `return_line_item_id`: Return line whose quantity is allocated to the shipment or package. minLength: `1`.

