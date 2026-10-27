[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryReservationResultResponse

A response containing `InventoryReservationResult` data.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [InventoryReservationResult](../models/InventoryReservationResult.md#inventoryreservationresult) | inventory_reservation is the primary resource and expected_version target. Stock-moving transitions return this result instead of a resource alone. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

