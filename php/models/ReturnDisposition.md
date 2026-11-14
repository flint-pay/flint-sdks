[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnDisposition

A decision about how returned merchandise will be handled.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `canceled_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `canceled_by` | Optional | [ReturnActor](../models/ReturnActor.md#returnactor) | Who canceled the disposition. Merchant reads only. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. `canceled_by`: [field definitions](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_dispositionscanceled_by). |
| `cancellation_reason` | Optional | string | Why the disposition was canceled. Values: `"created_in_error"`, `"changed_disposition"`, `"duplicate"`, `"other"`. |
| `cancellation_reason_message` | Optional | string | Detail sent with the cancellation. Merchant reads only. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `created_by` | Required | [ReturnActor](../models/ReturnActor.md#returnactor) | Who created the disposition. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. `created_by`: [field definitions](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_dispositionscreated_by). |
| `disposition_type` | Required | string | What happens to the received units. Values: `"sellable"`, `"quality_control"`, `"damaged"`, `"quarantined"`, `"repair"`, `"refurbish"`, `"liquidate"`, `"donate"`, `"discard"`, `"return_to_buyer"`, `"lost"`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. |
| `failure_code` | Optional | string | Reason code for a failed merchandise disposition, when available. Values: `"inventory_effect_failed"`, `"inventory_item_unmapped"`. |
| `failure_message` | Optional | string | Explanation of a failed merchandise disposition, when available. |
| `inventory_location_id` | Optional | string | ID of the Location whose stock the disposition changes. Required for `sellable`, `quality_control`, `damaged`, `quarantined`, and `lost`; rejected for the other types. |
| `inventory_movement_ids` | Required | Array of string | IDs of the inventory movements the disposition wrote. Empty when it moved no stock. |
| `inventory_receipt_id` | Optional | string | ID of the inventory receipt the disposition recorded. Absent when it recorded none. |
| `metadata` | Required | Map of string | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/OrderResponse.md#orderresponsedatachargesmetadata). |
| `occurred_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `reason` | Required | string | Why the disposition was made. Values: `"inspection_result"`, `"return_policy"`, `"warehouse_override"`, `"safety_requirement"`, `"other"`. |
| `reason_message` | Optional | string | Optional detail about `reason`, kept with the record. |
| `replaced_by_return_disposition_id` | Optional | string | ID of the disposition that took over this one. Present when a replacement canceled it. |
| `replaces_return_disposition_id` | Optional | string | ID of the `failed` or `canceled` disposition this one replaces. It takes over that disposition's unused capacity. |
| `return_disposition_id` | Required | string | Unique identifier for this return disposition, prefixed `retdsp_`. |
| `return_id` | Required | string |  |
| `return_inspection_id` | Required | string or null | Inspection that owns return_inspection_line_item_id. `null` when return_inspection_line_item_id is null. |
| `return_inspection_line_item_id` | Optional | string | ID of the inspection line the disposition covers. Absent when it covers a receipt line. |
| `return_line_item_id` | Optional | string | ID of the Return line the units belong to. |
| `return_receipt_id` | Required | string or null | Receipt that owns return_receipt_line_item_id. `null` when return_receipt_line_item_id is null. |
| `return_receipt_line_item_id` | Optional | string | ID of the receipt line the disposition covers. Absent when it covers an inspection line. |
| `status` | Required | string | Whether inventory has applied the disposition. Values: `"pending"`, `"succeeded"`, `"failed"`, `"canceled"`. |
| `supported_actions` | Required | Array of string | Actions that can succeed now. Empty unless the parent Return is open. cancel is listed only before the inventory effect starts. Items values: `"cancel"`, `"retry"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: `int64`. minimum: `0`. |

### ReturnDisposition.canceled_by

Field definitions: [CancelReturnResponse.data.return_dispositions[].canceled_by](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_dispositionscanceled_by).

### ReturnDisposition.created_by

Field definitions: [CancelReturnResponse.data.return_dispositions[].created_by](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_dispositionscreated_by).

### ReturnDisposition.metadata

Field definitions: [OrderResponse.data.charges[].metadata](../models/OrderResponse.md#orderresponsedatachargesmetadata).

