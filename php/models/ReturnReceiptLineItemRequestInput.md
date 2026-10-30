[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnReceiptLineItemRequestInput

One line of received merchandise: a matched return line, excess quantity, or an unverified item.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `return_line_item_id` | Conditional | string | The expected Return line. Required for matched and excess merchandise. minLength: `1`. |
| `type` | Required | string | Whether this observation matches a Return line, is unverified merchandise, or is known excess merchandise. Values: `"matched"`, `"unverified"`, `"excess"`. |
| `unverified_item` | Conditional | [ReturnUnverifiedItemInput](../models/ReturnUnverifiedItemInput.md#returnunverifiediteminput) | A buyer or catalog identity observation that has not been matched to a Return line. Merchandise received in a return that does not match an expected return line, described by name, SKU, and description. |

### ReturnReceiptLineItemRequestInput variant 1: `type` = `"matched"`

oneOf with type: "matched": The `matched` variant of `ReturnReceiptLineItemInput`..

- Condition: not (present(`unverified_item`)).
- Required: `return_line_item_id`.
- Optional: `unverified_item`.
- Constraints for `type`: Values: `"matched"`.

### ReturnReceiptLineItemRequestInput variant 2: `type` = `"unverified"`

oneOf with type: "unverified": The `unverified` variant of `ReturnReceiptLineItemInput`..

- Condition: not (present(`return_line_item_id`)).
- Required: `unverified_item`.
- Optional: `return_line_item_id`.
- Constraints for `type`: Values: `"unverified"`.

### ReturnReceiptLineItemRequestInput variant 3: `type` = `"excess"`

oneOf with type: "excess": The `excess` variant of `ReturnReceiptLineItemInput`..

- Condition: not (present(`unverified_item`)).
- Required: `return_line_item_id`.
- Optional: `unverified_item`.
- Constraints for `type`: Values: `"excess"`.

