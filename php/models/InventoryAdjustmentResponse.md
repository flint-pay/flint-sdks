[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryAdjustmentResponse

A response containing `InventoryAdjustment` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [InventoryAdjustment](../models/InventoryAdjustment.md#inventoryadjustment) | Resource, collection, or operation result returned by this request. A recorded stock change with its reason and the quantity changes Flint computed. `data`: [field definitions](../models/InventoryAdjustmentResponse.md#inventoryadjustmentresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### InventoryAdjustmentResponse.data

Resource, collection, or operation result returned by this request. A recorded stock change with its reason and the quantity changes Flint computed.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `external_actor_id` | Optional | string | Your identifier for the actor who recorded the event. Don't put secrets in this field. maxLength: `255`. Example: `"warehouse-1842"`. |
| `idempotency_key` | Optional | string | The Idempotency-Key of the request that created this resource; on a movement, of the command that wrote it. Omitted when that request had no key. |
| `inventory_adjustment_id` | Required | string | Unique identifier for this inventory adjustment, prefixed `invadj_`. Example: `"invadj_01KEZF7C00HFCAS32T4NVHX75M"`. |
| `lines` | Required | Array of [InventoryAdjustmentLine](../models/InventoryAdjustmentLine.md#inventoryadjustmentline) | Stock changes, one for each inventory item and Location, from 1 to 100 lines. `lines[]`: [field definitions](../models/InventoryAdjustmentResponse.md#inventoryadjustmentresponsedatalines). |
| `note` | Optional | string | Free-text note explaining the change. Required when `reason` is `correction`. |
| `occurred_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `reason` | Required | string | Why the stock changed. It decides which fields each line takes. Values: `"received"`, `"returned"`, `"sold"`, `"theft"`, `"loss"`, `"condition_changed"`, `"counted"`, `"correction"`. |
| `source_system` | Required | [InventorySourceSystem](../models/InventorySourceSystem.md#inventorysourcesystem) or null | System the change came from, such as a point-of-sale or warehouse system. `null` when the request named no source system. `source_system`: [declared alternatives](../models/InventoryCountResponse.md#inventorycountresponsedataobservation_provenancesource_system). |

### InventoryAdjustmentResponse.data.lines[]

One line of an inventory adjustment, with the item, Location, movement written, and the change in on-hand and each non-sellable quantity.

Field definitions: [shared fields](InventoryAdjustmentLineInput.md#inventoryadjustmentlineinput).

### InventoryAdjustmentResponse.data.source_system

Declared alternatives: [InventoryCountResponse.data.observation_provenance.source_system](../models/InventoryCountResponse.md#inventorycountresponsedataobservation_provenancesource_system).

### InventoryAdjustmentResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

