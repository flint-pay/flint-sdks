[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryQuoteLineItemResource

Declared schema DeliveryPickupAvailabilityQuantityResource: The quantity of an order line item, or of one of its bundle components, that a pickup location applies to.

Declared schema DeliveryQuoteLineItemResource: An order line item, or one bundle component of it, and the quantity covered by a delivery choice group.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_component_id` | Optional | string | Example: `"bunc_01KEZF7C00CQASEZGAPEANTGD1"`. |
| `order_line_item_id` | Required | string | Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |

