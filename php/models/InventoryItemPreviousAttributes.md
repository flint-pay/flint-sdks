[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryItemPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `backorder` | Optional | [BackorderPolicyPreviousAttributes](../models/BackorderPolicyPreviousAttributes.md#backorderpolicypreviousattributes) or null | Backorder settings shared by every variant using this inventory item. `backorder`: [declared alternatives](../models/InventoryItemPreviousAttributes.md#inventoryitempreviousattributesbackorder). |
| `barcode` | Optional | string or null | Optional searchable barcode. `barcode`: [declared alternatives](../models/InventoryItemPreviousAttributes.md#inventoryitempreviousattributesbarcode). |
| `created_at` | Optional | string or null | Time the inventory item was created. `created_at`: [declared alternatives](../models/InventoryItemPreviousAttributes.md#inventoryitempreviousattributescreated_at). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id). |
| `inventory_item_id` | Optional | string or null | Stable inventory item ID. `inventory_item_id`: [declared alternatives](../models/InventoryItemPreviousAttributes.md#inventoryitempreviousattributesinventory_item_id). |
| `metadata` | Optional | Map of string or null | Caller-owned metadata. `metadata`: [declared alternatives](../models/DeliveryLocationSetArchivedMerchantEventDataPreviousAttributes.md#deliverylocationsetarchivedmerchanteventdatapreviousattributesmetadata). |
| `name` | Optional | string or null | Merchant-facing inventory item name. `name`: [declared alternatives](../models/InventoryItemPreviousAttributes.md#inventoryitempreviousattributesname). |
| `sku` | Optional | string or null | Optional searchable stock-keeping unit. `sku`: [declared alternatives](../models/InventoryItemPreviousAttributes.md#inventoryitempreviousattributessku). |
| `status` | Optional | string or null | Current inventory item lifecycle status. Values: `"active"`, `"inactive"`, `"archived"`. `status`: [declared alternatives](../models/InventoryItemPreviousAttributes.md#inventoryitempreviousattributesstatus). |
| `updated_at` | Optional | string or null | Time the inventory item last changed. `updated_at`: [declared alternatives](../models/InventoryItemPreviousAttributes.md#inventoryitempreviousattributesupdated_at). |
| `version` | Optional | integer or null | Optimistic-concurrency version for item writes. `version`: [declared alternatives](../models/InventoryItemPreviousAttributes.md#inventoryitempreviousattributesversion). |

### InventoryItemPreviousAttributes.backorder

Backorder settings shared by every variant using this inventory item.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `enabled` | Conditional | boolean or null | Whether this inventory item allows backorders. `enabled`: [declared alternatives](../models/BackorderPolicyPreviousAttributes.md#backorderpolicypreviousattributesenabled). |
| `expected_ship_date` | Conditional | string or null | Expected shipping date. Null when unknown. `expected_ship_date`: [declared alternatives](../models/InventoryItemPreviousAttributes.md#inventoryitempreviousattributesbackorder-variant-1expected_ship_date). |
| `limit_quantity` | Conditional | integer or null | Maximum units on backorder across the item's levels. Null when there is no cap. `limit_quantity`: [declared alternatives](../models/BackorderPolicyPreviousAttributes.md#backorderpolicypreviousattributeslimit_quantity). |

### InventoryItemPreviousAttributes.backorder variant 1

anyOf BackorderPolicyPreviousAttributes.

- Optional: `enabled`, `expected_ship_date`, `limit_quantity`.

### InventoryItemPreviousAttributes.backorder variant 2

anyOf variant 2.

- Undeclared: `enabled`, `expected_ship_date`, `limit_quantity`.
- Value shape: null. Backorder settings shared by every variant using this inventory item. 

### InventoryItemPreviousAttributes.backorder variant 1.enabled

Declared alternatives: [BackorderPolicyPreviousAttributes.enabled](../models/BackorderPolicyPreviousAttributes.md#backorderpolicypreviousattributesenabled).

### InventoryItemPreviousAttributes.backorder variant 1.expected_ship_date

### InventoryItemPreviousAttributes.backorder variant 1.expected_ship_date variant 1

anyOf variant 1: Expected shipping date. Null when unknown..

- Value shape: string. Expected shipping date. Null when unknown. Expected shipping date. Null when unknown. Format: `date`. Example: `"2026-08-02"`. 

### InventoryItemPreviousAttributes.backorder variant 1.expected_ship_date variant 2

anyOf variant 2.

- Value shape: null. Expected shipping date. Null when unknown. 

### InventoryItemPreviousAttributes.backorder variant 1.limit_quantity

Declared alternatives: [BackorderPolicyPreviousAttributes.limit_quantity](../models/BackorderPolicyPreviousAttributes.md#backorderpolicypreviousattributeslimit_quantity).

### InventoryItemPreviousAttributes.barcode

### InventoryItemPreviousAttributes.barcode variant 1

anyOf variant 1: Optional searchable barcode..

- Value shape: string. Optional searchable barcode. 

### InventoryItemPreviousAttributes.barcode variant 2

anyOf variant 2.

- Value shape: null. Optional searchable barcode. 

### InventoryItemPreviousAttributes.created_at

### InventoryItemPreviousAttributes.created_at variant 1

anyOf variant 1: Time the inventory item was created..

- Value shape: string. Time the inventory item was created. Time the inventory item was created. Format: `date-time`. 

### InventoryItemPreviousAttributes.created_at variant 2

anyOf variant 2.

- Value shape: null. Time the inventory item was created. 

### InventoryItemPreviousAttributes.external_reference_id

Declared alternatives: [TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.external_reference_id](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id).

### InventoryItemPreviousAttributes.inventory_item_id

### InventoryItemPreviousAttributes.inventory_item_id variant 1

anyOf variant 1: Stable inventory item ID..

- Value shape: string. Stable inventory item ID. 

### InventoryItemPreviousAttributes.inventory_item_id variant 2

anyOf variant 2.

- Value shape: null. Stable inventory item ID. 

### InventoryItemPreviousAttributes.metadata

Declared alternatives: [DeliveryLocationSetArchivedMerchantEventDataPreviousAttributes.metadata](../models/DeliveryLocationSetArchivedMerchantEventDataPreviousAttributes.md#deliverylocationsetarchivedmerchanteventdatapreviousattributesmetadata).

### InventoryItemPreviousAttributes.name

### InventoryItemPreviousAttributes.name variant 1

anyOf variant 1: Merchant-facing inventory item name..

- Value shape: string. Merchant-facing inventory item name. 

### InventoryItemPreviousAttributes.name variant 2

anyOf variant 2.

- Value shape: null. Merchant-facing inventory item name. 

### InventoryItemPreviousAttributes.sku

### InventoryItemPreviousAttributes.sku variant 1

anyOf variant 1: Optional searchable stock-keeping unit..

- Value shape: string. Optional searchable stock-keeping unit. 

### InventoryItemPreviousAttributes.sku variant 2

anyOf variant 2.

- Value shape: null. Optional searchable stock-keeping unit. 

### InventoryItemPreviousAttributes.status

### InventoryItemPreviousAttributes.status variant 1

anyOf variant 1: Current inventory item lifecycle status..

- Value shape: string. Current inventory item lifecycle status. Values: `"active"`, `"inactive"`, `"archived"`.

### InventoryItemPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Current inventory item lifecycle status. 

### InventoryItemPreviousAttributes.updated_at

### InventoryItemPreviousAttributes.updated_at variant 1

anyOf variant 1: Time the inventory item last changed..

- Value shape: string. Time the inventory item last changed. Time the inventory item last changed. Format: `date-time`. 

### InventoryItemPreviousAttributes.updated_at variant 2

anyOf variant 2.

- Value shape: null. Time the inventory item last changed. 

### InventoryItemPreviousAttributes.version

### InventoryItemPreviousAttributes.version variant 1

anyOf variant 1: Optimistic-concurrency version for item writes..

- Value shape: integer. Optimistic-concurrency version for item writes. Optimistic-concurrency version for item writes. Format: `uint64`. minimum: `1`. 

### InventoryItemPreviousAttributes.version variant 2

anyOf variant 2.

- Value shape: null. Optimistic-concurrency version for item writes. 

