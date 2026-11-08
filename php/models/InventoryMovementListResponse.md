[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryMovementListResponse

A page of `InventoryMovement` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [InventoryMovement](../models/InventoryMovement.md#inventorymovement) | Resource, collection, or operation result returned by this request. `data[]`: [field definitions](../models/InventoryMovementListResponse.md#inventorymovementlistresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `next_page_token` | Optional | string | Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no next page. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### InventoryMovementListResponse.data[]

An immutable record of a single quantity change, including the level state it produced.

Field definitions: [shared fields](InventoryMovementResponse.md#inventorymovementresponsedata).

### InventoryMovementListResponse.data[].created_by

Declared alternatives: [InventoryMovementResponse.data.created_by](../models/InventoryMovementResponse.md#inventorymovementresponsedatacreated_by).

### InventoryMovementListResponse.data[].inventory_item

Field definitions: [InventoryMovementResponse.data.inventory_item](../models/InventoryMovementResponse.md#inventorymovementresponsedatainventory_item).

### InventoryMovementListResponse.data[].resulting_inventory_level

Field definitions: [InventoryMovementResponse.data.resulting_inventory_level](../models/InventoryMovementResponse.md#inventorymovementresponsedataresulting_inventory_level).

### InventoryMovementListResponse.data[].source_reference

Field definitions: [InventoryMovementResponse.data.source_reference](../models/InventoryMovementResponse.md#inventorymovementresponsedatasource_reference).

### InventoryMovementListResponse.data[].source_system

Declared alternatives: [InventoryCountResponse.data.observation_provenance.source_system](../models/InventoryCountResponse.md#inventorycountresponsedataobservation_provenancesource_system).

### InventoryMovementListResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

