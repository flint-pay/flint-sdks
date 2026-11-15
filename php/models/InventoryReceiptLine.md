[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryReceiptLine

One line of an inventory receipt: a quantity of an item received at a Location with its disposition.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `disposition` | Required | string | sellable adds on-hand stock available for sale. quality_control, damaged, and quarantined add on-hand stock to the matching condition bucket. lost records returned units that were lost and changes no stock quantity. Values: `"sellable"`, `"quality_control"`, `"damaged"`, `"quarantined"`, `"lost"`. |
| `inventory_item_id` | Required | string | ID of the inventory item the stock is for. |
| `inventory_movement_id` | Optional | string | Movement this line wrote. Absent when the line wrote none. |
| `inventory_receipt_line_id` | Required | string | Unique identifier for this inventory receipt line, prefixed `invrecln_`. |
| `inventory_reservation_id` | Optional | string | ID of the reservation whose consumed stock these units came from. |
| `inventory_reservation_line_id` | Optional | string | ID of the consumed reservation line these units came from. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `receiving_location_id` | Required | string | ID of the Location that receives the units. |
| `return_disposition_id` | Optional | string | ID of the Return disposition this receipt records. Absent when the receipt isn't linked to a Return. |
| `return_id` | Required | string or null | Return that owns return_line_item_id. `null` when return_line_item_id is null. |
| `return_line_item_id` | Optional | string | ID of the Return line item these units belong to. Absent when the line isn't linked to a Return. |

