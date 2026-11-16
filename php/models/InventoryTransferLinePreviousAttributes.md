[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryTransferLinePreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `canceled_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `canceled_quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |
| `condition` | Optional | string or null | Condition of the units being moved. Values: `"sellable"`, `"quality_control"`, `"damaged"`, `"quarantined"`. `condition`: [declared alternatives](../models/InventoryTransferLinePreviousAttributes.md#inventorytransferlinepreviousattributescondition). |
| `departed_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `departed_quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |
| `inventory_item_id` | Optional | string or null | ID of the inventory item to move. `inventory_item_id`: [declared alternatives](../models/InventoryTransferLinePreviousAttributes.md#inventorytransferlinepreviousattributesinventory_item_id). |
| `inventory_transfer_line_id` | Optional | string or null | Unique identifier for this inventory transfer line, prefixed `invtrln_`. `inventory_transfer_line_id`: [declared alternatives](../models/InventoryTransferLinePreviousAttributes.md#inventorytransferlinepreviousattributesinventory_transfer_line_id). |
| `lost_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `lost_quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |
| `received_damaged_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `received_damaged_quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |
| `received_quality_control_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `received_quality_control_quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |
| `received_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `received_quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |
| `received_quarantined_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `received_quarantined_quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |
| `received_sellable_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `received_sellable_quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |
| `requested_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `requested_quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |
| `returned_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `returned_quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |

### InventoryTransferLinePreviousAttributes.canceled_quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### InventoryTransferLinePreviousAttributes.condition

### InventoryTransferLinePreviousAttributes.condition variant 1

anyOf variant 1: Condition of the units being moved..

- Value shape: string. Condition of the units being moved. Values: `"sellable"`, `"quality_control"`, `"damaged"`, `"quarantined"`.

### InventoryTransferLinePreviousAttributes.condition variant 2

anyOf variant 2.

- Value shape: null. Condition of the units being moved. 

### InventoryTransferLinePreviousAttributes.departed_quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### InventoryTransferLinePreviousAttributes.inventory_item_id

### InventoryTransferLinePreviousAttributes.inventory_item_id variant 1

anyOf variant 1: ID of the inventory item to move..

- Value shape: string. ID of the inventory item to move. 

### InventoryTransferLinePreviousAttributes.inventory_item_id variant 2

anyOf variant 2.

- Value shape: null. ID of the inventory item to move. 

### InventoryTransferLinePreviousAttributes.inventory_transfer_line_id

### InventoryTransferLinePreviousAttributes.inventory_transfer_line_id variant 1

anyOf variant 1: Unique identifier for this inventory transfer line, prefixed `invtrln_`..

- Value shape: string. Unique identifier for this inventory transfer line, prefixed `invtrln_`. 

### InventoryTransferLinePreviousAttributes.inventory_transfer_line_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this inventory transfer line, prefixed `invtrln_`. 

### InventoryTransferLinePreviousAttributes.lost_quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### InventoryTransferLinePreviousAttributes.received_damaged_quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### InventoryTransferLinePreviousAttributes.received_quality_control_quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### InventoryTransferLinePreviousAttributes.received_quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### InventoryTransferLinePreviousAttributes.received_quarantined_quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### InventoryTransferLinePreviousAttributes.received_sellable_quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### InventoryTransferLinePreviousAttributes.requested_quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### InventoryTransferLinePreviousAttributes.returned_quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

