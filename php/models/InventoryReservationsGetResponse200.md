[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryReservationsGetResponse200

A response containing `InventoryReservation` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [InventoryReservation](../models/InventoryReservation.md#inventoryreservation) | A claim on stock. Quantity moves from held to committed to consumed, and can be released or reallocated. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

