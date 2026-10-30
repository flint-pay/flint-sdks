[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnProcessReceiptRequestInput

The receipt of returned merchandise, with when and where it was received, supplied when processing an existing return.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `external_actor_id` | Optional | string | Your identifier for the actor who recorded the event. Don't put secrets in this field. minLength: `1`. maxLength: `255`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `received_at` | Required | string | When the event occurred, at most 5 minutes in the future. Format: `date-time`. minLength: `1`. |
| `receiving_location_id` | Required | string | minLength: `1`. |
| `source_system` | Optional | [ReturnSourceSystemRequestInput](../models/ReturnSourceSystemRequestInput.md#returnsourcesystemrequestinput) | The system a return event came from, such as a point of sale or warehouse system, with its own identifier. |

