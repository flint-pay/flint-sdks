[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderEditRemovalRequest







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_line_item_id` | Required | string | Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. |
| `quantity` | Required | integer | Format: `int64`. |

### OrderEditRemovalRequest variant 1

anyOf variant 1: Declared schema FulfillmentLineItemRequest. An order line item and quantity to include when creating a fulfillment..

- Constraints for `order_line_item_id`: Order line whose quantity is allocated. minLength: `1`.
- Constraints for `quantity`: Whole-number quantity; fractional quantities are not supported.

### OrderEditRemovalRequest variant 2

anyOf variant 2: Declared schema OrderEditRemovalRequest. An order line and the whole units to take off it..

- Constraints for `order_line_item_id`: An existing line on this order. minLength: `1`. pattern: `^li_[0-9A-HJKMNP-TV-Z]{26}$`.
- Constraints for `quantity`: Whole-number quantity; fractional quantities are not supported. Whole line units to remove, including all components of a bundle unit. minimum: `1`.

