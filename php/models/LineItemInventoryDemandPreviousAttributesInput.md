[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## LineItemInventoryDemandPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_component_id` | Optional | string or null | ID of the bundle component this demand comes from. Present only on a line item that sells a bundle. `bundle_component_id`: [declared alternatives](../models/LineItemInventoryDemandPreviousAttributesInput.md#lineiteminventorydemandpreviousattributesinputbundle_component_id). |
| `component_snapshot_id` | Optional | string or null | Identifier of the bundle component as it was frozen on the line item. Present only when the bundle component has one. Inventory reservations for the demand use it in place of `bundle_component_id`. `component_snapshot_id`: [declared alternatives](../models/LineItemInventoryDemandPreviousAttributesInput.md#lineiteminventorydemandpreviousattributesinputcomponent_snapshot_id). |
| `inventory_item_id` | Optional | string or null | ID of the inventory item each unit of the line item uses. `inventory_item_id`: [declared alternatives](../models/LineItemInventoryDemandPreviousAttributesInput.md#lineiteminventorydemandpreviousattributesinputinventory_item_id). |
| `quantity_per_line_item_unit` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `quantity_per_line_item_unit`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity). |

### LineItemInventoryDemandPreviousAttributesInput.bundle_component_id

### LineItemInventoryDemandPreviousAttributesInput.bundle_component_id variant 1

anyOf variant 1: ID of the bundle component this demand comes from. Present only on a line item that sells a bundle..

- Value shape: string. ID of the bundle component this demand comes from. Present only on a line item that sells a bundle. ID of the bundle component this demand comes from. Present only on a line item that sells a bundle. Example: `"bunc_01KEZF7C00CQASEZGAPEANTGD1"`. 

### LineItemInventoryDemandPreviousAttributesInput.bundle_component_id variant 2

anyOf variant 2.

- Value shape: null. ID of the bundle component this demand comes from. Present only on a line item that sells a bundle. 

### LineItemInventoryDemandPreviousAttributesInput.component_snapshot_id

### LineItemInventoryDemandPreviousAttributesInput.component_snapshot_id variant 1

anyOf variant 1: Identifier of the bundle component as it was frozen on the line item. Present only when the bundle component has one. Inventory reservations for the demand use it in place of `bundle_component_id`..

- Value shape: string. Identifier of the bundle component as it was frozen on the line item. Present only when the bundle component has one. Inventory reservations for the demand use it in place of `bundle_component_id`. Identifier of the bundle component as it was frozen on the line item. Present only when the bundle component has one. Inventory reservations for the demand use it in place of `bundle_component_id`. Example: `"component-1842"`. 

### LineItemInventoryDemandPreviousAttributesInput.component_snapshot_id variant 2

anyOf variant 2.

- Value shape: null. Identifier of the bundle component as it was frozen on the line item. Present only when the bundle component has one. Inventory reservations for the demand use it in place of `bundle_component_id`. 

### LineItemInventoryDemandPreviousAttributesInput.inventory_item_id

### LineItemInventoryDemandPreviousAttributesInput.inventory_item_id variant 1

anyOf variant 1: ID of the inventory item each unit of the line item uses..

- Value shape: string. ID of the inventory item each unit of the line item uses. ID of the inventory item each unit of the line item uses. Example: `"invi_01KEZF7C00A6YEM25MTHW2MPZY"`. 

### LineItemInventoryDemandPreviousAttributesInput.inventory_item_id variant 2

anyOf variant 2.

- Value shape: null. ID of the inventory item each unit of the line item uses. 

### LineItemInventoryDemandPreviousAttributesInput.quantity_per_line_item_unit

Declared alternatives: [DeliveryQuoteLineItemResourcePreviousAttributesInput.quantity](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity).

