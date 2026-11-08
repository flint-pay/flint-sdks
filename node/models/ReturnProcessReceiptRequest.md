[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnProcessReceiptRequest

The receipt of returned merchandise, with when and where it was received, supplied when processing an existing return.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `external_actor_id` | Optional | string | Your identifier for the actor who recorded the event. Don't put secrets in this field. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. |
| `received_at` | Required | string | When the event occurred, at most 5 minutes in the future. Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. |
| `receiving_location_id` | Required | string | ID of the Location that received the goods. minLength: `1`. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `source_system` | Optional | [ReturnSourceSystemRequest](../models/ReturnSourceSystemRequest.md#returnsourcesystemrequest) | System that recorded the observation. `null` when no source system was recorded. The system a return event came from, such as a point of sale or warehouse system, with its own identifier. |

