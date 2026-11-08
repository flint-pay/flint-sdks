[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryReceiptLineRequestInput

One line of an inventory receipt you supply: a quantity of an item received at a Location with its disposition.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `disposition` | Required | string | sellable adds on-hand stock available for sale. quality_control, damaged, and quarantined add on-hand stock to the matching condition bucket. lost records returned units that were lost and changes no stock quantity. Values: `"sellable"`, `"quality_control"`, `"damaged"`, `"quarantined"`, `"lost"`. |
| `inventory_item_id` | Required | string | ID of the inventory item the stock is for. minLength: `1`. Example: `"invi_01KEZF7C00A6YEM25MTHW2MPZY"`. |
| `inventory_reservation_id` | Required | string | The reservation whose consumed stock is being returned. minLength: `1`. Example: `"invr_01KEZF7C0041ENRR0C2NF3AP12"`. |
| `inventory_reservation_line_id` | Required | string | The consumed reservation line. Received quantity cannot exceed consumed quantity less prior receipts. minLength: `1`. Example: `"invrln_01KEZF7C002JCDA729XDSNWGY5"`. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `receiving_location_id` | Required | string | ID of the Location that receives the units. minLength: `1`. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |

