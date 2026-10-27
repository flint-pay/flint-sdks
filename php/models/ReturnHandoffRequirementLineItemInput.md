[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnHandoffRequirementLineItemInput

A return line and the quantity the buyer must hand back.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `quantity` | Required | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `return_line_item_id` | Required | string |  |

