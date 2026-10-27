[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryMovementsGetResponse200

A response containing `InventoryMovement` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [InventoryMovement](../models/InventoryMovement.md#inventorymovement) | An immutable record of a single quantity change, including the level state it produced. `data`: [field definitions](../models/InventoryMovementsGetResponse200.md#inventorymovementsgetresponse200data). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### InventoryMovementsGetResponse200.data

An immutable record of a single quantity change, including the level state it produced.

Field definitions: [shared fields](InventoryMovement.md#inventorymovement).

