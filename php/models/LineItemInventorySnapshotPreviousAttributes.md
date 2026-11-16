[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## LineItemInventorySnapshotPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `demands` | Optional | Array of [LineItemInventoryDemandPreviousAttributes](../models/LineItemInventoryDemandPreviousAttributes.md#lineiteminventorydemandpreviousattributes) or null | The inventory items and quantities each unit of the line item uses. `demands`: [declared alternatives](../models/LineItemInventorySnapshotPreviousAttributes.md#lineiteminventorysnapshotpreviousattributesdemands). |
| `inventory_tracking` | Optional | string or null | Whether the line item draws on tracked stock. Values: `"not_tracked"`, `"tracked"`. `inventory_tracking`: [declared alternatives](../models/LineItemInventorySnapshotPreviousAttributes.md#lineiteminventorysnapshotpreviousattributesinventory_tracking). |

### LineItemInventorySnapshotPreviousAttributes.demands

### LineItemInventorySnapshotPreviousAttributes.demands variant 1

anyOf variant 1: The inventory items and quantities each unit of the line item uses..

- Value shape: Array of [LineItemInventoryDemandPreviousAttributes](../models/LineItemInventoryDemandPreviousAttributes.md#lineiteminventorydemandpreviousattributes). The inventory items and quantities each unit of the line item uses. 

### LineItemInventorySnapshotPreviousAttributes.demands variant 2

anyOf variant 2.

- Value shape: null. The inventory items and quantities each unit of the line item uses. 

### LineItemInventorySnapshotPreviousAttributes.demands variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_component_id` | Optional | string or null | ID of the bundle component this demand comes from. Present only on a line item that sells a bundle. `bundle_component_id`: [declared alternatives](../models/LineItemInventorySnapshotPreviousAttributes.md#lineiteminventorysnapshotpreviousattributesdemands-variant-1-fields-1bundle_component_id). |
| `component_snapshot_id` | Optional | string or null | Identifier of the bundle component as it was frozen on the line item. Present only when the bundle component has one. Inventory reservations for the demand use it in place of `bundle_component_id`. `component_snapshot_id`: [declared alternatives](../models/LineItemInventorySnapshotPreviousAttributes.md#lineiteminventorysnapshotpreviousattributesdemands-variant-1-fields-1component_snapshot_id). |
| `inventory_item_id` | Optional | string or null | ID of the inventory item each unit of the line item uses. `inventory_item_id`: [declared alternatives](../models/LineItemInventorySnapshotPreviousAttributes.md#lineiteminventorysnapshotpreviousattributesdemands-variant-1-fields-1inventory_item_id). |
| `quantity_per_line_item_unit` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `quantity_per_line_item_unit`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |

### LineItemInventorySnapshotPreviousAttributes.demands variant 1.[] fields 1.bundle_component_id

### LineItemInventorySnapshotPreviousAttributes.demands variant 1.[] fields 1.bundle_component_id variant 1

anyOf variant 1: ID of the bundle component this demand comes from. Present only on a line item that sells a bundle..

- Value shape: string. ID of the bundle component this demand comes from. Present only on a line item that sells a bundle. ID of the bundle component this demand comes from. Present only on a line item that sells a bundle. Example: `"bunc_01KEZF7C00CQASEZGAPEANTGD1"`. 

### LineItemInventorySnapshotPreviousAttributes.demands variant 1.[] fields 1.bundle_component_id variant 2

anyOf variant 2.

- Value shape: null. ID of the bundle component this demand comes from. Present only on a line item that sells a bundle. 

### LineItemInventorySnapshotPreviousAttributes.demands variant 1.[] fields 1.component_snapshot_id

### LineItemInventorySnapshotPreviousAttributes.demands variant 1.[] fields 1.component_snapshot_id variant 1

anyOf variant 1: Identifier of the bundle component as it was frozen on the line item. Present only when the bundle component has one. Inventory reservations for the demand use it in place of `bundle_component_id`..

- Value shape: string. Identifier of the bundle component as it was frozen on the line item. Present only when the bundle component has one. Inventory reservations for the demand use it in place of `bundle_component_id`. Identifier of the bundle component as it was frozen on the line item. Present only when the bundle component has one. Inventory reservations for the demand use it in place of `bundle_component_id`. Example: `"component-1842"`. 

### LineItemInventorySnapshotPreviousAttributes.demands variant 1.[] fields 1.component_snapshot_id variant 2

anyOf variant 2.

- Value shape: null. Identifier of the bundle component as it was frozen on the line item. Present only when the bundle component has one. Inventory reservations for the demand use it in place of `bundle_component_id`. 

### LineItemInventorySnapshotPreviousAttributes.demands variant 1.[] fields 1.inventory_item_id

### LineItemInventorySnapshotPreviousAttributes.demands variant 1.[] fields 1.inventory_item_id variant 1

anyOf variant 1: ID of the inventory item each unit of the line item uses..

- Value shape: string. ID of the inventory item each unit of the line item uses. ID of the inventory item each unit of the line item uses. Example: `"invi_01KEZF7C00A6YEM25MTHW2MPZY"`. 

### LineItemInventorySnapshotPreviousAttributes.demands variant 1.[] fields 1.inventory_item_id variant 2

anyOf variant 2.

- Value shape: null. ID of the inventory item each unit of the line item uses. 

### LineItemInventorySnapshotPreviousAttributes.demands variant 1.[] fields 1.quantity_per_line_item_unit

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### LineItemInventorySnapshotPreviousAttributes.inventory_tracking

### LineItemInventorySnapshotPreviousAttributes.inventory_tracking variant 1

anyOf variant 1: Whether the line item draws on tracked stock..

- Value shape: string. Whether the line item draws on tracked stock. Values: `"not_tracked"`, `"tracked"`.

### LineItemInventorySnapshotPreviousAttributes.inventory_tracking variant 2

anyOf variant 2.

- Value shape: null. Whether the line item draws on tracked stock. 

