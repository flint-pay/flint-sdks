[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateReturnInspectionRequestInput

The request body for: Create return inspection.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `correction_reason` | Optional | string | Values: `"entry_error"`, `"duplicate_observation"`, `"source_correction"`, `"reconciliation_correction"`, `"other"`. |
| `correction_reason_message` | Optional | string | minLength: `1`. |
| `external_actor_id` | Optional | string | Your identifier for the actor who recorded the event. Don't put secrets in this field. minLength: `1`. maxLength: `255`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `inspected_at` | Required | string | When the event occurred, at most 5 minutes in the future. Format: `date-time`. minLength: `1`. |
| `inspection_location_id` | Required | string | Location where the returned merchandise was inspected. Must match the receipt receiving_location_id. minLength: `1`. |
| `line_items` | Required | Array of [ReturnInspectionLineItemRequestInput](../models/ReturnInspectionLineItemRequestInput.md#returninspectionlineitemrequestinput) | minItems: `1`. |
| `return_receipt_id` | Required | string | minLength: `1`. |
| `source_system` | Optional | [ReturnSourceSystemInput](../models/ReturnSourceSystemInput.md#returnsourcesysteminput) | The system a return event came from, such as a point of sale or warehouse system, with its own identifier. |
| `supersedes_return_inspection_id` | Optional | string | minLength: `1`. |

