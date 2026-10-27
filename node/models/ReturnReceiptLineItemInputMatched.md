[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnReceiptLineItemInputMatched

The `matched` variant of `ReturnReceiptLineItemInput`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `quantity` | Required | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `return_line_item_id` | Required | string | The expected Return line. Required for matched and excess merchandise. minLength: `1`. |
| `type` | Required | string | Whether this observation matches a Return line, is unverified merchandise, or is known excess merchandise. Values: `"matched"`. |
| `unverified_item` | Optional | [ReturnUnverifiedItem](../models/ReturnUnverifiedItem.md#returnunverifieditem) | A buyer or catalog identity observation that has not been matched to a Return line. Merchandise received in a return that does not match an expected return line, described by name, SKU, and description. |

