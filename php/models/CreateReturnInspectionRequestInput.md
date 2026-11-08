[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateReturnInspectionRequestInput

The request body for: Create return inspection.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `correction_reason` | Optional | string | Why this observation replaces an earlier one. Send with `supersedes_return_receipt_id` or `supersedes_return_inspection_id`. Values: `"entry_error"`, `"duplicate_observation"`, `"source_correction"`, `"reconciliation_correction"`, `"other"`. |
| `correction_reason_message` | Optional | string | Detail about `correction_reason`. minLength: `1`. |
| `external_actor_id` | Optional | string | Your identifier for the actor who recorded the event. Don't put secrets in this field. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. |
| `inspected_at` | Required | string | When the event occurred, at most 5 minutes in the future. Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. |
| `inspection_location_id` | Required | string | Location where the returned merchandise was inspected. Must match the receipt receiving_location_id. minLength: `1`. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `line_items` | Required | Array of [ReturnInspectionLineItemRequestInput](../models/ReturnInspectionLineItemRequestInput.md#returninspectionlineitemrequestinput) | The lines recorded. minItems: `1`. |
| `return_receipt_id` | Required | string | ID of the receipt being inspected. minLength: `1`. Example: `"retrc_01KEZF7C0052GWDW41D9AJAVJZ"`. |
| `source_system` | Optional | [ReturnSourceSystemRequestInput](../models/ReturnSourceSystemRequestInput.md#returnsourcesystemrequestinput) | System that recorded the observation. `null` when no source system was recorded. The system a return event came from, such as a point of sale or warehouse system, with its own identifier. |
| `supersedes_return_inspection_id` | Optional | string | ID of the inspection this one corrects. minLength: `1`. Example: `"retins_01KEZF7C00WPB0BR4WTT7CMSB8"`. |

