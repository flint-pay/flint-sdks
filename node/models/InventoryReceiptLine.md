[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryReceiptLine

One line of an inventory receipt: a quantity of an item received at a Location with its disposition.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `disposition` | Required | string | sellable adds on-hand stock available for sale. quality_control, damaged, and quarantined add on-hand stock to the matching condition bucket. lost records returned units that were lost and changes no stock quantity. Values: `"sellable"`, `"quality_control"`, `"damaged"`, `"quarantined"`, `"lost"`. |
| `inventory_item_id` | Required | string | ID of the inventory item the stock is for. Example: `"invi_01KEZF7C00A6YEM25MTHW2MPZY"`. |
| `inventory_movement_id` | Optional | string | Movement this line wrote. Absent when the line wrote none. Example: `"invm_01KEZF7C00DYPFT9PS0NZY805Z"`. |
| `inventory_receipt_line_id` | Required | string | Unique identifier for this inventory receipt line, prefixed `invrecln_`. Example: `"invrecln_01KEZF7C00CN4N90YY8T10462F"`. |
| `inventory_reservation_id` | Optional | string | ID of the reservation whose consumed stock these units came from. Example: `"invr_01KEZF7C0041ENRR0C2NF3AP12"`. |
| `inventory_reservation_line_id` | Optional | string | ID of the consumed reservation line these units came from. Example: `"invrln_01KEZF7C002JCDA729XDSNWGY5"`. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `receiving_location_id` | Required | string | ID of the Location that receives the units. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `return_disposition_id` | Optional | string | ID of the Return disposition this receipt records. Absent when the receipt isn't linked to a Return. Example: `"retdsp_01KEZF7C007H87J66PH2EEK1VW"`. |
| `return_id` | Required | string or null | Return that owns return_line_item_id. `null` when return_line_item_id is null. Example: `"ret_01KEZF7C00PG93650ZKVQNGF7X"`. |
| `return_line_item_id` | Optional | string | ID of the Return line item these units belong to. Absent when the line isn't linked to a Return. Example: `"retli_01KEZF7C00R813VR7ECXS062QG"`. |

