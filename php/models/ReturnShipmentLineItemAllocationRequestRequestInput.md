[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnShipmentLineItemAllocationRequestRequestInput

A return line and the quantity placed in a return shipment or package.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `quantity` | Required | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `return_line_item_id` | Required | string | Return line whose quantity is allocated to the shipment or package. minLength: `1`. |

