[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryAdjustmentsGetResponse200

A response containing `InventoryAdjustment` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [InventoryAdjustment](../models/InventoryAdjustment.md#inventoryadjustment) | A recorded stock change with its reason and the quantity changes Flint computed. `data`: [field definitions](../models/InventoryAdjustmentsGetResponse200.md#inventoryadjustmentsgetresponse200data). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### InventoryAdjustmentsGetResponse200.data

A recorded stock change with its reason and the quantity changes Flint computed.

Field definitions: [shared fields](InventoryAdjustment.md#inventoryadjustment).

