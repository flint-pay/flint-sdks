[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnReceiptInput

A record of returned items arriving at a location.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `correction_reason` | Optional | string | Why this observation replaces an earlier one. Send with `supersedes_return_receipt_id` or `supersedes_return_inspection_id`. Values: `"entry_error"`, `"duplicate_observation"`, `"source_correction"`, `"reconciliation_correction"`, `"other"`. |
| `correction_reason_message` | Optional | string | Detail about `correction_reason`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `external_actor_id` | Optional | string | Your identifier for the actor who recorded the event. Don't put secrets in this field. maxLength: `255`. Example: `"warehouse-1842"`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. Example: `"warehouse-1842"`. |
| `generated_dispositions` | Required | Array of [ReturnDispositionInput](../models/ReturnDispositionInput.md#returndispositioninput) | Dispositions Flint created when it recorded this observation. Empty unless the policy's `receipt_disposition_mode` is `automatic`. |
| `line_items` | Required | Array of [ReturnReceiptLineItemInput](../models/ReturnReceiptLineItemInput.md#returnreceiptlineiteminput) | The lines recorded. |
| `received_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `receiving_location_id` | Required | string | ID of the Location that received the goods. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `return_id` | Required | string | ID of the Return the goods belong to. Example: `"ret_01KEZF7C00PG93650ZKVQNGF7X"`. |
| `return_receipt_id` | Required | string | Unique identifier for this return receipt, prefixed `retrc_`. Example: `"retrc_01KEZF7C0052GWDW41D9AJAVJZ"`. |
| `shipment_id` | Optional | string | ID of the return shipment the goods arrived in. Absent when the receipt isn't tied to a shipment. Example: `"shp_01KEZF7C00Q2AFXWXHMCDR3F68"`. |
| `source_system` | Required | [ReturnSourceSystemInput](../models/ReturnSourceSystemInput.md#returnsourcesysteminput) or null | System that recorded the observation. `null` when no source system was recorded. |
| `status` | Required | string | Whether this is the current observation of these units or a correction replaced it. Values: `"current"`, `"superseded"`. |
| `superseded_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `superseded_by_return_receipt_id` | Optional | string | ID of the receipt that corrected this one. Absent while it is current. Example: `"retrc_01KEZF7C0052GWDW41D9AJAVJZ"`. |
| `supersedes_return_receipt_id` | Optional | string | ID of the receipt this one corrects. Example: `"retrc_01KEZF7C0052GWDW41D9AJAVJZ"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: `int64`. minimum: `1`. |

