[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateReturnResolutionLineItemRequest

A return line and quantity to keep or add when updating a return resolution.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `return_line_item_id` | Required | string | ID of the Return line the resolution covers. minLength: `1`. Example: `"retli_01KEZF7C00R813VR7ECXS062QG"`. |
| `return_resolution_line_item_id` | Optional | string | ID of an existing resolution line to keep. Leave out to add a new line. minLength: `1`. Example: `"retresli_01KEZF7C00CR5NCDXRBP9W14CB"`. |

