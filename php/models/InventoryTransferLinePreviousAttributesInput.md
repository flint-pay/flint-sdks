[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryTransferLinePreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `canceled_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `canceled_quantity`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity). |
| `condition` | Optional | string or null | Condition of the units being moved. Values: `"sellable"`, `"quality_control"`, `"damaged"`, `"quarantined"`. `condition`: [declared alternatives](../models/InventoryTransferLinePreviousAttributesInput.md#inventorytransferlinepreviousattributesinputcondition). |
| `departed_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `departed_quantity`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity). |
| `inventory_item_id` | Optional | string or null | ID of the inventory item to move. `inventory_item_id`: [declared alternatives](../models/InventoryTransferLinePreviousAttributesInput.md#inventorytransferlinepreviousattributesinputinventory_item_id). |
| `inventory_transfer_line_id` | Optional | string or null | Unique identifier for this inventory transfer line, prefixed `invtrln_`. `inventory_transfer_line_id`: [declared alternatives](../models/InventoryTransferLinePreviousAttributesInput.md#inventorytransferlinepreviousattributesinputinventory_transfer_line_id). |
| `lost_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `lost_quantity`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity). |
| `received_damaged_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `received_damaged_quantity`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity). |
| `received_quality_control_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `received_quality_control_quantity`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity). |
| `received_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `received_quantity`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity). |
| `received_quarantined_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `received_quarantined_quantity`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity). |
| `received_sellable_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `received_sellable_quantity`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity). |
| `requested_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `requested_quantity`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity). |
| `returned_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `returned_quantity`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity). |

### InventoryTransferLinePreviousAttributesInput.canceled_quantity

Declared alternatives: [DeliveryQuoteLineItemResourcePreviousAttributesInput.quantity](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity).

### InventoryTransferLinePreviousAttributesInput.condition

### InventoryTransferLinePreviousAttributesInput.condition variant 1

anyOf variant 1: Condition of the units being moved..

- Value shape: string. Condition of the units being moved. Values: `"sellable"`, `"quality_control"`, `"damaged"`, `"quarantined"`.

### InventoryTransferLinePreviousAttributesInput.condition variant 2

anyOf variant 2.

- Value shape: null. Condition of the units being moved. 

### InventoryTransferLinePreviousAttributesInput.departed_quantity

Declared alternatives: [DeliveryQuoteLineItemResourcePreviousAttributesInput.quantity](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity).

### InventoryTransferLinePreviousAttributesInput.inventory_item_id

### InventoryTransferLinePreviousAttributesInput.inventory_item_id variant 1

anyOf variant 1: ID of the inventory item to move..

- Value shape: string. ID of the inventory item to move. ID of the inventory item to move. Example: `"invi_01KEZF7C00A6YEM25MTHW2MPZY"`. 

### InventoryTransferLinePreviousAttributesInput.inventory_item_id variant 2

anyOf variant 2.

- Value shape: null. ID of the inventory item to move. 

### InventoryTransferLinePreviousAttributesInput.inventory_transfer_line_id

### InventoryTransferLinePreviousAttributesInput.inventory_transfer_line_id variant 1

anyOf variant 1: Unique identifier for this inventory transfer line, prefixed `invtrln_`..

- Value shape: string. Unique identifier for this inventory transfer line, prefixed `invtrln_`. Unique identifier for this inventory transfer line, prefixed `invtrln_`. Example: `"invtrln_01KEZF7C00CK297J6QVV5J0PFV"`. 

### InventoryTransferLinePreviousAttributesInput.inventory_transfer_line_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this inventory transfer line, prefixed `invtrln_`. 

### InventoryTransferLinePreviousAttributesInput.lost_quantity

Declared alternatives: [DeliveryQuoteLineItemResourcePreviousAttributesInput.quantity](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity).

### InventoryTransferLinePreviousAttributesInput.received_damaged_quantity

Declared alternatives: [DeliveryQuoteLineItemResourcePreviousAttributesInput.quantity](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity).

### InventoryTransferLinePreviousAttributesInput.received_quality_control_quantity

Declared alternatives: [DeliveryQuoteLineItemResourcePreviousAttributesInput.quantity](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity).

### InventoryTransferLinePreviousAttributesInput.received_quantity

Declared alternatives: [DeliveryQuoteLineItemResourcePreviousAttributesInput.quantity](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity).

### InventoryTransferLinePreviousAttributesInput.received_quarantined_quantity

Declared alternatives: [DeliveryQuoteLineItemResourcePreviousAttributesInput.quantity](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity).

### InventoryTransferLinePreviousAttributesInput.received_sellable_quantity

Declared alternatives: [DeliveryQuoteLineItemResourcePreviousAttributesInput.quantity](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity).

### InventoryTransferLinePreviousAttributesInput.requested_quantity

Declared alternatives: [DeliveryQuoteLineItemResourcePreviousAttributesInput.quantity](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity).

### InventoryTransferLinePreviousAttributesInput.returned_quantity

Declared alternatives: [DeliveryQuoteLineItemResourcePreviousAttributesInput.quantity](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity).

