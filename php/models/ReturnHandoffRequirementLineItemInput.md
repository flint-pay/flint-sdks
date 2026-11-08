[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnHandoffRequirementLineItemInput

A return line and the quantity the buyer must hand back.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `return_line_item_id` | Required | string | ID of the Return line the entry is about. Example: `"retli_01KEZF7C00R813VR7ECXS062QG"`. |

