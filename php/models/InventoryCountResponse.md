[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryCountResponse

A response containing `InventoryCount` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [InventoryCount](../models/InventoryCount.md#inventorycount) | Resource, collection, or operation result returned by this request. A physical count used to reconcile stock. `data`: [field definitions](../models/InventoryCountResponse.md#inventorycountresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### InventoryCountResponse.data

Resource, collection, or operation result returned by this request. A physical count used to reconcile stock.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `applied_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `idempotency_key` | Optional | string | The Idempotency-Key of the request that created this resource; on a movement, of the command that wrote it. Omitted when that request had no key. |
| `inventory_count_id` | Required | string | Unique identifier for this inventory count, prefixed `invc_`. Example: `"invc_01KEZF7C00B47NXRE3ET37QQ59"`. |
| `lines` | Required | Array of [InventoryCountLine](../models/InventoryCountLine.md#inventorycountline) | Count lines, one for each inventory item being counted. `lines[]`: [field definitions](../models/InventoryCountResponse.md#inventorycountresponsedatalines). |
| `location_id` | Required | string | ID of the Location whose stock is counted. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `observation_provenance` | Optional | [InventoryCountObservationProvenance](../models/InventoryCountObservationProvenance.md#inventorycountobservationprovenance) | Source system, actor, and time reported with the count's observations. Where an inventory count came from: the source system, an external actor ID, and when the event occurred. `observation_provenance`: [field definitions](../models/InventoryCountResponse.md#inventorycountresponsedataobservation_provenance). |
| `status` | Required | string | Values: `"draft"`, `"applied"`, `"canceled"`. |
| `supported_actions` | Required | Array of string | Actions that can change this count now. A draft can be canceled, and applied once every line has an observation. Empty after the count is applied or canceled. Items values: `"apply"`, `"cancel"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: `uint64`. minimum: `1`. |

### InventoryCountResponse.data.lines[]

One item's line in an inventory count, with the quantities Flint expected, the quantities counted, and the variance applied.

Field definitions: [shared fields](InventoryCountLineInput.md#inventorycountlineinput).

### InventoryCountResponse.data.observation_provenance

Source system, actor, and time reported with the count's observations. Where an inventory count came from: the source system, an external actor ID, and when the event occurred.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `external_actor_id` | Optional | string | Your identifier for the actor who recorded the event. Don't put secrets in this field. maxLength: `255`. Example: `"warehouse-1842"`. |
| `occurred_at` | Optional | string | When the event occurred, at most 5 minutes in the future. Required when source_system.type is pos, wms, erp, or other. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `source_system` | Required | [InventorySourceSystem](../models/InventorySourceSystem.md#inventorysourcesystem) or null | System the change came from, such as a point-of-sale or warehouse system. `null` when the request named no source system. `source_system`: [declared alternatives](../models/InventoryCountResponse.md#inventorycountresponsedataobservation_provenancesource_system). |

### InventoryCountResponse.data.observation_provenance.source_system

System the change came from, such as a point-of-sale or warehouse system. `null` when the request named no source system.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `external_source_id` | Conditional | string | Your source system's identifier. Required when type is pos, wms, erp, or other; not allowed when type is manual. Don't put secrets in this field. maxLength: `255`. Example: `"warehouse-1842"`. |
| `type` | Conditional | string | Source of the event: manual for a manual entry, pos for a point of sale, wms for a warehouse management system, erp for an enterprise resource planning system, or other for another external system. Flint-authored events use flint in responses. Values: `"manual"`, `"pos"`, `"wms"`, `"erp"`, `"flint"`, `"other"`. |

### InventoryCountResponse.data.observation_provenance.source_system variant 1

anyOf InventorySourceSystem: The system an inventory event came from, such as manual entry, a point of sale, a warehouse system, or Flint, with your source identifier when it applies..

- Required: `type`.
- Optional: `external_source_id`.

### InventoryCountResponse.data.observation_provenance.source_system variant 2

anyOf variant 2.

- Undeclared: `external_source_id`, `type`.
- Value shape: null. System the change came from, such as a point-of-sale or warehouse system. `null` when the request named no source system. 

### InventoryCountResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

