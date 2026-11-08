[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnInspection

An assessment of the condition of returned items.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `correction_reason` | Optional | string | Why this observation replaces an earlier one. Send with `supersedes_return_receipt_id` or `supersedes_return_inspection_id`. Values: `"entry_error"`, `"duplicate_observation"`, `"source_correction"`, `"reconciliation_correction"`, `"other"`. |
| `correction_reason_message` | Optional | string | Detail about `correction_reason`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `external_actor_id` | Optional | string | Your identifier for the actor who recorded the event. Don't put secrets in this field. maxLength: `255`. Example: `"warehouse-1842"`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. Example: `"warehouse-1842"`. |
| `generated_dispositions` | Required | Array of [ReturnDisposition](../models/ReturnDisposition.md#returndisposition) | Dispositions Flint created when it recorded this observation. Empty unless the policy's `receipt_disposition_mode` is `automatic`. |
| `inspected_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `inspection_location_id` | Required | string | Location where the returned merchandise was inspected. Must match the receipt receiving_location_id. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `line_items` | Required | Array of [ReturnInspectionLineItem](../models/ReturnInspectionLineItem.md#returninspectionlineitem) | The lines recorded. |
| `return_id` | Required | string | ID of the Return the goods belong to. Example: `"ret_01KEZF7C00PG93650ZKVQNGF7X"`. |
| `return_inspection_id` | Required | string | Unique identifier for this return inspection, prefixed `retins_`. Example: `"retins_01KEZF7C00WPB0BR4WTT7CMSB8"`. |
| `return_receipt_id` | Required | string | ID of the receipt being inspected. Example: `"retrc_01KEZF7C0052GWDW41D9AJAVJZ"`. |
| `source_system` | Required | [ReturnSourceSystem](../models/ReturnSourceSystem.md#returnsourcesystem) or null | System that recorded the observation. `null` when no source system was recorded. |
| `status` | Required | string | Whether this is the current observation of these units or a correction replaced it. Values: `"current"`, `"superseded"`. |
| `superseded_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `superseded_by_return_inspection_id` | Optional | string | ID of the inspection that corrected this one. Absent while it is current. Example: `"retins_01KEZF7C00WPB0BR4WTT7CMSB8"`. |
| `supersedes_return_inspection_id` | Optional | string | ID of the inspection this one corrects. Example: `"retins_01KEZF7C00WPB0BR4WTT7CMSB8"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: `int64`. minimum: `1`. |

