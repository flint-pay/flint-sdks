[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FulfillmentLineItemRequestInput

An order line item and quantity to include when creating a fulfillment.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_component_id` | Required | string or null | Bundle component to fulfill, from the order line's bundle_components. `null` when the line isn't a bundle component. A bundle line requires its component ID. minLength: `1`. Example: `"bunc_01KEZF7C00CQASEZGAPEANTGD1"`. |
| `order_line_item_id` | Required | string | Order line whose quantity is allocated. minLength: `1`. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. |
| `quantity` | Required | integer | Whole-number quantity in component units for a bundle component, or line units otherwise; fractional quantities are not supported. Format: `int64`. |

