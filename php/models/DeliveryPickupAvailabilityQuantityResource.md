[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPickupAvailabilityQuantityResource

The quantity of an order line item, or of one of its bundle components, that a pickup location applies to.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_component_id` | Optional | string | ID of the bundle component the quantity belongs to. Omitted when the line item is not a bundle. |
| `order_id` | Required | string | ID of the order that owns this line item. Checkout credentials receive only their own session's order ID. |
| `order_line_item_id` | Required | string | ID of the order line item. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |

