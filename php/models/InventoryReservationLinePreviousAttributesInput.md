[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryReservationLinePreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allocated_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `allocated_quantity`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity). |
| `at_risk_committed_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `at_risk_committed_quantity`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity). |
| `at_risk_held_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `at_risk_held_quantity`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity). |
| `backordered_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `backordered_quantity`: [declared alternatives](../models/InventoryLevelShortageDetectedInstalledMerchantsEventInput.md#inventorylevelshortagedetectedinstalledmerchantseventinputdataprevious_attributesbackordered_quantity). |
| `bundle_component_id` | Optional | string or null | ID of the bundle component this line covers. Absent when the line isn't for a bundle component. `bundle_component_id`: [declared alternatives](../models/InventoryReservationLinePreviousAttributesInput.md#inventoryreservationlinepreviousattributesinputbundle_component_id). |
| `committed_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `committed_quantity`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity). |
| `consumed_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `consumed_quantity`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity). |
| `demand_key` | Optional | string or null | Key of the demand this line serves. Matches the `demand_key` you sent, or the inventory item ID when you sent none. `demand_key`: [declared alternatives](../models/InventoryReservationLinePreviousAttributesInput.md#inventoryreservationlinepreviousattributesinputdemand_key). |
| `held_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `held_quantity`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity). |
| `inventory_item_id` | Optional | string or null | ID of the inventory item to reserve. `inventory_item_id`: [declared alternatives](../models/InventoryReservationLinePreviousAttributesInput.md#inventoryreservationlinepreviousattributesinputinventory_item_id). |
| `inventory_reservation_line_id` | Optional | string or null | Unique identifier for this inventory reservation line, prefixed `invrln_`. `inventory_reservation_line_id`: [declared alternatives](../models/InventoryReservationLinePreviousAttributesInput.md#inventoryreservationlinepreviousattributesinputinventory_reservation_line_id). |
| `location_id` | Optional | string or null | ID of the Location the stock is allocated from. `location_id`: [declared alternatives](../models/InventoryReservationLinePreviousAttributesInput.md#inventoryreservationlinepreviousattributesinputlocation_id). |
| `order_id` | Optional | string or null | Order that owns this record or its referenced line item and charge. `order_id`: [declared alternatives](../models/InventoryReservationLinePreviousAttributesInput.md#inventoryreservationlinepreviousattributesinputorder_id). |
| `order_line_item_id` | Optional | string or null | ID of the order line item this line covers. Absent unless an order holds the reservation. `order_line_item_id`: [declared alternatives](../models/InventoryReservationLinePreviousAttributesInput.md#inventoryreservationlinepreviousattributesinputorder_line_item_id). |
| `reallocated_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `reallocated_quantity`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity). |
| `released_from_backordered_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `released_from_backordered_quantity`: [declared alternatives](../models/InventoryLevelShortageDetectedInstalledMerchantsEventInput.md#inventorylevelshortagedetectedinstalledmerchantseventinputdataprevious_attributesbackordered_quantity). |
| `released_from_committed_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `released_from_committed_quantity`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity). |
| `released_from_held_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `released_from_held_quantity`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity). |

### InventoryReservationLinePreviousAttributesInput.allocated_quantity

Declared alternatives: [DeliveryQuoteLineItemResourcePreviousAttributesInput.quantity](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity).

### InventoryReservationLinePreviousAttributesInput.at_risk_committed_quantity

Declared alternatives: [DeliveryQuoteLineItemResourcePreviousAttributesInput.quantity](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity).

### InventoryReservationLinePreviousAttributesInput.at_risk_held_quantity

Declared alternatives: [DeliveryQuoteLineItemResourcePreviousAttributesInput.quantity](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity).

### InventoryReservationLinePreviousAttributesInput.backordered_quantity

Declared alternatives: [InventoryLevelShortageDetectedInstalledMerchantsEventInput.data.previous_attributes.backordered_quantity](../models/InventoryLevelShortageDetectedInstalledMerchantsEventInput.md#inventorylevelshortagedetectedinstalledmerchantseventinputdataprevious_attributesbackordered_quantity).

### InventoryReservationLinePreviousAttributesInput.bundle_component_id

### InventoryReservationLinePreviousAttributesInput.bundle_component_id variant 1

anyOf variant 1: ID of the bundle component this line covers. Absent when the line isn't for a bundle component..

- Value shape: string. ID of the bundle component this line covers. Absent when the line isn't for a bundle component. ID of the bundle component this line covers. Absent when the line isn't for a bundle component. Example: `"bunc_01KEZF7C00CQASEZGAPEANTGD1"`. 

### InventoryReservationLinePreviousAttributesInput.bundle_component_id variant 2

anyOf variant 2.

- Value shape: null. ID of the bundle component this line covers. Absent when the line isn't for a bundle component. 

### InventoryReservationLinePreviousAttributesInput.committed_quantity

Declared alternatives: [DeliveryQuoteLineItemResourcePreviousAttributesInput.quantity](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity).

### InventoryReservationLinePreviousAttributesInput.consumed_quantity

Declared alternatives: [DeliveryQuoteLineItemResourcePreviousAttributesInput.quantity](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity).

### InventoryReservationLinePreviousAttributesInput.demand_key

### InventoryReservationLinePreviousAttributesInput.demand_key variant 1

anyOf variant 1: Key of the demand this line serves. Matches the `demand_key` you sent, or the inventory item ID when you sent none..

- Value shape: string. Key of the demand this line serves. Matches the `demand_key` you sent, or the inventory item ID when you sent none. 

### InventoryReservationLinePreviousAttributesInput.demand_key variant 2

anyOf variant 2.

- Value shape: null. Key of the demand this line serves. Matches the `demand_key` you sent, or the inventory item ID when you sent none. 

### InventoryReservationLinePreviousAttributesInput.held_quantity

Declared alternatives: [DeliveryQuoteLineItemResourcePreviousAttributesInput.quantity](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity).

### InventoryReservationLinePreviousAttributesInput.inventory_item_id

### InventoryReservationLinePreviousAttributesInput.inventory_item_id variant 1

anyOf variant 1: ID of the inventory item to reserve..

- Value shape: string. ID of the inventory item to reserve. ID of the inventory item to reserve. Example: `"invi_01KEZF7C00A6YEM25MTHW2MPZY"`. 

### InventoryReservationLinePreviousAttributesInput.inventory_item_id variant 2

anyOf variant 2.

- Value shape: null. ID of the inventory item to reserve. 

### InventoryReservationLinePreviousAttributesInput.inventory_reservation_line_id

### InventoryReservationLinePreviousAttributesInput.inventory_reservation_line_id variant 1

anyOf variant 1: Unique identifier for this inventory reservation line, prefixed `invrln_`..

- Value shape: string. Unique identifier for this inventory reservation line, prefixed `invrln_`. Unique identifier for this inventory reservation line, prefixed `invrln_`. Example: `"invrln_01KEZF7C002JCDA729XDSNWGY5"`. 

### InventoryReservationLinePreviousAttributesInput.inventory_reservation_line_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this inventory reservation line, prefixed `invrln_`. 

### InventoryReservationLinePreviousAttributesInput.location_id

### InventoryReservationLinePreviousAttributesInput.location_id variant 1

anyOf variant 1: ID of the Location the stock is allocated from..

- Value shape: string. ID of the Location the stock is allocated from. ID of the Location the stock is allocated from. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. 

### InventoryReservationLinePreviousAttributesInput.location_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Location the stock is allocated from. 

### InventoryReservationLinePreviousAttributesInput.order_id

### InventoryReservationLinePreviousAttributesInput.order_id variant 1

anyOf variant 1: Order that owns this record or its referenced line item and charge..

- Value shape: string. Order that owns this record or its referenced line item and charge. Order that owns this record or its referenced line item and charge. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### InventoryReservationLinePreviousAttributesInput.order_id variant 2

anyOf variant 2.

- Value shape: null. Order that owns this record or its referenced line item and charge. 

### InventoryReservationLinePreviousAttributesInput.order_line_item_id

### InventoryReservationLinePreviousAttributesInput.order_line_item_id variant 1

anyOf variant 1: ID of the order line item this line covers. Absent unless an order holds the reservation..

- Value shape: string. ID of the order line item this line covers. Absent unless an order holds the reservation. ID of the order line item this line covers. Absent unless an order holds the reservation. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. 

### InventoryReservationLinePreviousAttributesInput.order_line_item_id variant 2

anyOf variant 2.

- Value shape: null. ID of the order line item this line covers. Absent unless an order holds the reservation. 

### InventoryReservationLinePreviousAttributesInput.reallocated_quantity

Declared alternatives: [DeliveryQuoteLineItemResourcePreviousAttributesInput.quantity](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity).

### InventoryReservationLinePreviousAttributesInput.released_from_backordered_quantity

Declared alternatives: [InventoryLevelShortageDetectedInstalledMerchantsEventInput.data.previous_attributes.backordered_quantity](../models/InventoryLevelShortageDetectedInstalledMerchantsEventInput.md#inventorylevelshortagedetectedinstalledmerchantseventinputdataprevious_attributesbackordered_quantity).

### InventoryReservationLinePreviousAttributesInput.released_from_committed_quantity

Declared alternatives: [DeliveryQuoteLineItemResourcePreviousAttributesInput.quantity](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity).

### InventoryReservationLinePreviousAttributesInput.released_from_held_quantity

Declared alternatives: [DeliveryQuoteLineItemResourcePreviousAttributesInput.quantity](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity).

