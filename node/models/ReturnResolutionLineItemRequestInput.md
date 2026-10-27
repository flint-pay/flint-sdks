[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnResolutionLineItemRequestInput

Request input. Response: [ReturnResolutionLineItemRequest](../models/ReturnResolutionLineItemRequest.md#returnresolutionlineitemrequest).

A return line and quantity to include in a return resolution.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `quantity` | Required | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `return_line_item_id` | Required | string | minLength: `1`. |

