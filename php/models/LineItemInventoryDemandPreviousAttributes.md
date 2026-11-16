[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## LineItemInventoryDemandPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_component_id` | Optional | string or null | ID of the bundle component this demand comes from. Present only on a line item that sells a bundle. `bundle_component_id`: [declared alternatives](../models/LineItemInventoryDemandPreviousAttributes.md#lineiteminventorydemandpreviousattributesbundle_component_id). |
| `component_snapshot_id` | Optional | string or null | Identifier of the bundle component as it was frozen on the line item. Present only when the bundle component has one. Inventory reservations for the demand use it in place of `bundle_component_id`. `component_snapshot_id`: [declared alternatives](../models/LineItemInventoryDemandPreviousAttributes.md#lineiteminventorydemandpreviousattributescomponent_snapshot_id). |
| `inventory_item_id` | Optional | string or null | ID of the inventory item each unit of the line item uses. `inventory_item_id`: [declared alternatives](../models/LineItemInventoryDemandPreviousAttributes.md#lineiteminventorydemandpreviousattributesinventory_item_id). |
| `quantity_per_line_item_unit` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `quantity_per_line_item_unit`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |

### LineItemInventoryDemandPreviousAttributes.bundle_component_id

### LineItemInventoryDemandPreviousAttributes.bundle_component_id variant 1

anyOf variant 1: ID of the bundle component this demand comes from. Present only on a line item that sells a bundle..

- Value shape: string. ID of the bundle component this demand comes from. Present only on a line item that sells a bundle. 

### LineItemInventoryDemandPreviousAttributes.bundle_component_id variant 2

anyOf variant 2.

- Value shape: null. ID of the bundle component this demand comes from. Present only on a line item that sells a bundle. 

### LineItemInventoryDemandPreviousAttributes.component_snapshot_id

### LineItemInventoryDemandPreviousAttributes.component_snapshot_id variant 1

anyOf variant 1: Identifier of the bundle component as it was frozen on the line item. Present only when the bundle component has one. Inventory reservations for the demand use it in place of `bundle_component_id`..

- Value shape: string. Identifier of the bundle component as it was frozen on the line item. Present only when the bundle component has one. Inventory reservations for the demand use it in place of `bundle_component_id`. 

### LineItemInventoryDemandPreviousAttributes.component_snapshot_id variant 2

anyOf variant 2.

- Value shape: null. Identifier of the bundle component as it was frozen on the line item. Present only when the bundle component has one. Inventory reservations for the demand use it in place of `bundle_component_id`. 

### LineItemInventoryDemandPreviousAttributes.inventory_item_id

### LineItemInventoryDemandPreviousAttributes.inventory_item_id variant 1

anyOf variant 1: ID of the inventory item each unit of the line item uses..

- Value shape: string. ID of the inventory item each unit of the line item uses. 

### LineItemInventoryDemandPreviousAttributes.inventory_item_id variant 2

anyOf variant 2.

- Value shape: null. ID of the inventory item each unit of the line item uses. 

### LineItemInventoryDemandPreviousAttributes.quantity_per_line_item_unit

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

