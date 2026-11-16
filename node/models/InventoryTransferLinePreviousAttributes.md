[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryTransferLinePreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `canceled_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `canceled_quantity`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributes.md#deliveryquotelineitemresourcepreviousattributesquantity). |
| `condition` | Optional | string or null | Condition of the units being moved. Values: `"sellable"`, `"quality_control"`, `"damaged"`, `"quarantined"`. `condition`: [declared alternatives](../models/InventoryTransferLinePreviousAttributes.md#inventorytransferlinepreviousattributescondition). |
| `departed_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `departed_quantity`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributes.md#deliveryquotelineitemresourcepreviousattributesquantity). |
| `inventory_item_id` | Optional | string or null | ID of the inventory item to move. `inventory_item_id`: [declared alternatives](../models/InventoryTransferLinePreviousAttributes.md#inventorytransferlinepreviousattributesinventory_item_id). |
| `inventory_transfer_line_id` | Optional | string or null | Unique identifier for this inventory transfer line, prefixed `invtrln_`. `inventory_transfer_line_id`: [declared alternatives](../models/InventoryTransferLinePreviousAttributes.md#inventorytransferlinepreviousattributesinventory_transfer_line_id). |
| `lost_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `lost_quantity`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributes.md#deliveryquotelineitemresourcepreviousattributesquantity). |
| `received_damaged_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `received_damaged_quantity`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributes.md#deliveryquotelineitemresourcepreviousattributesquantity). |
| `received_quality_control_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `received_quality_control_quantity`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributes.md#deliveryquotelineitemresourcepreviousattributesquantity). |
| `received_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `received_quantity`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributes.md#deliveryquotelineitemresourcepreviousattributesquantity). |
| `received_quarantined_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `received_quarantined_quantity`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributes.md#deliveryquotelineitemresourcepreviousattributesquantity). |
| `received_sellable_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `received_sellable_quantity`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributes.md#deliveryquotelineitemresourcepreviousattributesquantity). |
| `requested_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `requested_quantity`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributes.md#deliveryquotelineitemresourcepreviousattributesquantity). |
| `returned_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `returned_quantity`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributes.md#deliveryquotelineitemresourcepreviousattributesquantity). |

### InventoryTransferLinePreviousAttributes.canceled_quantity

Declared alternatives: [DeliveryQuoteLineItemResourcePreviousAttributes.quantity](../models/DeliveryQuoteLineItemResourcePreviousAttributes.md#deliveryquotelineitemresourcepreviousattributesquantity).

### InventoryTransferLinePreviousAttributes.condition

### InventoryTransferLinePreviousAttributes.condition variant 1

anyOf variant 1: Condition of the units being moved..

- Value shape: string. Condition of the units being moved. Values: `"sellable"`, `"quality_control"`, `"damaged"`, `"quarantined"`.

### InventoryTransferLinePreviousAttributes.condition variant 2

anyOf variant 2.

- Value shape: null. Condition of the units being moved. 

### InventoryTransferLinePreviousAttributes.departed_quantity

Declared alternatives: [DeliveryQuoteLineItemResourcePreviousAttributes.quantity](../models/DeliveryQuoteLineItemResourcePreviousAttributes.md#deliveryquotelineitemresourcepreviousattributesquantity).

### InventoryTransferLinePreviousAttributes.inventory_item_id

### InventoryTransferLinePreviousAttributes.inventory_item_id variant 1

anyOf variant 1: ID of the inventory item to move..

- Value shape: string. ID of the inventory item to move. ID of the inventory item to move. Example: `"invi_01KEZF7C00A6YEM25MTHW2MPZY"`. 

### InventoryTransferLinePreviousAttributes.inventory_item_id variant 2

anyOf variant 2.

- Value shape: null. ID of the inventory item to move. 

### InventoryTransferLinePreviousAttributes.inventory_transfer_line_id

### InventoryTransferLinePreviousAttributes.inventory_transfer_line_id variant 1

anyOf variant 1: Unique identifier for this inventory transfer line, prefixed `invtrln_`..

- Value shape: string. Unique identifier for this inventory transfer line, prefixed `invtrln_`. Unique identifier for this inventory transfer line, prefixed `invtrln_`. Example: `"invtrln_01KEZF7C00CK297J6QVV5J0PFV"`. 

### InventoryTransferLinePreviousAttributes.inventory_transfer_line_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this inventory transfer line, prefixed `invtrln_`. 

### InventoryTransferLinePreviousAttributes.lost_quantity

Declared alternatives: [DeliveryQuoteLineItemResourcePreviousAttributes.quantity](../models/DeliveryQuoteLineItemResourcePreviousAttributes.md#deliveryquotelineitemresourcepreviousattributesquantity).

### InventoryTransferLinePreviousAttributes.received_damaged_quantity

Declared alternatives: [DeliveryQuoteLineItemResourcePreviousAttributes.quantity](../models/DeliveryQuoteLineItemResourcePreviousAttributes.md#deliveryquotelineitemresourcepreviousattributesquantity).

### InventoryTransferLinePreviousAttributes.received_quality_control_quantity

Declared alternatives: [DeliveryQuoteLineItemResourcePreviousAttributes.quantity](../models/DeliveryQuoteLineItemResourcePreviousAttributes.md#deliveryquotelineitemresourcepreviousattributesquantity).

### InventoryTransferLinePreviousAttributes.received_quantity

Declared alternatives: [DeliveryQuoteLineItemResourcePreviousAttributes.quantity](../models/DeliveryQuoteLineItemResourcePreviousAttributes.md#deliveryquotelineitemresourcepreviousattributesquantity).

### InventoryTransferLinePreviousAttributes.received_quarantined_quantity

Declared alternatives: [DeliveryQuoteLineItemResourcePreviousAttributes.quantity](../models/DeliveryQuoteLineItemResourcePreviousAttributes.md#deliveryquotelineitemresourcepreviousattributesquantity).

### InventoryTransferLinePreviousAttributes.received_sellable_quantity

Declared alternatives: [DeliveryQuoteLineItemResourcePreviousAttributes.quantity](../models/DeliveryQuoteLineItemResourcePreviousAttributes.md#deliveryquotelineitemresourcepreviousattributesquantity).

### InventoryTransferLinePreviousAttributes.requested_quantity

Declared alternatives: [DeliveryQuoteLineItemResourcePreviousAttributes.quantity](../models/DeliveryQuoteLineItemResourcePreviousAttributes.md#deliveryquotelineitemresourcepreviousattributesquantity).

### InventoryTransferLinePreviousAttributes.returned_quantity

Declared alternatives: [DeliveryQuoteLineItemResourcePreviousAttributes.quantity](../models/DeliveryQuoteLineItemResourcePreviousAttributes.md#deliveryquotelineitemresourcepreviousattributesquantity).

