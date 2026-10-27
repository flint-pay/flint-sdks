[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FulfillmentLineItemRequest

An order line item and quantity to include when creating a fulfillment.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_line_item_id` | Required | string | minLength: `1`. |
| `quantity` | Required | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |

