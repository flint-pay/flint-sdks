[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnResolutionLineItemRequestInput

A return line and quantity to include in a return resolution.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `return_line_item_id` | Required | string | ID of the Return line the resolution covers. minLength: `1`. Example: `"retli_01KEZF7C00R813VR7ECXS062QG"`. |

