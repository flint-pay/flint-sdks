[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnDispositionInput

A decision about how returned merchandise will be handled.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `canceled_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `canceled_by` | Optional | [ReturnActorInput](../models/ReturnActorInput.md#returnactorinput) | Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. |
| `cancellation_reason` | Optional | string | Values: `"created_in_error"`, `"changed_disposition"`, `"duplicate"`, `"other"`. |
| `cancellation_reason_message` | Optional | string |  |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `created_by` | Required | [ReturnActorInput](../models/ReturnActorInput.md#returnactorinput) | Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. |
| `disposition_type` | Required | string | Values: `"sellable"`, `"quality_control"`, `"damaged"`, `"quarantined"`, `"repair"`, `"refurbish"`, `"liquidate"`, `"donate"`, `"discard"`, `"return_to_buyer"`, `"lost"`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. |
| `failure_code` | Optional | string | Reason code for a failed merchandise disposition, when available. Values: `"inventory_effect_failed"`, `"inventory_item_unmapped"`. |
| `failure_message` | Optional | string | Explanation of a failed merchandise disposition, when available. |
| `inventory_location_id` | Optional | string |  |
| `inventory_movement_ids` | Required | Array of string |  |
| `inventory_receipt_id` | Optional | string |  |
| `metadata` | Required | Map of string |  |
| `occurred_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `quantity` | Required | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `reason` | Required | string | Values: `"inspection_result"`, `"return_policy"`, `"warehouse_override"`, `"safety_requirement"`, `"other"`. |
| `reason_message` | Optional | string |  |
| `replaced_by_return_disposition_id` | Optional | string |  |
| `replaces_return_disposition_id` | Optional | string |  |
| `return_disposition_id` | Required | string |  |
| `return_id` | Required | string |  |
| `return_inspection_line_item_id` | Optional | string |  |
| `return_line_item_id` | Optional | string |  |
| `return_receipt_line_item_id` | Optional | string |  |
| `status` | Required | string | Values: `"pending"`, `"succeeded"`, `"failed"`, `"canceled"`. |
| `supported_actions` | Required | Array of string | Actions that can succeed now. Empty unless the parent Return is open. cancel is listed only before the inventory effect starts. Items values: `"cancel"`, `"retry"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `0`. |

