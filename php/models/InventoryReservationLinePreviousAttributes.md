[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryReservationLinePreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allocated_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `allocated_quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |
| `at_risk_committed_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `at_risk_committed_quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |
| `at_risk_held_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `at_risk_held_quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |
| `backordered_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `backordered_quantity`: [declared alternatives](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributesbackordered_quantity). |
| `bundle_component_id` | Optional | string or null | ID of the bundle component this line covers. Absent when the line isn't for a bundle component. `bundle_component_id`: [declared alternatives](../models/InventoryReservationLinePreviousAttributes.md#inventoryreservationlinepreviousattributesbundle_component_id). |
| `committed_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `committed_quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |
| `consumed_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `consumed_quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |
| `demand_key` | Optional | string or null | Key of the demand this line serves. Matches the `demand_key` you sent, or the inventory item ID when you sent none. `demand_key`: [declared alternatives](../models/InventoryReservationLinePreviousAttributes.md#inventoryreservationlinepreviousattributesdemand_key). |
| `held_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `held_quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |
| `inventory_item_id` | Optional | string or null | ID of the inventory item to reserve. `inventory_item_id`: [declared alternatives](../models/InventoryReservationLinePreviousAttributes.md#inventoryreservationlinepreviousattributesinventory_item_id). |
| `inventory_reservation_line_id` | Optional | string or null | Unique identifier for this inventory reservation line, prefixed `invrln_`. `inventory_reservation_line_id`: [declared alternatives](../models/InventoryReservationLinePreviousAttributes.md#inventoryreservationlinepreviousattributesinventory_reservation_line_id). |
| `location_id` | Optional | string or null | ID of the Location the stock is allocated from. `location_id`: [declared alternatives](../models/InventoryReservationLinePreviousAttributes.md#inventoryreservationlinepreviousattributeslocation_id). |
| `order_id` | Optional | string or null | Order that owns this record or its referenced line item and charge. `order_id`: [declared alternatives](../models/InventoryReservationLinePreviousAttributes.md#inventoryreservationlinepreviousattributesorder_id). |
| `order_line_item_id` | Optional | string or null | ID of the order line item this line covers. Absent unless an order holds the reservation. `order_line_item_id`: [declared alternatives](../models/InventoryReservationLinePreviousAttributes.md#inventoryreservationlinepreviousattributesorder_line_item_id). |
| `reallocated_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `reallocated_quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |
| `released_from_backordered_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `released_from_backordered_quantity`: [declared alternatives](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributesbackordered_quantity). |
| `released_from_committed_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `released_from_committed_quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |
| `released_from_held_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `released_from_held_quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |

### InventoryReservationLinePreviousAttributes.allocated_quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### InventoryReservationLinePreviousAttributes.at_risk_committed_quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### InventoryReservationLinePreviousAttributes.at_risk_held_quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### InventoryReservationLinePreviousAttributes.backordered_quantity

Declared alternatives: [InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.backordered_quantity](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributesbackordered_quantity).

### InventoryReservationLinePreviousAttributes.bundle_component_id

### InventoryReservationLinePreviousAttributes.bundle_component_id variant 1

anyOf variant 1: ID of the bundle component this line covers. Absent when the line isn't for a bundle component..

- Value shape: string. ID of the bundle component this line covers. Absent when the line isn't for a bundle component. 

### InventoryReservationLinePreviousAttributes.bundle_component_id variant 2

anyOf variant 2.

- Value shape: null. ID of the bundle component this line covers. Absent when the line isn't for a bundle component. 

### InventoryReservationLinePreviousAttributes.committed_quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### InventoryReservationLinePreviousAttributes.consumed_quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### InventoryReservationLinePreviousAttributes.demand_key

### InventoryReservationLinePreviousAttributes.demand_key variant 1

anyOf variant 1: Key of the demand this line serves. Matches the `demand_key` you sent, or the inventory item ID when you sent none..

- Value shape: string. Key of the demand this line serves. Matches the `demand_key` you sent, or the inventory item ID when you sent none. 

### InventoryReservationLinePreviousAttributes.demand_key variant 2

anyOf variant 2.

- Value shape: null. Key of the demand this line serves. Matches the `demand_key` you sent, or the inventory item ID when you sent none. 

### InventoryReservationLinePreviousAttributes.held_quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### InventoryReservationLinePreviousAttributes.inventory_item_id

### InventoryReservationLinePreviousAttributes.inventory_item_id variant 1

anyOf variant 1: ID of the inventory item to reserve..

- Value shape: string. ID of the inventory item to reserve. 

### InventoryReservationLinePreviousAttributes.inventory_item_id variant 2

anyOf variant 2.

- Value shape: null. ID of the inventory item to reserve. 

### InventoryReservationLinePreviousAttributes.inventory_reservation_line_id

### InventoryReservationLinePreviousAttributes.inventory_reservation_line_id variant 1

anyOf variant 1: Unique identifier for this inventory reservation line, prefixed `invrln_`..

- Value shape: string. Unique identifier for this inventory reservation line, prefixed `invrln_`. 

### InventoryReservationLinePreviousAttributes.inventory_reservation_line_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this inventory reservation line, prefixed `invrln_`. 

### InventoryReservationLinePreviousAttributes.location_id

### InventoryReservationLinePreviousAttributes.location_id variant 1

anyOf variant 1: ID of the Location the stock is allocated from..

- Value shape: string. ID of the Location the stock is allocated from. 

### InventoryReservationLinePreviousAttributes.location_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Location the stock is allocated from. 

### InventoryReservationLinePreviousAttributes.order_id

### InventoryReservationLinePreviousAttributes.order_id variant 1

anyOf variant 1: Order that owns this record or its referenced line item and charge..

- Value shape: string. Order that owns this record or its referenced line item and charge. 

### InventoryReservationLinePreviousAttributes.order_id variant 2

anyOf variant 2.

- Value shape: null. Order that owns this record or its referenced line item and charge. 

### InventoryReservationLinePreviousAttributes.order_line_item_id

### InventoryReservationLinePreviousAttributes.order_line_item_id variant 1

anyOf variant 1: ID of the order line item this line covers. Absent unless an order holds the reservation..

- Value shape: string. ID of the order line item this line covers. Absent unless an order holds the reservation. 

### InventoryReservationLinePreviousAttributes.order_line_item_id variant 2

anyOf variant 2.

- Value shape: null. ID of the order line item this line covers. Absent unless an order holds the reservation. 

### InventoryReservationLinePreviousAttributes.reallocated_quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### InventoryReservationLinePreviousAttributes.released_from_backordered_quantity

Declared alternatives: [InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.backordered_quantity](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributesbackordered_quantity).

### InventoryReservationLinePreviousAttributes.released_from_committed_quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### InventoryReservationLinePreviousAttributes.released_from_held_quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

