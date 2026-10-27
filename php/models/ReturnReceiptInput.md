[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnReceiptInput

A record of returned items arriving at a location.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `correction_reason` | Optional | string | Values: `"entry_error"`, `"duplicate_observation"`, `"source_correction"`, `"reconciliation_correction"`, `"other"`. |
| `correction_reason_message` | Optional | string |  |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `external_actor_id` | Optional | string | Your identifier for the actor who recorded the event. Don't put secrets in this field. maxLength: `255`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. |
| `generated_dispositions` | Required | Array of [ReturnDispositionInput](../models/ReturnDispositionInput.md#returndispositioninput) |  |
| `line_items` | Required | Array of [ReturnReceiptLineItemInput](../models/ReturnReceiptLineItemInput.md#returnreceiptlineiteminput) |  |
| `received_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `receiving_location_id` | Required | string |  |
| `return_id` | Required | string |  |
| `return_receipt_id` | Required | string |  |
| `shipment_id` | Optional | string |  |
| `source_system` | Required | [ReturnSourceSystemInput](../models/ReturnSourceSystemInput.md#returnsourcesysteminput) or null |  |
| `status` | Required | string | Values: `"current"`, `"superseded"`. |
| `superseded_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `superseded_by_return_receipt_id` | Optional | string |  |
| `supersedes_return_receipt_id` | Optional | string |  |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |

