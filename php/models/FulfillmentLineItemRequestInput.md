[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FulfillmentLineItemRequestInput

An order line item and quantity to include when creating a fulfillment.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_line_item_id` | Required | string | minLength: `1`. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |

