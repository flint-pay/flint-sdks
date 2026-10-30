[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnInspectionInput

An assessment of the condition of returned items.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `correction_reason` | Optional | string | Values: `"entry_error"`, `"duplicate_observation"`, `"source_correction"`, `"reconciliation_correction"`, `"other"`. |
| `correction_reason_message` | Optional | string |  |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `external_actor_id` | Optional | string | Your identifier for the actor who recorded the event. Don't put secrets in this field. maxLength: `255`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. |
| `generated_dispositions` | Required | Array of [ReturnDispositionInput](../models/ReturnDispositionInput.md#returndispositioninput) |  |
| `inspected_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `inspection_location_id` | Required | string | Location where the returned merchandise was inspected. Must match the receipt receiving_location_id. |
| `line_items` | Required | Array of [ReturnInspectionLineItemInput](../models/ReturnInspectionLineItemInput.md#returninspectionlineiteminput) |  |
| `return_id` | Required | string |  |
| `return_inspection_id` | Required | string |  |
| `return_receipt_id` | Required | string |  |
| `source_system` | Required | [ReturnSourceSystemInput](../models/ReturnSourceSystemInput.md#returnsourcesysteminput) or null |  |
| `status` | Required | string | Values: `"current"`, `"superseded"`. |
| `superseded_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `superseded_by_return_inspection_id` | Optional | string |  |
| `supersedes_return_inspection_id` | Optional | string |  |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer | Format: `int64`. minimum: `1`. |

