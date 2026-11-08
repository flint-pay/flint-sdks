[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnReceipt

A record of returned items arriving at a location.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `correction_reason` | Optional | string | Why this observation replaces an earlier one. Send with `supersedes_return_receipt_id` or `supersedes_return_inspection_id`. Values: `"entry_error"`, `"duplicate_observation"`, `"source_correction"`, `"reconciliation_correction"`, `"other"`. |
| `correction_reason_message` | Optional | string | Detail about `correction_reason`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `external_actor_id` | Optional | string | Your identifier for the actor who recorded the event. Don't put secrets in this field. maxLength: `255`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. |
| `generated_dispositions` | Required | Array of [ReturnDisposition](../models/ReturnDisposition.md#returndisposition) | Dispositions Flint created when it recorded this observation. Empty unless the policy's `receipt_disposition_mode` is `automatic`. `generated_dispositions[]`: [field definitions](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_dispositions). |
| `line_items` | Required | Array of [ReturnReceiptLineItem](../models/ReturnReceiptLineItem.md#returnreceiptlineitem) | The lines recorded. `line_items[]`: [field definitions](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_receiptsline_items). |
| `received_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `receiving_location_id` | Required | string | ID of the Location that received the goods. |
| `return_id` | Required | string | ID of the Return the goods belong to. |
| `return_receipt_id` | Required | string | Unique identifier for this return receipt, prefixed `retrc_`. |
| `shipment_id` | Optional | string | ID of the return shipment the goods arrived in. Absent when the receipt isn't tied to a shipment. |
| `source_system` | Required | [ReturnSourceSystem](../models/ReturnSourceSystem.md#returnsourcesystem) or null | System that recorded the observation. `null` when no source system was recorded. |
| `status` | Required | string | Whether this is the current observation of these units or a correction replaced it. Values: `"current"`, `"superseded"`. |
| `superseded_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `superseded_by_return_receipt_id` | Optional | string | ID of the receipt that corrected this one. Absent while it is current. |
| `supersedes_return_receipt_id` | Optional | string | ID of the receipt this one corrects. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: `int64`. minimum: `1`. |

### ReturnReceipt.generated_dispositions[]

Field definitions: [CancelReturnResponse.data.return_dispositions[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_dispositions).

### ReturnReceipt.line_items[]

Field definitions: [CancelReturnResponse.data.return_receipts[].line_items[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_receiptsline_items).

