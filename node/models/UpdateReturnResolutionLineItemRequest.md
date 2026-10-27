[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateReturnResolutionLineItemRequest

A return line and quantity to keep or add when updating a return resolution.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `quantity` | Required | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `return_line_item_id` | Required | string | minLength: `1`. |
| `return_resolution_line_item_id` | Optional | string | minLength: `1`. |

