[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryItemPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `backorder` | Optional | [BackorderPolicyPreviousAttributesInput](../models/BackorderPolicyPreviousAttributesInput.md#backorderpolicypreviousattributesinput) or null | Backorder settings shared by every variant using this inventory item. |
| `barcode` | Optional | string or null | Optional searchable barcode. `barcode`: [declared alternatives](../models/InventoryItemPreviousAttributesInput.md#inventoryitempreviousattributesinputbarcode). |
| `created_at` | Optional | string or null | Time the inventory item was created. `created_at`: [declared alternatives](../models/InventoryItemPreviousAttributesInput.md#inventoryitempreviousattributesinputcreated_at). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesexternal_reference_id). |
| `inventory_item_id` | Optional | string or null | Stable inventory item ID. `inventory_item_id`: [declared alternatives](../models/InventoryItemPreviousAttributesInput.md#inventoryitempreviousattributesinputinventory_item_id). |
| `metadata` | Optional | [MetadataMapPreviousAttributesInput](../models/MetadataMapPreviousAttributesInput.md#metadatamappreviousattributesinput) or null | Caller-owned metadata. |
| `name` | Optional | string or null | Merchant-facing inventory item name. `name`: [declared alternatives](../models/InventoryItemPreviousAttributesInput.md#inventoryitempreviousattributesinputname). |
| `sku` | Optional | string or null | Optional searchable stock-keeping unit. `sku`: [declared alternatives](../models/InventoryItemPreviousAttributesInput.md#inventoryitempreviousattributesinputsku). |
| `status` | Optional | string or null | Current inventory item lifecycle status. Values: `"active"`, `"inactive"`, `"archived"`. `status`: [declared alternatives](../models/InventoryItemPreviousAttributesInput.md#inventoryitempreviousattributesinputstatus). |
| `updated_at` | Optional | string or null | Time the inventory item last changed. `updated_at`: [declared alternatives](../models/InventoryItemPreviousAttributesInput.md#inventoryitempreviousattributesinputupdated_at). |
| `version` | Optional | integer or null | Optimistic-concurrency version for item writes. `version`: [declared alternatives](../models/InventoryItemPreviousAttributesInput.md#inventoryitempreviousattributesinputversion). |

### InventoryItemPreviousAttributesInput.barcode

### InventoryItemPreviousAttributesInput.barcode variant 1

anyOf variant 1: Optional searchable barcode..

- Value shape: string. Optional searchable barcode. 

### InventoryItemPreviousAttributesInput.barcode variant 2

anyOf variant 2.

- Value shape: null. Optional searchable barcode. 

### InventoryItemPreviousAttributesInput.created_at

### InventoryItemPreviousAttributesInput.created_at variant 1

anyOf variant 1: Time the inventory item was created..

- Value shape: string. Time the inventory item was created. Time the inventory item was created. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### InventoryItemPreviousAttributesInput.created_at variant 2

anyOf variant 2.

- Value shape: null. Time the inventory item was created. 

### InventoryItemPreviousAttributesInput.external_reference_id

Declared alternatives: [BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.external_reference_id](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesexternal_reference_id).

### InventoryItemPreviousAttributesInput.inventory_item_id

### InventoryItemPreviousAttributesInput.inventory_item_id variant 1

anyOf variant 1: Stable inventory item ID..

- Value shape: string. Stable inventory item ID. Stable inventory item ID. Example: `"invi_01KEZF7C00A6YEM25MTHW2MPZY"`. 

### InventoryItemPreviousAttributesInput.inventory_item_id variant 2

anyOf variant 2.

- Value shape: null. Stable inventory item ID. 

### InventoryItemPreviousAttributesInput.name

### InventoryItemPreviousAttributesInput.name variant 1

anyOf variant 1: Merchant-facing inventory item name..

- Value shape: string. Merchant-facing inventory item name. 

### InventoryItemPreviousAttributesInput.name variant 2

anyOf variant 2.

- Value shape: null. Merchant-facing inventory item name. 

### InventoryItemPreviousAttributesInput.sku

### InventoryItemPreviousAttributesInput.sku variant 1

anyOf variant 1: Optional searchable stock-keeping unit..

- Value shape: string. Optional searchable stock-keeping unit. 

### InventoryItemPreviousAttributesInput.sku variant 2

anyOf variant 2.

- Value shape: null. Optional searchable stock-keeping unit. 

### InventoryItemPreviousAttributesInput.status

### InventoryItemPreviousAttributesInput.status variant 1

anyOf variant 1: Current inventory item lifecycle status..

- Value shape: string. Current inventory item lifecycle status. Values: `"active"`, `"inactive"`, `"archived"`.

### InventoryItemPreviousAttributesInput.status variant 2

anyOf variant 2.

- Value shape: null. Current inventory item lifecycle status. 

### InventoryItemPreviousAttributesInput.updated_at

### InventoryItemPreviousAttributesInput.updated_at variant 1

anyOf variant 1: Time the inventory item last changed..

- Value shape: string. Time the inventory item last changed. Time the inventory item last changed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### InventoryItemPreviousAttributesInput.updated_at variant 2

anyOf variant 2.

- Value shape: null. Time the inventory item last changed. 

### InventoryItemPreviousAttributesInput.version

### InventoryItemPreviousAttributesInput.version variant 1

anyOf variant 1: Optimistic-concurrency version for item writes..

- Value shape: integer. Optimistic-concurrency version for item writes. Optimistic-concurrency version for item writes. Format: `uint64`. minimum: `1`. 

### InventoryItemPreviousAttributesInput.version variant 2

anyOf variant 2.

- Value shape: null. Optimistic-concurrency version for item writes. 

