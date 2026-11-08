[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderEditRemovalRequestInput

An order line and the whole units to take off it.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_line_item_id` | Required | string | An existing line on this order. minLength: `1`. pattern: `^li_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Whole line units to remove, including all components of a bundle unit. Format: `int64`. minimum: `1`. |

