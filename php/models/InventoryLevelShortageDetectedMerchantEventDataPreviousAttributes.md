[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available_quantity` | Optional | integer or null | Derived and never written: on_hand minus unavailable, held, committed, and safety stock, never below 0. See shortage_quantity for the excess. Whole-number quantity; fractional quantities are not supported. `available_quantity`: [declared alternatives](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributesavailable_quantity). |
| `backordered_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `backordered_quantity`: [declared alternatives](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributesbackordered_quantity). |
| `claim_version` | Optional | integer or null | Advances only when held or committed quantities change. `claim_version`: [declared alternatives](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributesclaim_version). |
| `committed_quantity` | Optional | integer or null | Units promised to accepted orders. Still physically present until fulfillment consumes them. Whole-number quantity; fractional quantities are not supported. `committed_quantity`: [declared alternatives](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributescommitted_quantity). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `damaged_quantity` | Optional | integer or null | On-hand units known to be damaged. Not sellable. Whole-number quantity; fractional quantities are not supported. `damaged_quantity`: [declared alternatives](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributesdamaged_quantity). |
| `held_quantity` | Optional | integer or null | Units claimed by an open reservation that has not been committed. Whole-number quantity; fractional quantities are not supported. `held_quantity`: [declared alternatives](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributesheld_quantity). |
| `incoming_quantity` | Optional | integer or null | Units recorded as inbound but not yet on hand. Does not count toward availability. Whole-number quantity; fractional quantities are not supported. `incoming_quantity`: [declared alternatives](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributesincoming_quantity). |
| `inventory_item` | Optional | Alternative shapes (see declared variants) | The inventory item this level belongs to. Present only when the list request asked for expand=inventory_item. `inventory_item`: [declared alternatives](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributesinventory_item). |
| `inventory_item_id` | Optional | string or null | ID of the inventory item the stock is for. `inventory_item_id`: [declared alternatives](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributesinventory_item_id). |
| `inventory_level_id` | Optional | string or null | Unique identifier for this inventory level, prefixed `invl_`. `inventory_level_id`: [declared alternatives](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributesinventory_level_id). |
| `location_id` | Optional | string or null | ID of the Location that holds the stock. `location_id`: [declared alternatives](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributeslocation_id). |
| `on_hand_quantity` | Optional | integer or null | Units physically present at the Location, in any condition. Whole-number quantity; fractional quantities are not supported. `on_hand_quantity`: [declared alternatives](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributeson_hand_quantity). |
| `physical_version` | Optional | integer or null | Advances only when on-hand or condition quantities change. `physical_version`: [declared alternatives](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributesphysical_version). |
| `quality_control_quantity` | Optional | integer or null | On-hand units awaiting inspection. Not sellable. Whole-number quantity; fractional quantities are not supported. `quality_control_quantity`: [declared alternatives](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributesquality_control_quantity). |
| `quarantined_quantity` | Optional | integer or null | On-hand units isolated for review. Not sellable. Whole-number quantity; fractional quantities are not supported. `quarantined_quantity`: [declared alternatives](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributesquarantined_quantity). |
| `safety_stock_quantity` | Optional | integer or null | Buffer withheld from allocation. Change it with PATCH /v1/inventory-levels/{inventory_level_id}. Whole-number quantity; fractional quantities are not supported. `safety_stock_quantity`: [declared alternatives](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributessafety_stock_quantity). |
| `shortage_quantity` | Optional | integer or null | Derived: claims exceeding sellable physical stock. Positive only after stock is lost, damaged, or corrected down. Whole-number quantity; fractional quantities are not supported. `shortage_quantity`: [declared alternatives](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributesshortage_quantity). |
| `unavailable_on_hand_quantity` | Optional | integer or null | Derived: quality_control + damaged + quarantined. Whole-number quantity; fractional quantities are not supported. `unavailable_on_hand_quantity`: [declared alternatives](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributesunavailable_on_hand_quantity). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `version` | Optional | integer or null | Changes on every quantity or claim change at this level, including holds and commits. Read it immediately before a PATCH. A level that a counted adjustment creates without a quantity change starts at version 0. `version`: [declared alternatives](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributesversion). |

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.available_quantity

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.available_quantity variant 1

anyOf variant 1: Derived and never written: on_hand minus unavailable, held, committed, and safety stock, never below 0. See shortage_quantity for the excess. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Derived and never written: on_hand minus unavailable, held, committed, and safety stock, never below 0. See shortage_quantity for the excess. Whole-number quantity; fractional quantities are not supported. Derived and never written: on_hand minus unavailable, held, committed, and safety stock, never below 0. See shortage_quantity for the excess. Whole-number quantity; fractional quantities are not supported. Format: `int64`. 

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.available_quantity variant 2

anyOf variant 2.

- Value shape: null. Derived and never written: on_hand minus unavailable, held, committed, and safety stock, never below 0. See shortage_quantity for the excess. Whole-number quantity; fractional quantities are not supported. 

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.backordered_quantity

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.backordered_quantity variant 1

anyOf variant 1: Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Whole-number quantity; fractional quantities are not supported. Whole-number quantity; fractional quantities are not supported. Format: `int64`. minimum: `0`. 

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.backordered_quantity variant 2

anyOf variant 2.

- Value shape: null. Whole-number quantity; fractional quantities are not supported. 

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.claim_version

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.claim_version variant 1

anyOf variant 1: Advances only when held or committed quantities change..

- Value shape: integer. Advances only when held or committed quantities change. Advances only when held or committed quantities change. Format: `int64`. minimum: `0`. 

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.claim_version variant 2

anyOf variant 2.

- Value shape: null. Advances only when held or committed quantities change. 

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.committed_quantity

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.committed_quantity variant 1

anyOf variant 1: Units promised to accepted orders. Still physically present until fulfillment consumes them. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Units promised to accepted orders. Still physically present until fulfillment consumes them. Whole-number quantity; fractional quantities are not supported. Units promised to accepted orders. Still physically present until fulfillment consumes them. Whole-number quantity; fractional quantities are not supported. Format: `int64`. 

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.committed_quantity variant 2

anyOf variant 2.

- Value shape: null. Units promised to accepted orders. Still physically present until fulfillment consumes them. Whole-number quantity; fractional quantities are not supported. 

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.damaged_quantity

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.damaged_quantity variant 1

anyOf variant 1: On-hand units known to be damaged. Not sellable. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. On-hand units known to be damaged. Not sellable. Whole-number quantity; fractional quantities are not supported. On-hand units known to be damaged. Not sellable. Whole-number quantity; fractional quantities are not supported. Format: `int64`. 

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.damaged_quantity variant 2

anyOf variant 2.

- Value shape: null. On-hand units known to be damaged. Not sellable. Whole-number quantity; fractional quantities are not supported. 

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.held_quantity

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.held_quantity variant 1

anyOf variant 1: Units claimed by an open reservation that has not been committed. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Units claimed by an open reservation that has not been committed. Whole-number quantity; fractional quantities are not supported. Units claimed by an open reservation that has not been committed. Whole-number quantity; fractional quantities are not supported. Format: `int64`. 

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.held_quantity variant 2

anyOf variant 2.

- Value shape: null. Units claimed by an open reservation that has not been committed. Whole-number quantity; fractional quantities are not supported. 

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.incoming_quantity

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.incoming_quantity variant 1

anyOf variant 1: Units recorded as inbound but not yet on hand. Does not count toward availability. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Units recorded as inbound but not yet on hand. Does not count toward availability. Whole-number quantity; fractional quantities are not supported. Units recorded as inbound but not yet on hand. Does not count toward availability. Whole-number quantity; fractional quantities are not supported. Format: `int64`. 

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.incoming_quantity variant 2

anyOf variant 2.

- Value shape: null. Units recorded as inbound but not yet on hand. Does not count toward availability. Whole-number quantity; fractional quantities are not supported. 

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.inventory_item

The inventory item this level belongs to. Present only when the list request asked for expand=inventory_item.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `backorder` | Conditional | Alternative shapes (see declared variants) | Backorder settings shared by every variant using this inventory item. `backorder`: [declared alternatives](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributesinventory_item-variant-1backorder). |
| `barcode` | Conditional | string or null | Optional searchable barcode. `barcode`: [declared alternatives](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributesinventory_item-variant-1barcode). |
| `created_at` | Conditional | string or null | Time the inventory item was created. `created_at`: [declared alternatives](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributesinventory_item-variant-1created_at). |
| `external_reference_id` | Conditional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributesinventory_item-variant-1external_reference_id). |
| `inventory_item_id` | Conditional | string or null | Stable inventory item ID. `inventory_item_id`: [declared alternatives](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributesinventory_item-variant-1inventory_item_id). |
| `metadata` | Conditional | Map of string or null | Caller-owned metadata. `metadata`: [declared alternatives](../models/DeliveryLocationSetArchivedMerchantEventDataPreviousAttributes.md#deliverylocationsetarchivedmerchanteventdatapreviousattributesmetadata). |
| `name` | Conditional | string or null | Merchant-facing inventory item name. `name`: [declared alternatives](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributesinventory_item-variant-1name). |
| `sku` | Conditional | string or null | Optional searchable stock-keeping unit. `sku`: [declared alternatives](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributesinventory_item-variant-1sku). |
| `status` | Conditional | string or null | Current inventory item lifecycle status. Values: `"active"`, `"inactive"`, `"archived"`. `status`: [declared alternatives](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributesinventory_item-variant-1status). |
| `updated_at` | Conditional | string or null | Time the inventory item last changed. `updated_at`: [declared alternatives](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributesinventory_item-variant-1updated_at). |
| `version` | Conditional | integer or null | Optimistic-concurrency version for item writes. `version`: [declared alternatives](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributesinventory_item-variant-1version). |

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.inventory_item variant 1

anyOf InventoryItemPreviousAttributes.

- Optional: `backorder`, `barcode`, `created_at`, `external_reference_id`, `inventory_item_id`, `metadata`, `name`, `sku`, `status`, `updated_at`, `version`.

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.inventory_item variant 2

anyOf variant 2.

- Undeclared: `backorder`, `barcode`, `created_at`, `external_reference_id`, `inventory_item_id`, `metadata`, `name`, `sku`, `status`, `updated_at`, `version`.
- Value shape: null. The inventory item this level belongs to. Present only when the list request asked for expand=inventory_item. 

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.inventory_item variant 1.backorder

Backorder settings shared by every variant using this inventory item.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `enabled` | Conditional | boolean or null | Whether this inventory item allows backorders. `enabled`: [declared alternatives](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributesinventory_item-variant-1backorder-variant-1enabled). |
| `expected_ship_date` | Conditional | string or null or null | Expected shipping date. Null when unknown. `expected_ship_date`: [declared alternatives](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributesinventory_item-variant-1backorder-variant-1expected_ship_date). |
| `limit_quantity` | Conditional | integer or null or null | Maximum units on backorder across the item's levels. Null when there is no cap. `limit_quantity`: [declared alternatives](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributesinventory_item-variant-1backorder-variant-1limit_quantity). |

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.inventory_item variant 1.backorder variant 1

anyOf BackorderPolicyPreviousAttributes.

- Optional: `enabled`, `expected_ship_date`, `limit_quantity`.

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.inventory_item variant 1.backorder variant 2

anyOf variant 2.

- Undeclared: `enabled`, `expected_ship_date`, `limit_quantity`.
- Value shape: null. Backorder settings shared by every variant using this inventory item. 

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.inventory_item variant 1.backorder variant 1.enabled

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.inventory_item variant 1.backorder variant 1.enabled variant 1

anyOf variant 1: Whether this inventory item allows backorders..

- Value shape: boolean. Whether this inventory item allows backorders. 

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.inventory_item variant 1.backorder variant 1.enabled variant 2

anyOf variant 2.

- Value shape: null. Whether this inventory item allows backorders. 

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.inventory_item variant 1.backorder variant 1.expected_ship_date

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.inventory_item variant 1.backorder variant 1.expected_ship_date variant 1

anyOf variant 1: Expected shipping date. Null when unknown..

- Value shape: (string or null). Expected shipping date. Null when unknown. Expected shipping date. Null when unknown. Format: `date`. Example: `"2026-08-02"`. 

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.inventory_item variant 1.backorder variant 1.expected_ship_date variant 2

anyOf variant 2.

- Value shape: null. Expected shipping date. Null when unknown. 

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.inventory_item variant 1.backorder variant 1.limit_quantity

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.inventory_item variant 1.backorder variant 1.limit_quantity variant 1

anyOf variant 1: Maximum units on backorder across the item's levels. Null when there is no cap..

- Value shape: (integer or null). Maximum units on backorder across the item's levels. Null when there is no cap. Maximum units on backorder across the item's levels. Null when there is no cap. Format: `int64`. minimum: `1`. maximum: `9007199254740991`. 

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.inventory_item variant 1.backorder variant 1.limit_quantity variant 2

anyOf variant 2.

- Value shape: null. Maximum units on backorder across the item's levels. Null when there is no cap. 

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.inventory_item variant 1.barcode

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.inventory_item variant 1.barcode variant 1

anyOf variant 1: Optional searchable barcode..

- Value shape: string. Optional searchable barcode. 

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.inventory_item variant 1.barcode variant 2

anyOf variant 2.

- Value shape: null. Optional searchable barcode. 

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.inventory_item variant 1.created_at

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.inventory_item variant 1.created_at variant 1

anyOf variant 1: Time the inventory item was created..

- Value shape: string. Time the inventory item was created. Time the inventory item was created. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.inventory_item variant 1.created_at variant 2

anyOf variant 2.

- Value shape: null. Time the inventory item was created. 

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.inventory_item variant 1.external_reference_id

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.inventory_item variant 1.external_reference_id variant 1

anyOf variant 1: Caller-owned identifier for this resource in an external system..

- Value shape: string. Caller-owned identifier for this resource in an external system. Caller-owned identifier for this resource in an external system. maxLength: `255`. Example: `"warehouse-1842"`. 

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.inventory_item variant 1.external_reference_id variant 2

anyOf variant 2.

- Value shape: null. Caller-owned identifier for this resource in an external system. 

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.inventory_item variant 1.inventory_item_id

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.inventory_item variant 1.inventory_item_id variant 1

anyOf variant 1: Stable inventory item ID..

- Value shape: string. Stable inventory item ID. Stable inventory item ID. Example: `"invi_01KEZF7C00A6YEM25MTHW2MPZY"`. 

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.inventory_item variant 1.inventory_item_id variant 2

anyOf variant 2.

- Value shape: null. Stable inventory item ID. 

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.inventory_item variant 1.metadata

Declared alternatives: [DeliveryLocationSetArchivedMerchantEventDataPreviousAttributes.metadata](../models/DeliveryLocationSetArchivedMerchantEventDataPreviousAttributes.md#deliverylocationsetarchivedmerchanteventdatapreviousattributesmetadata).

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.inventory_item variant 1.name

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.inventory_item variant 1.name variant 1

anyOf variant 1: Merchant-facing inventory item name..

- Value shape: string. Merchant-facing inventory item name. 

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.inventory_item variant 1.name variant 2

anyOf variant 2.

- Value shape: null. Merchant-facing inventory item name. 

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.inventory_item variant 1.sku

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.inventory_item variant 1.sku variant 1

anyOf variant 1: Optional searchable stock-keeping unit..

- Value shape: string. Optional searchable stock-keeping unit. 

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.inventory_item variant 1.sku variant 2

anyOf variant 2.

- Value shape: null. Optional searchable stock-keeping unit. 

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.inventory_item variant 1.status

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.inventory_item variant 1.status variant 1

anyOf variant 1: Current inventory item lifecycle status..

- Value shape: string. Current inventory item lifecycle status. Values: `"active"`, `"inactive"`, `"archived"`.

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.inventory_item variant 1.status variant 2

anyOf variant 2.

- Value shape: null. Current inventory item lifecycle status. 

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.inventory_item variant 1.updated_at

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.inventory_item variant 1.updated_at variant 1

anyOf variant 1: Time the inventory item last changed..

- Value shape: string. Time the inventory item last changed. Time the inventory item last changed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.inventory_item variant 1.updated_at variant 2

anyOf variant 2.

- Value shape: null. Time the inventory item last changed. 

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.inventory_item variant 1.version

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.inventory_item variant 1.version variant 1

anyOf variant 1: Optimistic-concurrency version for item writes..

- Value shape: integer. Optimistic-concurrency version for item writes. Optimistic-concurrency version for item writes. Format: `uint64`. minimum: `1`. 

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.inventory_item variant 1.version variant 2

anyOf variant 2.

- Value shape: null. Optimistic-concurrency version for item writes. 

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.inventory_item_id

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.inventory_item_id variant 1

anyOf variant 1: ID of the inventory item the stock is for..

- Value shape: string. ID of the inventory item the stock is for. 

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.inventory_item_id variant 2

anyOf variant 2.

- Value shape: null. ID of the inventory item the stock is for. 

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.inventory_level_id

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.inventory_level_id variant 1

anyOf variant 1: Unique identifier for this inventory level, prefixed `invl_`..

- Value shape: string. Unique identifier for this inventory level, prefixed `invl_`. 

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.inventory_level_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this inventory level, prefixed `invl_`. 

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.location_id

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.location_id variant 1

anyOf variant 1: ID of the Location that holds the stock..

- Value shape: string. ID of the Location that holds the stock. 

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.location_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Location that holds the stock. 

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.on_hand_quantity

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.on_hand_quantity variant 1

anyOf variant 1: Units physically present at the Location, in any condition. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Units physically present at the Location, in any condition. Whole-number quantity; fractional quantities are not supported. Units physically present at the Location, in any condition. Whole-number quantity; fractional quantities are not supported. Format: `int64`. 

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.on_hand_quantity variant 2

anyOf variant 2.

- Value shape: null. Units physically present at the Location, in any condition. Whole-number quantity; fractional quantities are not supported. 

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.physical_version

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.physical_version variant 1

anyOf variant 1: Advances only when on-hand or condition quantities change..

- Value shape: integer. Advances only when on-hand or condition quantities change. Advances only when on-hand or condition quantities change. Format: `int64`. minimum: `0`. 

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.physical_version variant 2

anyOf variant 2.

- Value shape: null. Advances only when on-hand or condition quantities change. 

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.quality_control_quantity

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.quality_control_quantity variant 1

anyOf variant 1: On-hand units awaiting inspection. Not sellable. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. On-hand units awaiting inspection. Not sellable. Whole-number quantity; fractional quantities are not supported. On-hand units awaiting inspection. Not sellable. Whole-number quantity; fractional quantities are not supported. Format: `int64`. 

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.quality_control_quantity variant 2

anyOf variant 2.

- Value shape: null. On-hand units awaiting inspection. Not sellable. Whole-number quantity; fractional quantities are not supported. 

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.quarantined_quantity

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.quarantined_quantity variant 1

anyOf variant 1: On-hand units isolated for review. Not sellable. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. On-hand units isolated for review. Not sellable. Whole-number quantity; fractional quantities are not supported. On-hand units isolated for review. Not sellable. Whole-number quantity; fractional quantities are not supported. Format: `int64`. 

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.quarantined_quantity variant 2

anyOf variant 2.

- Value shape: null. On-hand units isolated for review. Not sellable. Whole-number quantity; fractional quantities are not supported. 

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.safety_stock_quantity

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.safety_stock_quantity variant 1

anyOf variant 1: Buffer withheld from allocation. Change it with PATCH /v1/inventory-levels/{inventory_level_id}. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Buffer withheld from allocation. Change it with PATCH /v1/inventory-levels/{inventory_level_id}. Whole-number quantity; fractional quantities are not supported. Buffer withheld from allocation. Change it with PATCH /v1/inventory-levels/{inventory_level_id}. Whole-number quantity; fractional quantities are not supported. Format: `int64`. 

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.safety_stock_quantity variant 2

anyOf variant 2.

- Value shape: null. Buffer withheld from allocation. Change it with PATCH /v1/inventory-levels/{inventory_level_id}. Whole-number quantity; fractional quantities are not supported. 

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.shortage_quantity

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.shortage_quantity variant 1

anyOf variant 1: Derived: claims exceeding sellable physical stock. Positive only after stock is lost, damaged, or corrected down. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Derived: claims exceeding sellable physical stock. Positive only after stock is lost, damaged, or corrected down. Whole-number quantity; fractional quantities are not supported. Derived: claims exceeding sellable physical stock. Positive only after stock is lost, damaged, or corrected down. Whole-number quantity; fractional quantities are not supported. Format: `int64`. 

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.shortage_quantity variant 2

anyOf variant 2.

- Value shape: null. Derived: claims exceeding sellable physical stock. Positive only after stock is lost, damaged, or corrected down. Whole-number quantity; fractional quantities are not supported. 

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.unavailable_on_hand_quantity

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.unavailable_on_hand_quantity variant 1

anyOf variant 1: Derived: quality_control + damaged + quarantined. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Derived: quality_control + damaged + quarantined. Whole-number quantity; fractional quantities are not supported. Derived: quality_control + damaged + quarantined. Whole-number quantity; fractional quantities are not supported. Format: `int64`. 

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.unavailable_on_hand_quantity variant 2

anyOf variant 2.

- Value shape: null. Derived: quality_control + damaged + quarantined. Whole-number quantity; fractional quantities are not supported. 

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.version

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.version variant 1

anyOf variant 1: Changes on every quantity or claim change at this level, including holds and commits. Read it immediately before a PATCH. A level that a counted adjustment creates without a quantity change starts at version 0..

- Value shape: integer. Changes on every quantity or claim change at this level, including holds and commits. Read it immediately before a PATCH. A level that a counted adjustment creates without a quantity change starts at version 0. Changes on every quantity or claim change at this level, including holds and commits. Read it immediately before a PATCH. A level that a counted adjustment creates without a quantity change starts at version 0. Format: `int64`. minimum: `0`. 

### InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.version variant 2

anyOf variant 2.

- Value shape: null. Changes on every quantity or claim change at this level, including holds and commits. Read it immediately before a PATCH. A level that a counted adjustment creates without a quantity change starts at version 0. 

