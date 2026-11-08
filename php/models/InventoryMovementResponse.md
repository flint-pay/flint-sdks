[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryMovementResponse

A response containing `InventoryMovement` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [InventoryMovement](../models/InventoryMovement.md#inventorymovement) | Resource, collection, or operation result returned by this request. An immutable record of a single quantity change, including the level state it produced. `data`: [field definitions](../models/InventoryMovementResponse.md#inventorymovementresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### InventoryMovementResponse.data

Resource, collection, or operation result returned by this request. An immutable record of a single quantity change, including the level state it produced.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `backordered_quantity_delta` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `committed_quantity_delta` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `created_by` | Required | [ResourceReference](../models/ResourceReference.md#resourcereference) or null | The credential that recorded this movement. `null` when Flint recorded it on its own, such as an expired hold or a fulfillment handoff. `created_by`: [declared alternatives](../models/InventoryMovementResponse.md#inventorymovementresponsedatacreated_by). |
| `damaged_quantity_delta` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `external_actor_id` | Optional | string | Your identifier for the actor who recorded the event. Don't put secrets in this field. maxLength: `255`. Example: `"warehouse-1842"`. |
| `held_quantity_delta` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `idempotency_key` | Optional | string | The Idempotency-Key of the request that created this resource; on a movement, of the command that wrote it. Omitted when that request had no key. |
| `incoming_quantity_delta` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `inventory_item` | Optional | [InventoryItem](../models/InventoryItem.md#inventoryitem) | The inventory item this movement is about. Present only when the list request asked for expand=inventory_item. A stock-keeping unit that inventory quantities are tracked against. Catalog variants reference an inventory item rather than carrying their own counter. `inventory_item`: [field definitions](../models/InventoryMovementResponse.md#inventorymovementresponsedatainventory_item). |
| `inventory_item_id` | Required | string | ID of the inventory item the stock is for. Example: `"invi_01KEZF7C00A6YEM25MTHW2MPZY"`. |
| `inventory_level_claim_version` | Required | integer | Claim version of the inventory level after this movement. Advances when held or committed quantities change. Format: `int64`. minimum: `0`. |
| `inventory_level_id` | Required | string | ID of the inventory level this movement changed. Example: `"invl_01KEZF7C00H201XZXKRX5KMDDE"`. |
| `inventory_level_physical_version` | Required | integer | Physical version of the inventory level after this movement. Advances when on-hand or condition quantities change. Format: `int64`. minimum: `0`. |
| `inventory_level_version` | Required | integer | Version of the inventory level after this movement. Format: `int64`. minimum: `1`. |
| `inventory_movement_id` | Required | string | Unique identifier for this inventory movement, prefixed `invm_`. Example: `"invm_01KEZF7C00DYPFT9PS0NZY805Z"`. |
| `location_id` | Required | string | ID of the Location that holds the stock. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `note` | Optional | string | Note recorded with the command that wrote this movement. Absent when it had none. |
| `occurred_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `on_hand_quantity_delta` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `quality_control_quantity_delta` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `quarantined_quantity_delta` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `reason` | Optional | string | The adjustment's reason. Present only on adjustment movements; other movement types already describe what happened. Values: `"received"`, `"returned"`, `"sold"`, `"theft"`, `"loss"`, `"condition_changed"`, `"counted"`, `"correction"`. |
| `resulting_inventory_level` | Required | [InventoryLevel](../models/InventoryLevel.md#inventorylevel) | The inventory level as it stood after this movement. The quantity state of one inventory item at one Location. `resulting_inventory_level`: [field definitions](../models/InventoryMovementResponse.md#inventorymovementresponsedataresulting_inventory_level). |
| `return_disposition_id` | Optional | string | ID of the Return disposition whose receipt wrote this movement. Absent on other movements. Example: `"retdsp_01KEZF7C007H87J66PH2EEK1VW"`. |
| `return_id` | Optional | string | ID of the Return whose receipt wrote this movement. Absent on other movements. Example: `"ret_01KEZF7C00PG93650ZKVQNGF7X"`. |
| `safety_stock_quantity_delta` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `source_observation_sequence` | Optional | integer | Format: `int64`. minimum: `0`. |
| `source_reference` | Required | [ResourceReference](../models/ResourceReference.md#resourcereference) | The GET-able resource whose write recorded this movement. A reference to another resource by `resource_type` and `resource_id`. `source_reference`: [field definitions](../models/InventoryMovementResponse.md#inventorymovementresponsedatasource_reference). |
| `source_system` | Required | [InventorySourceSystem](../models/InventorySourceSystem.md#inventorysourcesystem) or null | System the change came from, such as a point-of-sale or warehouse system. `null` when the request named no source system. `source_system`: [declared alternatives](../models/InventoryCountResponse.md#inventorycountresponsedataobservation_provenancesource_system). |
| `type` | Required | string | What caused this movement. Values: [16 declared values](InventoryMovementInput.md#inventorymovementinput-type-values). |

### InventoryMovementResponse.data.created_by

The credential that recorded this movement. `null` when Flint recorded it on its own, such as an expired hold or a fulfillment handoff.

Field definitions: [shared fields](PaymentReviewResponse.md#paymentreviewresponsedataclosed_by).

### InventoryMovementResponse.data.created_by variant 1

anyOf ResourceReference: A reference to another resource by `resource_type` and `resource_id`..

- Required: `resource_id`, `resource_type`.

### InventoryMovementResponse.data.created_by variant 2

anyOf variant 2.

- Undeclared: `resource_id`, `resource_type`.
- Value shape: null. The credential that recorded this movement. `null` when Flint recorded it on its own, such as an expired hold or a fulfillment handoff. 

### InventoryMovementResponse.data.inventory_item

The inventory item this movement is about. Present only when the list request asked for expand=inventory_item. A stock-keeping unit that inventory quantities are tracked against. Catalog variants reference an inventory item rather than carrying their own counter.

Field definitions: [shared fields](InventoryItemResponse.md#inventoryitemresponsedata).

### InventoryMovementResponse.data.inventory_item.backorder

Field definitions: [InventoryItemResponse.data.backorder](../models/InventoryItemResponse.md#inventoryitemresponsedatabackorder).

### InventoryMovementResponse.data.inventory_item.metadata

Field definitions: [CollectInvoiceResponse.data.invoice.metadata](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicemetadata).

### InventoryMovementResponse.data.resulting_inventory_level

The inventory level as it stood after this movement. The quantity state of one inventory item at one Location.

Field definitions: [shared fields](InventoryLevelResponse.md#inventorylevelresponsedata).

### InventoryMovementResponse.data.resulting_inventory_level.inventory_item

Field definitions: [InventoryLevelResponse.data.inventory_item](../models/InventoryLevelResponse.md#inventorylevelresponsedatainventory_item).

### InventoryMovementResponse.data.source_reference

The GET-able resource whose write recorded this movement. A reference to another resource by `resource_type` and `resource_id`.

Field definitions: [shared fields](ResourceReferenceInput.md#resourcereferenceinput).

### InventoryMovementResponse.data.source_system

Declared alternatives: [InventoryCountResponse.data.observation_provenance.source_system](../models/InventoryCountResponse.md#inventorycountresponsedataobservation_provenancesource_system).

### InventoryMovementResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

