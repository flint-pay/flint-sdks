[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPickupAvailabilityQuantityResourceInput

The quantity of an order line item, or of one of its bundle components, that a pickup location applies to.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_component_id` | Optional | string | ID of the bundle component the quantity belongs to. Omitted when the line item is not a bundle. Example: `"bunc_01KEZF7C00CQASEZGAPEANTGD1"`. |
| `order_id` | Required | string | ID of the order that owns this line item. Checkout credentials receive only their own session's order ID. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `order_line_item_id` | Required | string | ID of the order line item. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |

