[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnReceiptLineItemRequest

One line of received merchandise: a matched return line, excess quantity, or an unverified item.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `quantity` | Required | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `return_line_item_id` | Conditional | string | The expected Return line. Required for matched and explicitly excess merchandise. minLength: `1`. |
| `unverified_item` | Conditional | [ReturnUnverifiedItem](../models/ReturnUnverifiedItem.md#returnunverifieditem) | A buyer or catalog identity observation that has not been matched to a Return line. Merchandise received in a return that does not match an expected return line, described by name, SKU, and description. |
| `verification_status` | Conditional | string | Set to excess only when the merchandise is known to exceed the committed handback quantity for return_line_item_id. Omit for matched or unverified merchandise. Values: `"excess"`. |

### ReturnReceiptLineItemRequest variant 1: `verification_status` = `"excess"`

oneOf variant 1.

- Condition: not (at least one(present(`unverified_item`); present(`verification_status`))).
- Required: `return_line_item_id`.
- Optional: `unverified_item`, `verification_status`.

### ReturnReceiptLineItemRequest variant 2: `verification_status` = `"excess"`

oneOf variant 2.

- Condition: not (at least one(present(`return_line_item_id`); present(`verification_status`))).
- Required: `unverified_item`.
- Optional: `return_line_item_id`, `verification_status`.

### ReturnReceiptLineItemRequest variant 3: `verification_status` = `"excess"`

oneOf variant 3.

- Condition: not (present(`unverified_item`)).
- Required: `return_line_item_id`, `verification_status`.
- Optional: `unverified_item`.

