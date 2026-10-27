[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryReceiptLineRequest

One line of an inventory receipt you supply: a quantity of an item received at a Location with its disposition.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `disposition` | Required | string | sellable adds on-hand stock available for sale. quality_control, damaged, and quarantined add on-hand stock to the matching condition bucket. lost records returned units that were lost and changes no stock quantity. Values: `"sellable"`, `"quality_control"`, `"damaged"`, `"quarantined"`, `"lost"`. |
| `inventory_item_id` | Required | string | minLength: `1`. |
| `inventory_reservation_id` | Required | string | The reservation whose consumed stock is being returned. minLength: `1`. |
| `inventory_reservation_line_id` | Required | string | The consumed reservation line. Received quantity cannot exceed consumed quantity less prior receipts. minLength: `1`. |
| `quantity` | Required | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `receiving_location_id` | Required | string | minLength: `1`. |

