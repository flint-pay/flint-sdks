[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryItemPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `backorder` | Optional | [BackorderPolicyPreviousAttributes](../models/BackorderPolicyPreviousAttributes.md#backorderpolicypreviousattributes) or null | Backorder settings shared by every variant using this inventory item. |
| `barcode` | Optional | string or null | Optional searchable barcode. `barcode`: [declared alternatives](../models/InventoryItemPreviousAttributes.md#inventoryitempreviousattributesbarcode). |
| `created_at` | Optional | string or null | Time the inventory item was created. `created_at`: [declared alternatives](../models/InventoryItemPreviousAttributes.md#inventoryitempreviousattributescreated_at). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesexternal_reference_id). |
| `inventory_item_id` | Optional | string or null | Stable inventory item ID. `inventory_item_id`: [declared alternatives](../models/InventoryItemPreviousAttributes.md#inventoryitempreviousattributesinventory_item_id). |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) or null | Caller-owned metadata. `metadata`: [declared alternatives](../models/DeliveryLocationSetArchivedInstalledMerchantsEvent.md#deliverylocationsetarchivedinstalledmerchantseventdataprevious_attributesmetadata). |
| `name` | Optional | string or null | Merchant-facing inventory item name. `name`: [declared alternatives](../models/InventoryItemPreviousAttributes.md#inventoryitempreviousattributesname). |
| `sku` | Optional | string or null | Optional searchable stock-keeping unit. `sku`: [declared alternatives](../models/InventoryItemPreviousAttributes.md#inventoryitempreviousattributessku). |
| `status` | Optional | string or null | Current inventory item lifecycle status. Values: `"active"`, `"inactive"`, `"archived"`. `status`: [declared alternatives](../models/InventoryItemPreviousAttributes.md#inventoryitempreviousattributesstatus). |
| `updated_at` | Optional | string or null | Time the inventory item last changed. `updated_at`: [declared alternatives](../models/InventoryItemPreviousAttributes.md#inventoryitempreviousattributesupdated_at). |
| `version` | Optional | integer or null | Optimistic-concurrency version for item writes. `version`: [declared alternatives](../models/InventoryItemPreviousAttributes.md#inventoryitempreviousattributesversion). |

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

- Value shape: string. Time the inventory item was created. Time the inventory item was created. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### InventoryItemPreviousAttributes.created_at variant 2

anyOf variant 2.

- Value shape: null. Time the inventory item was created. 

### InventoryItemPreviousAttributes.external_reference_id

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.data.previous_attributes.external_reference_id](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesexternal_reference_id).

### InventoryItemPreviousAttributes.inventory_item_id

### InventoryItemPreviousAttributes.inventory_item_id variant 1

anyOf variant 1: Stable inventory item ID..

- Value shape: string. Stable inventory item ID. Stable inventory item ID. Example: `"invi_01KEZF7C00A6YEM25MTHW2MPZY"`. 

### InventoryItemPreviousAttributes.inventory_item_id variant 2

anyOf variant 2.

- Value shape: null. Stable inventory item ID. 

### InventoryItemPreviousAttributes.metadata

Declared alternatives: [DeliveryLocationSetArchivedInstalledMerchantsEvent.data.previous_attributes.metadata](../models/DeliveryLocationSetArchivedInstalledMerchantsEvent.md#deliverylocationsetarchivedinstalledmerchantseventdataprevious_attributesmetadata).

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

- Value shape: string. Time the inventory item last changed. Time the inventory item last changed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

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

